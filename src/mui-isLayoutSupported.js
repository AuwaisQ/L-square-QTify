// This is a local stub used by the Vite resolver via alias.  It
// mirrors the implementation bundled with MUI so that builds can't
// fail if the package on the build machine is missing the file.
//
// See vite.config.js for the alias configuration.

export default function isLayoutSupported() {
  return !(/jsdom|HappyDOM/.test(window.navigator.userAgent) ||
  // TODO(v9): Remove the test environment check
  // eslint-disable-next-line mui/consistent-production-guard
  process.env.NODE_ENV === 'test');
}
