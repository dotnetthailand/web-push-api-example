// https://developers.google.com/web/updates/2015/05/notifying-you-of-changes-to-notifications
// https://felixgerschau.com/web-push-notifications-tutorial/
// https://developers.google.com/web/fundamentals/codelabs/push-notifications
const webPush = require('web-push');
const pushSubscription = require('./pushSubscription.json')

// VAPID keys should be generated only once with: 
// const vapidKeys = webPush.generateVAPIDKeys();
// console.log(vapidKeys);

const vapidKeys = {
  publicKey: 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s',
  privateKey: 'wDf6oqOkg0SQ3FD8NU9ZNrwVZWIGBfm1gPgp6QNXWjk'
};

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// pushSubscription is an sample subscription object that we get after subscript on browser

const payload = {
  title: `Hello at ${(new Date()).toISOString()}`,
  url: 'https://www.dotnetthailand.com/web-frameworks/orchard-core-cms/why-orchard-core-cms'
};

webPush.sendNotification(pushSubscription, JSON.stringify(payload));