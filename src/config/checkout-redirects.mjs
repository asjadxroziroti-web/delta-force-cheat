/**
 * Partner checkout destinations (affiliate / ref links).
 * Visible buy buttons use `/go/…` from `checkout.ts`. These URLs are the 302 targets only.
 */
export const CHECKOUT_URLS = {
  deltaForce: 'https://levocheats.com/go/ASJADD?to=%2Fdelta-force-cheats',
  hwidSpoofer: 'https://levocheats.com/go/ASJADD?to=%2Fhwid-spoofer',
};

const DELTA_FORCE_CHECKOUT = CHECKOUT_URLS.deltaForce;

const PREFIXED_LOCALES = ['es', 'de', 'fr'];

/** Checkout paths → external product URLs (Node serve, Astro middleware, static `_redirects`). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/delta-force', DELTA_FORCE_CHECKOUT],
  ['/go/delta-force/', DELTA_FORCE_CHECKOUT],
  ['/go/dota-2', DELTA_FORCE_CHECKOUT],
  ['/go/dota-2/', DELTA_FORCE_CHECKOUT],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/skin-changer', DELTA_FORCE_CHECKOUT],
  ['/go/skin-changer/', DELTA_FORCE_CHECKOUT],
  ['/go/ugc', DELTA_FORCE_CHECKOUT],
  ['/go/ugc/', DELTA_FORCE_CHECKOUT],
]);

function stripLocaleFromCheckoutPath(pathname) {
  for (const locale of PREFIXED_LOCALES) {
    const prefix = `/${locale}`;
    if (pathname === `${prefix}/go` || pathname.startsWith(`${prefix}/go/`)) {
      return pathname.slice(prefix.length);
    }
  }
  if (pathname.startsWith('/en/go/') || pathname === '/en/go') {
    return pathname.slice('/en'.length);
  }
  return pathname;
}

export function resolveCheckoutPathRedirect(pathname) {
  const path = stripLocaleFromCheckoutPath(pathname);
  const direct = CHECKOUT_PATH_REDIRECTS.get(path);
  if (direct) return direct;

  if (path !== '/' && !path.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${path}/`) ?? null;
  }

  return null;
}
