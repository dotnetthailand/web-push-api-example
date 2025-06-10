import { createRoot } from 'react-dom/client';

import PushSubscription from './PushSubscription';
import PushMessageFromClient from './PushMessageFromClient';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);

root.render(
  <div>
    <PushSubscription />
    <PushMessageFromClient />
  </div>
);
