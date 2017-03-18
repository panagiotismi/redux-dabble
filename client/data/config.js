/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import Raven from 'raven-js';

const sentryKey = 'cb55d4f05cd443ce82303222f77ef5e0';
const sentryApp = '61499';

export const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

export const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context
  });
  /* eslint no-console: 'off' */
  return window && window.console && console.error && console.error(ex);
};
