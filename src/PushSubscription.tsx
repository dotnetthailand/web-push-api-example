import { useEffect, useState } from 'react';

export default function PushSubscription() {
  const [subscription, setSubscription] = useState('');
  useEffect(() => {
    window.addEventListener('load', async () => {
      const sw = await navigator.serviceWorker.register('./service-worker.js');
      console.log('A service worker has been registered.')
      console.log(sw);
    });
  }, []);

  const handleSubscribeWebPush = async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const publicKey = 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s';
    const push = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKey,
    });
    setSubscription(JSON.stringify(push, null, 2));
  }

  const style = {
    width: '100%'
  };

  return (
    <div>
      <button onClick={handleSubscribeWebPush}>
        Subscript Web Push
      </button>
      <div>
        <textarea rows={10} style={style} value={subscription} readOnly={true} />
      </div>
    </div>
  );
}

