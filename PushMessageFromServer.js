const webpush = require('web-push');

// VAPID keys should be generated only once with: 
// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);

const vapidKeys = {
  publicKey: 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s',
  privateKey: 'wDf6oqOkg0SQ3FD8NU9ZNrwVZWIGBfm1gPgp6QNXWjk'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');