import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

const keyList = ['12345', '54321', '98765'];
app.get('/', (req, res) => {
    const key = req.query.key;
    // Only allow access if the key is exactly '12345'
    if (keyList.includes(key)) {
        res.sendFile(path.join(__dirname, 'IVAC-smart-panel-script-v1.0.js'));
    } else {
        console.log('Access denied');
        res.status(403).send('<div style="width: 100%; height: 100vh; text-align: center; margin-top: 50px; font-size: 56px;">\Access denied\</div>');
    }
});

app.listen(3002, () => {
    console.log('Server started on port 3000');
});