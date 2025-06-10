import React from 'react';

const publicKey = 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s';

// https://pushpad.xyz/blog/the-notification-prompt-can-only-be-triggered-by-a-user-gesture-on-some-browsers
// https://pushpad.xyz/blog/web-push-notifications-without-a-service-worker-in-the-root
export default function PushMessageFromClient() {

  // https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission_static
  const notify = async () => {
    try {
      await requestWebPushPermission();

      // // We do not need service worker for notifation
      // var notification = new Notification('Notification title', {
      //   icon: 'https://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      //   body: "Hey there! You've been notified!",
      // });

      let registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        console.log('found existing registration', registration);
      } else {
        console.log('no registration, register new service worker');
        registration = await navigator.serviceWorker.register('./service-worker.js');
      }

      const serviceWorker = await navigator.serviceWorker.ready;
      let subscription = await serviceWorker.pushManager.getSubscription();
      if (subscription) {
        console.log('found existing subscription', subscription);
      } else {
        console.log('no subscription, subscribe new web push');
        subscription = await serviceWorker.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: publicKey,
        });
      }

      const payload = {
        title: 'Title text',
        body: 'Body message',
        url: 'https://www.codesanook.com'
      };

      const options = {
        body: payload.body,
        vibrate: [300, 100, 400], // Vibrate 300ms, pause 100ms, then vibrate 400ms
        icon: './favicon.ico',
        silent: false,
        // Chrome does not support a sound attribute https://github.com/GoogleChromeLabs/airhorn/issues/18
      };

      await registration.showNotification(payload.title, options);

    } catch (err) {
      console.error(err);
    }
  }

  const requestWebPushPermission = async () => {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support web push notification');
      return Promise.reject();
    }

    if (Notification.permission === 'granted') {
      return Promise.resolve();
    }

    // Check whether notification permissions have already been granted;
    // if so, create a notification
    if (Notification.permission === 'denied') {
      // We need to ask a user to reset permission
      alert('Denied. Please reset permission to send web push notification');
      return Promise.reject();
    }

    // We need to ask the user for permission
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      alert('Granted');
      return Promise.resolve();
    }

    alert('Default to denied. Please reset permission to send web push notification');
    return Promise.reject();
  }

  return (
    <div>
      Push message from client
      <div>
        <button onClick={notify}>
          Send push message from client
        </button>
      </div>
    </div>
  )
}
