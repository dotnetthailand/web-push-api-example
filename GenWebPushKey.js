// https://developers.google.com/web/updates/2015/05/notifying-you-of-changes-to-notifications
// https://felixgerschau.com/web-push-notifications-tutorial/
// https://developers.google.com/web/fundamentals/codelabs/push-notifications
const webPush = require('web-push');

//VAPID keys should be generated only once with: 
const vapidKeys = webPush.generateVAPIDKeys();
console.log(vapidKeys);
