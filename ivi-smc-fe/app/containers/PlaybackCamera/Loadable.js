/**
 * Asynchronously loads the component for NotFoundPage
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./screen/ViewPlaybackCamera'), {
  // fallback: <LoadingIndicator />,
});