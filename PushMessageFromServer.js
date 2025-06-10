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
  "endpoint": "https://fcm.googleapis.com/fcm/send/eh4su7PQuF4:APA91bGJ2lTdArT_n0zLEkth_p7NTqyQ41KtXO5p0SsbcQ2iGgLHz1Y8FyDFS-MnWZjD5e6fair2TozX1bvccy_pHo4k-B3Ov_SLI-7lRvTE1_dppXQvP6IawxnSTBQk6AK5o4ks_mHv",
  "expirationTime": null,
  "keys": {
    "p256dh": "BEIlI4DO6N7gKHmT_FMHVHt8D2X4FWJp3vx9L8MOONfOsYNuYuxWAUWsscEWH4q5c-t6l5s769gGJr74n40H74w",
    "auth": "HSyGvAqddC7T0crQ3B6bHw"
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