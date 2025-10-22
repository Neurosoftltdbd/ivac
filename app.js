import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import otpFetch from './imap.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let keyData = null;
let requestedData = [];

// Load key data
try {
    const keyFile = fs.readFileSync(path.join(__dirname, 'key.json'), 'utf8');
    if (keyFile) {
        keyData = JSON.parse(keyFile);
        console.log('\n\nKey data loaded successfully');
        console.log(keyData);
    } else {
        console.log('Key file not found');
        keyData = {};
    }
} catch (error) {
    console.log('Error loading key file:', error);
    keyData = {};
}

// Load requested data
try {
    const alreadyRequested = fs.readFileSync(path.join(__dirname, 'requestedDeviceId.json'), 'utf8');
    if (alreadyRequested) {
        requestedData = JSON.parse(alreadyRequested);
        console.log('\n\nRequested data loaded successfully');
        console.log(requestedData);
    }
} catch (error) {
    console.log('Error loading requested data:', error);
    requestedData = [];
}

const isInRequestedData = (deviceId, key) => {
    return requestedData.some(item => item.deviceId === deviceId && item.key === key);
}

// Set CORS headers function
const setCorsHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Device-ID, Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
};

// Create server
const server = http.createServer(async (req, res) => {
    try {
        // Handle OPTIONS request for CORS preflight
        if (req.method === 'OPTIONS') {
            setCorsHeaders(res);
            res.writeHead(200);
            return res.end();
        }
        setCorsHeaders(res);

        if (req.url === '/otp' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => (body += chunk));
            req.on('end', async () => {
                const { email, appPassword } = JSON.parse(body);
                console.log(email, appPassword);
                try {
                    const otp = await otpFetch(email, appPassword);
                    res.end(otp);
                } catch (err) {
                    res.end('Error fetching OTP: ' + err.message);
                }
            });
            // const otp = await otpFetch(email, appPassword);
            // res.writeHead(200, {'Content-Type': 'text/html'});
            // const response = otp;
            // return res.end(response);
        }else{
        const url = new URL(req.url, `http://${req.headers.host}`);
        const key = url.searchParams.get('key');

        const deviceId = req.headers['x-device-id'];
        if (!deviceId) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Missing device ID' + req.url);
        }

        if (!key) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Missing key parameter');
        }

        // Check if key exists in keyData
        if (!keyData[key]) {
            res.writeHead(401, { 'Content-Type': 'text/html' });
            const response = '<div style="width: 100%; height: 100vh; text-align: center; margin-top: 50px; font-size: 56px;">Invalid Key</div>';
            return res.end(response);
        }

        // Device is authorized
        if (keyData[key].includes(deviceId)) {
            const filePath = path.join(__dirname, 'IVAC.js');

            // Check if file exists
            if (!fs.existsSync(filePath)) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('Script file not found');
            }

            res.writeHead(200, {
                'Content-Type': 'application/javascript',
                'Content-Length': fs.statSync(filePath).size
            });

            fs.createReadStream(filePath)
                .on('error', (error) => {
                    console.error('File read error:', error);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error reading script file');
                })
                .pipe(res);

        }
        // Already requested access
        else if (isInRequestedData(deviceId, key)) {
            res.writeHead(401, { 'Content-Type': 'text/html' });
            const response = '<div style="width: 100%; height: 100vh; text-align: center; margin-top: 50px; font-size: 24px;">You have already requested access for this key. Please wait for approval.</div>';
            return res.end(response);
        }
        // New request for access
        else {
            const newEntry = {
                key,
                deviceId,
                timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
            };
            requestedData.push(newEntry);

            // Save to file asynchronously
            fs.writeFile(
                path.join(__dirname, 'requestedDeviceId.json'),
                JSON.stringify(requestedData, null, 2),
                (err) => {
                    if (err) {
                        console.log('Error writing device id to file:', err);
                    }
                }
            );

            res.writeHead(200, { 'Content-Type': 'text/html' });
            const response = '<div style="width: 100%; height: 100vh; text-align: center; margin-top: 50px; font-size: 24px;">Access request submitted successfully. Please wait for approval.</div>';
            return res.end(response);
        }

    }

    } catch (error) {
        console.log('Error in server request:', error);
        setCorsHeaders(res);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});