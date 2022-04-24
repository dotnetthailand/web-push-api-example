// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

import { isJsxOpeningLikeElement } from "typescript";

// https://web-push-book.gauntface.com/display-a-notification/
self.addEventListener('push', (event) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data
  const payload = event.data.json();
  console.log(`payload: ${JSON.stringify(payload, null, 2)}`);

  const options = {
    body: payload.body,
    vibrate: [300, 100, 400], // Vibrate 300ms, pause 100ms, then vibrate 400ms
    icon: './favicon.ico',
    //image: '',
    // The notification object includes a tag attribute that is the grouping key. 
    // When creating a notification with a tag and there is already a notification with the same tag visible to the user, 
    // the system automatically replaces it without creating a new notification. 
    // tag: 'vibration-sample',
    actions: [
      {
        // https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#the_notificationclick_event 
        action: 'open-product-link',
        title: `Open product's link`,
        //icon: '/demos/notification-examples/images/action-1-128x128.png'
      }
    ],
    data: {
      url: payload.url
    }
  }; // end of options

  // https://javascript.info/promise-basics
  // https://javascript.info/async-await

  // https://swizec.com/blog/how-to-add-real-web-push-notifications-to-your-webapp/
  event.waitUntil(showNotificationAsync(payload, options));

});

// aync function is a function that synchronously returns a promise
async function showNotificationAsync(payload, options) {
  await self.registration.showNotification(payload.title, options);
}

// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event#examples
self.addEventListener('notificationclick', (event) => {
  const { action, notification: { data } } = event;
  console.log(JSON.stringify(data, null, 2))
  event.waitUntil(openProductLink(action, data));
});

async function openProductLink(action, data) {
  notification.close();
  if (action === 'open-product-link') {
    // https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow#return_value
    await clients.openWindow(data.url);
  }
}
