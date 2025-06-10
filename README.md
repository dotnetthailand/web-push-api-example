# web-push-api-example

## How to run the project locally
- Open a new terminal session.
- CD to the root folder of the project and run `yarn` to install all Node packages.
- Then run `yarn start` to start the project and automatically launch a browser.
- Click `Subscribe Web Push` and copy a subscription JSON object in a text box. 
- Use copied subscription object on a server side to send push notification.
- This project requires Node.js version >= 14.

# How to send a push message from a server
- Set a `pushSubscription` object in `PushMessageFromServer.js`, we can get it after subscribing.
- Then execute the following command:
```sh
$ node PushMessageFromServer.js
```

# Trouble shooting

## Notification does not always show as a banner on Windows.
- Try to turn off focus assist.

## No push notification message at all
- You may need to manually update service worker. Open a Chrome developer tool with `ctrl+shift+i` keys 
  and select an application tab.
- Then click Service Workers node > Skip waiting service worker.

# Key concept
- Generate publish and private key public and private keys with the following code
  ```js
  const vapIdKeys = webPush.generateVAPIDKeys();
  const vapidKeys = webPush.generateVAPIDKeys();
  console.log(vapidKeys);
  ```
- Use a public key in subscription script (PushSubscription.tsx)
- A user subscribes web push with subscription script (PushSubscription.tsx) and bet subscription object.
- Use public, private keys and subscription object on server script (PushMessageFromServer.js) to send push message to a subscribed user.
- Subscription object is what we store in a database. It is an identity of a subscribed user.
- Use a service worker script (service-worker.js) to handle push notification and customize how to show it to a user.
- You can test push with a localhost and do need to deploy to public URL

# Get subscription object on a published website for testing only
- It can be accessed as http://www.dotnetthailand.com/web-push-api-example/.

# For using Web Push in .NET project. Here are some useful articles:
- https://www.pluralsight.com/guides/html5-desktop-notifications-with-react
- https://blog.elmah.io/how-to-send-push-notifications-to-a-browser-in-asp-net-core/
- https://www.bartvanuden.com/2018/01/23/push-notifications-to-your-pwa-with-asp-net-core-2-0-and-aurelia/
- https://www.tpeczek.com/2017/12/push-notifications-and-aspnet-core-part.html
- https://stackoverflow.com/a/47617427/1872200
- https://knowledgebase.webengage.com/docs/web-push-image-text-specifications
- https://web-push-book.gauntface.com/demos/notification-examples/

# Requirements for Web Push on iOS
- iOS 16.4+ (Released March 2023)
- Safari or any iOS browser using WebKit (all iOS browsers use WebKit, including Chrome, Firefox, Edge)
- Your site must be:
  - Served over HTTPS
  - Installed as a PWA (Progressive Web App) via "Add to Home Screen"
  - Must use the standard Push API + Notification API

# How Upgrade React to the major release version
```sh
  yarn upgrade react --latest
  yarn upgrade react-dom --latest
  yarn upgrade react-dom --latest
  yarn upgrade @types/react --latest
  yarn upgrade @types/react-dom --latest
```

