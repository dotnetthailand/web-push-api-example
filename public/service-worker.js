self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: 'Buzz! Buzz!',
      vibrate: [300, 100, 400], // Vibrate 300ms, pause 100ms, then vibrate 400ms
      icon: './favicon.ico',
      tag: 'vibration-sample'
    })
  );
});