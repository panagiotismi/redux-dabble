/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import Raven from 'raven-js';

const sentryKey = '578810c49f8f4ee296d3c5c8d098fe67';
const sentryApp = '172054';

export const sentryUrl = `https://${sentryKey}@sentry.io/${sentryApp}`;

export const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context,
  });
  /* eslint no-console: 'off' */
  return window && window.console && console.error && console.error(ex);
};
