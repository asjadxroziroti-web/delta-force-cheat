/** Default Open Graph / Twitter preview (first hero slide). */
export const DEFAULT_OG_GAMEPLAY_IMAGE = '/images/gameplay/delta-force-hero.webp';

export const DEFAULT_OG_GAMEPLAY_ALT =
  'Cinematic Delta Force tactical battlefield with armored vehicles, helicopters, soldiers, mountains, and green atmospheric lighting.';

/** Intrinsic size of master gameplay sources (all three attachments share this resolution). */
export const DEFAULT_OG_GAMEPLAY_WIDTH = 1536;
export const DEFAULT_OG_GAMEPLAY_HEIGHT = 864;

/** Homepage + product gallery use the same three masters, once each per slider. */
export const DELTA_FORCE_SHOWCASE_GALLERY_KEYS = [
  'gpObjective',
  'gpEspCombat',
  'gpUrbanAim',
  'gpLongshot',
  'gpSquadCombat',
  'gpSmokeCombat',
] as const;
