# web-push-api-example

## How to run the project locally
- Open a new terminal session.
- CD to the root folder of the project and run `yarn` to install all Node packages.
- Then run `yarn start` to start the project and automatically launch a browser.
- Click `Subscribe Web Push` and copy a subscription JSON object in a text box. 
- Use subscription object on a server side to send push notification.
- This project requires Node.js version >= 14.


# Send push notification from a server
- Set a push subscription object that we get after a user's subscribed web push in `pushSubscription.json`
- Then execute the following command:
  ```sh
  $ node PushMessageFromServer.js
  ```

# Trouble shooting
## Notification does not always show as banner on Windows.
- Try to turn off focus assist.
## No push notification message at all
- You may need to manually update service worker. Open Chrome developer tool with ctrl+shift+i keys and then go to application tab.
  Then click Service Workers node > Skip waiting service worker.

# Key concept
- Generate publish and private key public and private keys with the following code
  ```js
  const vapIdKeys = webPush.generateVAPIDKeys();
  const vapidKeys = webPush.generateVAPIDKeys();
  console.log(vapidKeys);
  ```
- Use a public key in subscription script (App.tsx)
- User subscribes web push with subscription script.
- Use both public, private keys and subscription object on server script (PushMessageFromServer.js) to send push to a user.
- Subscription object is what we store in a database. It is an identity of a subscribed user.
- Use service worker script (service-worker.js) to handle push notification and customize how to show it to a user
- You can test push with a localhost and do need to deploy to public URL

# Get subscription object on a published website
- For the main project in .NET Thailand repository, it can be accessed as http://www.dotnetthailand.com/web-push-api-example/.

# Useful articles for .NET Web Push
- https://www.pluralsight.com/guides/html5-desktop-notifications-with-react
- https://blog.elmah.io/how-to-send-push-notifications-to-a-browser-in-asp-net-core/
- https://www.bartvanuden.com/2018/01/23/push-notifications-to-your-pwa-with-asp-net-core-2-0-and-aurelia/
- https://www.tpeczek.com/2017/12/push-notifications-and-aspnet-core-part.html
- https://stackoverflow.com/a/47617427/1872200

# Upgrade React to major release version
  ```sh
  yarn upgrade react --latest
  yarn upgrade react-dom --latest
  yarn upgrade react-dom --latest
  yarn upgrade @types/react --latest
  yarn upgrade @types/react-dom --latest
  ```