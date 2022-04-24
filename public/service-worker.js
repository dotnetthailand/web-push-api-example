// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
// https://web-push-book.gauntface.com/display-a-notification/
self.addEventListener('push', (event) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data
  const payload = event.data.json();

  const options = {
    body: payload.body,
    vibrate: [300, 100, 400], // Vibrate 300ms, pause 100ms, then vibrate 400ms
    icon: './favicon.ico',
    //image: '',
    // The notification object includes a tag attribute that is the grouping key. 
    // When creating a notification with a tag and there is already a notification with the same tag visible to the user, 
    // the system automatically replaces it without creating a new notification. 
    tag: 'vibration-sample',
    actions: [
      {
        // https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#the_notificationclick_event 
        action: 'open-a-link',
        title: 'Open a link',
        //icon: '/demos/notification-examples/images/action-1-128x128.png'
      }
    ],
  }; // end of options

  event.waitUntil(
    self.registration.showNotification(payload.title, options)
  );
});

// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event#examples