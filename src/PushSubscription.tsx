import { useEffect, useState } from 'react';

const publicKey = 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s';

export default function PushSubscription() {
  const [subscription, setSubscription] = useState('');

  useEffect(() => {
    window.addEventListener('load', async () => {
      const serviceWorker = await navigator.serviceWorker.register('./service-worker.js');
      console.log('A service worker has been registered.')
      console.log(serviceWorker);
    });
  }, []);

  const handleSubscribeWebPush = async () => {

    // Make sure the service worker is ready, before subscribing a web push.
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

    setSubscription(JSON.stringify(subscription, null, 2));
  }

  const style = {
    width: '100%'
  };

  return (
    <div>
      <button onClick={handleSubscribeWebPush}>
        Subscribe Web Push
      </button>
      <div>
        <textarea rows={10} style={style} value={subscription} readOnly={true} />
      </div>
    </div>
  );
}

