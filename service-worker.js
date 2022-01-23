self.addEventListener('push', () => {
  self.registration.showNotification('Hello world', {
    body: 'Buzz! Buzz!',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    icon: './favicon.ico',
    tag: 'vibration-sample'
  });
});