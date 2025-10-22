// const Imap = require('imap');
// const { simpleParser } = require('mailparser');

import Imap from 'imap';
import { simpleParser } from 'mailparser';

export default async function otpFetch(email, appPassword){
    return new Promise((resolve, reject) => {
            let otp = '';
    const imap = new Imap({
  user: email,
  password: appPassword,
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
});

function openInbox(cb) {
  imap.openBox('INBOX', true, cb);
}

imap.once('ready', function () {
  openInbox(function (err, box) {
    if (err) return reject(err);

    imap.search([['BODY', 'otp']], function (err, results) {
      if (err) return reject(err);
      if (!results || results.length === 0) {
        console.log('No OTP emails found.');
        imap.end();
        return resolve('No OTP found');
      }

      // Sort and get the latest message ID
      const latest = results.sort((a, b) => b - a)[0];

      const fetch = imap.fetch(latest, { bodies: '' });

      fetch.on('message', function (msg) {
        msg.on('body', function (stream) {
          simpleParser(stream, async (err, parsed) => {
            const text = parsed.text || '';
            const otpMatch = text.match(/\b\d{4,8}\b/); // Adjust pattern as needed
            imap.end();
            resolve(otpMatch ? otpMatch[0] : 'No OTP found');
          });
        });
      });

      fetch.once("error", err=>reject(err));
    });
  });
});

imap.once('error', function (err) {
  console.error('❌ IMAP error:', err);
});

imap.once('end', function () {
  console.log('📤 Connection ended');
});

imap.connect();
    })
}
