const Imap = require('imap');
const { simpleParser } = require('mailparser');

const imap = new Imap({
  user: 'Ruponsahabd@gmail.com',
  password: 'ceqt ukvq hukp quax',
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
    if (err) throw err;

    // Search for emails that contain "otp" in the body or subject
    imap.search([['BODY', 'otp']], function (err, results) {
      if (err) throw err;
      if (!results || results.length === 0) {
        console.log('No OTP emails found.');
        imap.end();
        return;
      }

      const fetch = imap.fetch(results, { bodies: '' });

      fetch.on('message', function (msg, seqno) {
        msg.on('body', function (stream) {
          simpleParser(stream, async (err, parsed) => {
            if (parsed.subject?.toLowerCase().includes('otp') || parsed.text?.toLowerCase().includes('otp')) {
              console.log(`📧 Subject: ${parsed.subject}`);
              console.log(`📝 Text: ${parsed.text}`);
            }
          });
        });
      });

      fetch.once('end', function () {
        console.log('✅ Done fetching OTP emails');
        imap.end();
      });
    });

//     imap.search([ 'UNSEEN', ['BODY', 'otp'], 'NEW' ], function (err, results) {
//   if (err) throw err;
//   if (!results || results.length === 0) {
//     console.log('No new unread OTP emails found.');
//     imap.end();
//     return;
//   }

//   const fetch = imap.fetch(results, { bodies: '' });

//   fetch.on('message', function (msg, seqno) {
//     msg.on('body', function (stream) {
//       simpleParser(stream, async (err, parsed) => {
//         console.log(`📧 Subject: ${parsed.subject}`);
//         console.log(`📝 Text: ${parsed.text}`);
//       });
//     });
//   });

//   fetch.once('end', function () {
//     console.log('✅ Done fetching filtered OTP emails');
//     imap.end();
//   });
// });


  });


});

imap.once('error', function (err) {
  console.error('❌ IMAP error:', err);
});

imap.once('end', function () {
  console.log('📤 Connection ended');
});


imap.connect();

