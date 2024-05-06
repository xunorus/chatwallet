self.addEventListener('push', function(event) {
    if (event.data) {
        const options = {
            body: event.data.text(),
            icon: 'icon.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2'
            }
        };
        event.waitUntil(
            self.registration.showNotification('Push Notification', options)
        );
    } else {
        console.log('Push event but no data');
    }
});