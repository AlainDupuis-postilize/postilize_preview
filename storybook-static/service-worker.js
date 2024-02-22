/* global self */

self.addEventListener('push', function (event) {
  const data = event.data.json()
  const { title } = data.notification
  const options = {
    body: data.notification.body
  }
  event.waitUntil(self.registration.showNotification(title, options))
})
