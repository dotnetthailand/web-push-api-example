// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
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
        action: 'open-a-link',
        title: `Open a link`,
        //icon: '/demos/notification-examples/images/action-1-128x128.png'
      }
    ],
    data: {
      url: payload.url
    }

    // Chrome does not support sound attribute https://github.com/GoogleChromeLabs/airhorn/issues/18
  }; // end of options

  // https://javascript.info/promise-basics
  // https://javascript.info/async-await

  // https://swizec.com/blog/how-to-add-real-web-push-notifications-to-your-webapp/
  event.waitUntil(showNotificationAsync(payload, options));

});

// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event#examples
// self.addEventListener('notificationclick', (event) => {
//   const { action, notification } = event;
//   notification.close();

//   if (action === 'open-a-link') {
//     // https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow#return_value
//     // https://web-push-book.gauntface.com/common-notification-patterns/
//     //clients.openWindow(notification.data.url);
//     event.waitUntil(openLink(notification.data));
//   }
// });


self.addEventListener('notificationclick', (event) => {
  const { action, notification } = event;
  notification.close();

  const { url } = notification.data;
  event.waitUntil(sendMessage(event, url));
});


// https://developer.mozilla.org/en-US/docs/Web/API/Clients
async function sendMessage(event, content) {
  // If we didn't find an existing chat window,
  // open a new one:
  // https://stackoverflow.com/questions/61862872/how-to-copy-web-notification-content-to-clipboard
  // https://stackoverflow.com/a/34250261/1872200
  //var client = await clients.openWindow('/');
  //client.focus();

  // // Exit early if we don't have access to the client.
  // // Eg, if it's cross-origin.
  // if (!event.clientId) return;

  // // Get the client.
  // const client = await clients.get(event.clientId);
  // // Exit early if we don't get the client.
  // // Eg, if it closed.
  // if (!client) return;


  const allClients = await clients.matchAll({
    includeUncontrolled: true,
    type: 'window',
  });

  let chatClient;

  // Let's see if we already have a chat window open:
  for (const client of allClients) {
    const url = new URL(client.url);

    // https://web-push-book.gauntface.com/common-notification-patterns/
    if (url.pathname === '/') {
      // Excellent, let's use it!
      await client.focus();
      chatClient = client;
      break;
    }
  }

  // If we didn't find an existing chat window,
  // open a new one:
  if (!chatClient) {
    chatClient = await clients.openWindow('/');
    //await chatClient.focus();
  }


  // Send a message to the client.
  chatClient.postMessage({
    type: 'clipboard',
    content: content,
  });

}

async function openLink(data) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow#return_value
  await clients.openWindow(data.url);
}


// https://stackoverflow.com/a/63917373/1872200
// async function is a function that synchronously returns a promise
async function showNotificationAsync(payload, options) {
  await self.registration.showNotification(payload.title, options);
}

