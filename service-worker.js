self.addEventListener('push', () => {
  self.registration.showNotification('Hello world!');
  self.registration.showNotification('Vibration Sample', {
    body: 'Buzz! Buzz!',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: 'vibration-sample'
  });
});