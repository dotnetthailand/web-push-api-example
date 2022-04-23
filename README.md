# web-push-api-example

## How to run the project locally
- Open a new terminal session.
- CD to the root folder of the project and run `yarn` to install all Node packages.
- Then run `yarn start` to start a project and automatically launch a browser.
- Click `Subscribe Web Push` and copy a subscription object in text box. 
- Use subscription object in a server side to send push notification.

```sh
  yarn create react-app web-push-api-example --template typescript
```

- Required Node.js version >= 14

# Get subscription object
- For the main project in .NET Thailand repository, it can be accessed as http://www.dotnetthailand.com/web-push-api-example/.


# Send push notification from a server
- Set a push subscrition object in `PushMessageFromServer` that we get after a user's subscribed web push.
- Execute the following command:
  ```sh
    node PushMessageFromServer.js
  ```

## Notification does not always show as banner.
Turn of focus assist

server
private/public key

client
public key

load register service background

subscribe to server with public key
send subscription object to store on server as identity

import web-push

const vapIdKey = push.generateVAPIDKeys(); to get public and private keys
setVapidDetails()
sendNotification

serviceWorker to handle receive notification

skip waiting in application tab

Useful articles for .NET Web Push
- https://www.pluralsight.com/guides/html5-desktop-notifications-with-react?fbclid=IwAR1NzrQNDYSZJxKLMxWVVWes_eulWauBqa63F6Z47dDznNBL9ARiCQ26wOs
- https://blog.elmah.io/how-to-send-push-notifications-to-a-browser-in-asp-net-core/
- https://www.bartvanuden.com/2018/01/23/push-notifications-to-your-pwa-with-asp-net-core-2-0-and-aurelia/
- https://www.tpeczek.com/2017/12/push-notifications-and-aspnet-core-part.html
- https://stackoverflow.com/a/47617427/1872200
- 