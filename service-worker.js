self.addEventListener('push', () => {
  self.registration.showNotification('Hello world', {
    body: 'Buzz! Buzz!',
    vibrate: [300, 100, 400], // Vibrate 300ms, pause 100ms, then vibrate 400ms
    icon: './favicon.ico',
    tag: 'vibration-sample'
  });
});