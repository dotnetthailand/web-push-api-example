// https://developers.google.com/web/updates/2015/05/notifying-you-of-changes-to-notifications
// https://felixgerschau.com/web-push-notifications-tutorial/
// https://developers.google.com/web/fundamentals/codelabs/push-notifications
const webPush = require('web-push');

// VAPID keys should be generated only once with: 
// node GenWebPushKey.js

const vapidKeys = {
  publicKey: 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s',
  privateKey: 'wDf6oqOkg0SQ3FD8NU9ZNrwVZWIGBfm1gPgp6QNXWjk'
};

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is an sample subscription object that we get after subscript on browser
const pushSubscription =

{
  "endpoint": "https://fcm.googleapis.com/fcm/send/fRXzVzVNHiY:APA91bH54ZXsVo1qq0FVb_OoPZ_CPRB2U-CGX6x8seB90AjpZQyu_AIS7BZXQ6XgV9BNBYBCC8_fL3dXxEaAgzNngOcU1ebuHlzfeXb_mAx5KpXlE1on_HEwZi8WPjdyNS9dONGmDaBT",
  "expirationTime": null,
  "keys": {
    "p256dh": "BPR7g7k8pWxYFGoF6JRFcXKj6iKjg1bYZQQqB0Ele-LAeY7IhrapymrWMikxnRw82_euZLAFfnD8FT-TZfSsfJA",
    "auth": "P7ldHqkHFLl93VEkYFi20w"
  }
}

const payload = {
  title: `Hello at ${(new Date()).toISOString()}`,
  url: 'https://www.dotnetthailand.com/web-frameworks/orchard-core-cms/why-orchard-core-cms'
};

webPush.sendNotification(
  pushSubscription,
  JSON.stringify(payload)
);