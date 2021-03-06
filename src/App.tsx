import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [subscription, setSubscription] = useState('');
  useEffect(() => {
    window.addEventListener('load', async () => {
      const sw = await navigator.serviceWorker.register('./service-worker.js');
      console.log('A service worker has been registered.')
      console.log(sw);
    });
  }, []);

  const handleSubscribeWebPush = async () => {
    const sw = await navigator.serviceWorker.ready;
    const publicKey = 'BHG9NdYdfiCIx7xUS8u2CMhtDD-GWHb6QYuSZ908NZYZHhJEjGjcX0yTjHrWx7gDICmCEUORrLmw3uwOGBqzm2s';
    const push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKey,
    });
    console.log(`push subscription :\n\n${JSON.stringify(push, null, 2)}`);
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
        <textarea rows={10} style={style} value={subscription} />
      </div>
    </div>
  );
}

