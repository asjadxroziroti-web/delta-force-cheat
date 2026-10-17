import { CHEAT_PRODUCT_SLUGS, CHEATS_PRIMARY_SLUG, HWID_SPOOFER_SLUG } from '../config/catalog';
import { PRODUCT_BASE } from '../config/site';
import { getTranslations } from '../i18n';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import type { SiteLocale } from '../i18n/locales';
import type { Translations } from '../i18n/types';
import { checkoutForSlug } from '../config/checkout';
import { DELTA_FORCE_SHOWCASE_GALLERY_KEYS } from '../config/gameplayMedia';
import { HWID_GALLERY_KEYS } from '../config/hwidMedia';
import type { IconName } from '../components/icons/types';
import { getProductCopyBundle, registerProductCopyBundle, type ProductCopyBundle } from './products/exportCopy';
import esProductCopy from './products/locales/es.json';
import deProductCopy from './products/locales/de.json';
import frProductCopy from './products/locales/fr.json';

export interface ProductSlide {
  /** Still image, or the poster frame when `videoSrc` is set. */
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  /** `image` unless a clip is attached. */
  kind?: 'image' | 'video';
  /** MP4 or WebM. The slider shows this instead of the still; `src` stays the poster. */
  videoSrc?: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
  relatedForumSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'delta-force-cheat-price-monthly-vs-lifetime',
    'delta-force-cheat-setup-requirements-before-launch',
    'delta-force-aimbot-esp-settings-explained',
    'delta-force-cheat-not-working-after-update',
    'delta-force-operations-loot-guide-filters',
  ],
  'hwid-spoofer': [],
};

/** Community threads paired with each product detail page */
export const productRelatedForumSlugs: Record<string, string[]> = {
  elite: [
    'delta-force-cheat-monthly-or-lifetime',
    'delta-force-cheat-setup-windows-11',
    'delta-force-cheat-not-working-after-patch',
    'delta-force-cheat-product-status-before-buying',
  ],
  'hwid-spoofer': [],
};

const productBase = PRODUCT_BASE;

const hwidAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Confirm spoofer status',
    desc: 'Read the live status on {siteDomain} after game updates before you buy. Compatibility notes live on the status page.',
  },
  {
    num: '02',
    title: 'Select monthly or lifetime',
    desc: 'Monthly and lifetime plans include the same portal tools; pick the duration that matches how long you need hardware recovery access.',
  },
  {
    num: '03',
    title: 'Verify setup with ops',
    desc: 'Open Discord with your order email and Windows version so staff can flag obvious driver or shared-PC conflicts early.',
  },
  {
    num: '04',
    title: 'Run the portal checklist',
    desc: 'Restore point, driver cleanup, spoof pass, cold reboot, and identifier verification should happen before you sign into a fresh game account.',
  },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on {siteDomain} before purchase, especially after a Delta Force update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Delta Force Cheats and review the published feature list before checkout via the configured checkout path.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Windows setup, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test offline, load presets, then run PMC raids when status is online.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Delta Force receives updates that can affect product availability or controls. Confirm the current status on {siteDomain} before you purchase or launch. Cloud DMA is required for full functionality.';

const sharedLimitations =
  'Third-party software in Delta Force can violate the game terms and lead to account action. You use this software at your own risk. Compatibility and availability can change after game or Windows updates without notice.';

const deltaForceSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit (Intel or AMD).' },
  { icon: 'reqWifi', text: 'Stable internet and loader access after purchase.' },
  { icon: 'reqSettings', text: 'HVCI, Core Isolation, TPM, and Secure Boot enabled.' },
  { icon: 'reqShieldGuide', text: 'Cloud DMA required for full functionality.' },
];

const galleryRaw = {
  gpObjective: {
    src: '/images/gameplay/delta-force-objective.webp',
    alt: 'Delta Force urban objective scene with tactical map markers and a circular aim view.',
    caption: 'Objective awareness',
    captionDesc: 'Urban objective gameplay with tactical markers and a focused aim view.',
  },
  gpEspCombat: {
    src: '/images/gameplay/delta-force-esp-combat.webp',
    alt: 'Delta Force combat scene with player outlines, distance markers, and a tactical reticle.',
    caption: 'Player visual overlays',
    captionDesc: 'Combat scene showing player outlines, distance markers, and a configurable reticle.',
  },
  gpUrbanAim: {
    src: '/images/gameplay/delta-force-urban-aim.webp',
    alt: 'Delta Force urban combat scene with tactical markers and a first-person rifle view.',
    caption: 'Urban combat view',
    captionDesc: 'First-person urban combat scene with tactical markers and a configurable aim view.',
  },
  gpLongshot: {
    src: '/images/gameplay/delta-force-longshot.webp',
    alt: 'Delta Force long-range urban combat scene with a centered sight and distant target marker.',
    caption: 'Long-range engagement',
    captionDesc: 'A long-range urban engagement with a centered sight and distant target marker.',
  },
  gpSquadCombat: {
    src: '/images/gameplay/delta-force-squad-combat.webp',
    alt: 'Delta Force squad combat scene in a damaged city with objective markers.',
    caption: 'Squad combat',
    captionDesc: 'Squad combat through a damaged city with objective markers and tactical movement.',
  },
  gpSmokeCombat: {
    src: '/images/gameplay/delta-force-smoke-combat.webp',
    alt: 'Delta Force combat scene through smoke with tactical objective markers.',
    caption: 'Combat through smoke',
    captionDesc: 'A smoke-filled combat scene with objective markers and limited visibility.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; videoSrc?: string }
>;

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item = galleryRaw[key];
    if (!item) throw new Error(`Missing gallery key: ${String(key)}`);
    const { src, alt, caption, captionDesc, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const deltaForceShowcaseSlides = slide(...DELTA_FORCE_SHOWCASE_GALLERY_KEYS);

const hwidGalleryRaw = {
  hwidSerialCheck: {
    src: '/images/hwid-spoofer/hwid-spoofer-device-check.webp',
    alt: 'HWID Spoofer device panel showing hardware identifiers marked changed and a serial verification control.',
    caption: 'Device identifier check',
    captionDesc: 'Review disk, motherboard, display, UUID, GPU, and network identifier changes before rebooting.',
  },
  hwidUefiSpoof: {
    src: '/images/hwid-spoofer/hwid-spoofer-uefi-panel.webp',
    alt: 'HWID Spoofer UEFI panel showing hardware spoof controls and a seed setting.',
    caption: 'UEFI controls',
    captionDesc: 'Review the UEFI panel controls and hardware settings before running the portal checklist.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; videoSrc?: string }
>;

type HwidGalleryKey = keyof typeof hwidGalleryRaw;

function hwidSlide(...keys: HwidGalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item = hwidGalleryRaw[key];
    const { src, alt, caption, captionDesc, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const hwidShowcaseSlides = hwidSlide(...HWID_GALLERY_KEYS);

function slugFromHref(href: string): string {
  const normalized = href.replace(/^\//, '').replace(/\/$/, '');
  if (normalized === HWID_SPOOFER_SLUG || normalized.endsWith(`/${HWID_SPOOFER_SLUG}`)) {
    return HWID_SPOOFER_SLUG;
  }
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  if (!segment || segment === 'dota-2-cheats' || segment === 'cheats') {
    return CHEATS_PRIMARY_SLUG;
  }
  return segment;
}

const tierAbout: Record<string, ProductPage['about']> = {
  elite: [
    {
      type: 'p',
      text: 'This license covers Delta Force with player ESP, loot ESP, aimbot, chams, FOV controls, third-person view, and configurable combat visuals. Cloud DMA is required for full functionality.',
    },
    { type: 'h2', text: 'Tune before you queue' },
    {
      type: 'p',
      text: 'Review the current feature list and setup requirements before launch. Use the published configuration controls to adjust ESP, aim, loot, and visual settings.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  elite: [
    { type: 'h2', text: 'Plans and delivery' },
    {
      type: 'p',
      text: 'Choose monthly ($35) or lifetime ($150) at checkout. Confirm the live product status and current setup requirements before every session.',
    },
    { type: 'h2', text: 'Module layout' },
    {
      type: 'p',
      text: 'The published feature list groups player visuals, aimbot, loot visuals, chams, camera controls, and miscellaneous settings for Delta Force.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'Signals this utility fits' },
    {
      type: 'p',
      text: 'Use it when new game logins fail on one machine but work on another, which can point to hardware enforcement. It is not intended for account-only restrictions. Pair a clean account with conservative presets from [Delta Force Cheats](/product/) once identifiers look fresh. First run the portal compatibility scan, create a Windows restore point, and confirm identifier changes after a cold reboot before opening the game.',
    },
    { type: 'h2', text: 'Checklist order' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof pass, cold reboot, identifier verification, then a low-profile cheat profile before raiding. The portal and HWID blog guide mirror the same step order. Do not stack two spoof tools; shared or work PCs may be poor fits; driver-level edits stay your risk. Read the status page on {siteDomain} before checkout and again before launch.',
    },
    { type: 'h2', text: 'System requirements' },
    {
      type: 'p',
      text: 'Run it on 64-bit Windows 10 or 11 from an administrator account. Create a Windows restore point first, keep a steady connection during portal verification, and finish every guide step before reopening the game.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: deltaForceShowcaseSlides,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: deltaForceSystemRequirements,
    fullFeatures: [
      'Player ESP with skeleton, box, distance, name, team, weapon, and health options',
      'Aimbot with FOV, smoothing, speed, stickiness, filters, and bone selection',
      'Two aimbot keybinds with visible checks and target controls',
      'Loot ESP with item name, rarity, price, and minimum price filter',
      'Player and AI corpse plus computer visual options',
      'Chams for player, AI, weapon, hands, and self',
      'Camera FOV changer and third-person view hotkey',
      'Arms and weapon scale offsets',
      'Config system and customizable combat-mode entity hiding',
      'Windows 10/11; Intel/AMD',
      'HVCI, Core Isolation, TPM, and Secure Boot requirements',
      'Cloud DMA required for full functionality',
    ],
    overview: {
      title: 'One license for Delta Force on Windows',
      paragraphs: [
        'Delta Force Cheats combines player and loot ESP, configurable aimbot controls, chams, radar, FOV controls, third-person view, and a config system for Operations and large-scale Warfare matches. The product page lists the current visual, aim, loot, and miscellaneous options.',
        'The published setup requires Windows 10 or 11 on Intel or AMD with HVCI, Core Isolation, TPM, and Secure Boot enabled. Cloud DMA is required for full functionality. Confirm current availability before purchase or launch.',
      ],
    },
  },
  'hwid-spoofer': {
    images: hwidShowcaseSlides,
    goodToKnow:
      'Run the portal compatibility scan before any spoof pass. Create a Windows restore point first. After a cold reboot, confirm identifier changes before you launch the game.',
    limitations:
      'Designed for hardware-level flags, not account-only restrictions. Never run two spoof tools together. Shared or work PCs may be unsuitable. Driver-level edits remain your risk; read the status page on {siteDomain} before checkout.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Admin rights on 64-bit Windows 10 or 11 for the portal steps.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a Windows restore point before the first spoof pass.' },
      { icon: 'reqShieldGuide', text: 'Finish the full portal guide before you reopen the game after a spoof.' },
      { icon: 'reqWifi', text: 'Stable internet for portal verification and identifier diff tools.' },
    ],
    fullFeatures: [
      'Disk serial profiling kit',
      'MAC rotation controls',
      'Restore-point walkthrough',
      'Pre-flight compatibility scan',
      'Driver overlap detection',
      'Post-spoof validation steps',
      'Identifier change report',
      'Cold-reboot instructions',
      'Portal milestone checklist',
      'Discord hardware recovery desk',
    ],
    overview: {
      title: 'Hardware-first recovery for flagged rigs',
      paragraphs: [
        'A game account can remain usable while a PC fingerprint causes problems on one machine. This utility bundles disk, MAC, and GPU ID tooling with a restore-point checklist, portal compatibility scan, and post-reboot verification prompts designed to confirm changes before you play again.',
        'Pick it when brand-new accounts collapse on one rig but work elsewhere, not when the penalty is account-only. After spoofing, load conservative presets from {siteDomain} and confirm the live status banner before your first PMC session.',
      ],
    },
  },
};

function buildTierPages(t: Translations): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = 'Delta Force Cheats';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.heroDesc ?? cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(t: Translations): ProductPage[] {
  const slug = HWID_SPOOFER_SLUG;
  const product = t.products.items.find((item) => slugFromHref(item.href) === slug);
  const content = productContent[slug];
  if (!product || !content) return [];

  return [
    {
      slug,
      kind: 'utility',
      badge: product.badge,
      category: product.category,
      name: product.title,
      title: product.title,
      subtitle: product.subtitle,
      desc: product.desc,
      features: product.features,
      more: product.more,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: {
        title: acquisitionFor(product.title).title,
        steps: hwidAcquisitionSteps,
      },
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      body: utilityBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    },
  ];
}

export function getProductPages(locale: SiteLocale): ProductPage[] {
  const t = getTranslations(locale);
  return [...buildTierPages(t), ...buildUtilityPages(t)].map((page) =>
    deepApplySiteTokens(applyProductCopy(page, locale)),
  );
}

export function getCheatPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'tier');
}

export function getProductPage(slug: string, locale: SiteLocale) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

/** Tier slugs for sitemap extras, store lives at `PRODUCT_BASE` only. */
export function getAllProductSlugs(): string[] {
  const slugs = getAllCheatSlugs();
  const catalog = new Set<string>(CHEAT_PRODUCT_SLUGS);
  for (const slug of slugs) {
    if (!catalog.has(slug as (typeof CHEAT_PRODUCT_SLUGS)[number])) {
      throw new Error(`Cheat slug "${slug}" missing from CHEAT_PRODUCT_SLUGS in src/config/catalog.ts`);
    }
  }
  return [];
}

export function getHwidSpooferPage(locale: SiteLocale) {
  return getProductPage(HWID_SPOOFER_SLUG, locale);
}

export function getAllCheatSlugs() {
  return getCheatPages('en').map((p) => p.slug);
}

export function getHeroSlides(_locale: SiteLocale): ProductSlide[] {
  return deltaForceShowcaseSlides;
}

const productCopyByLocale: Record<Exclude<SiteLocale, 'en'>, ProductCopyBundle> = {
  es: esProductCopy as ProductCopyBundle,
  de: deProductCopy as ProductCopyBundle,
  fr: frProductCopy as ProductCopyBundle,
};

function acquisitionTitleFor(productName: string) {
  return `How to get ${productName}`;
}

function buildEnglishProductCopyBundle(): ProductCopyBundle {
  const tierSlugs = ['elite'] as const;
  const utilitySlugs = ['hwid-spoofer'] as const;

  const tiers = Object.fromEntries(
    tierSlugs.map((slug) => {
      const content = productContent[slug];
      const displayName = 'Delta Force Cheats';
      return [
        slug,
        {
          about: tierAbout[slug],
          body: tierBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: acquisitionTitleFor(displayName),
        },
      ];
    }),
  ) as ProductCopyBundle['tiers'];

  const utilities = Object.fromEntries(
    utilitySlugs.map((slug) => {
      const content = productContent[slug];
      const title = 'HWID Spoofer';
      return [
        slug,
        {
          body: utilityBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: acquisitionTitleFor(title),
        },
      ];
    }),
  ) as ProductCopyBundle['utilities'];

  return {
    sharedGoodToKnow,
    sharedLimitations,
    acquisitionSteps: defaultAcquisitionSteps.map(({ num, title, desc }) => ({ num, title, desc })),
    systemRequirements: deltaForceSystemRequirements.map((r) => r.text),
    gallery: Object.values(galleryRaw).map(({ alt, caption, captionDesc }) => ({
      alt,
      caption,
      captionDesc,
    })),
    tiers,
    utilities,
  };
}

registerProductCopyBundle(buildEnglishProductCopyBundle());

export const heroSlides = getHeroSlides('en');

function productCopyFor(locale: SiteLocale): ProductCopyBundle {
  if (locale === 'en') return getProductCopyBundle();
  return productCopyByLocale[locale];
}

function applyProductCopy(page: ProductPage, locale: SiteLocale): ProductPage {
  if (locale === 'en') return page;
  const copy = productCopyFor(locale);
  const bucket = page.kind === 'tier' ? copy.tiers[page.slug] : copy.utilities[page.slug];
  if (!bucket) return page;

  const steps = copy.acquisitionSteps.map((step) => ({ ...step }));
  const acquisition: ProductAcquisition = {
    title: bucket.acquisitionTitle,
    steps,
  };

  const images =
    page.kind === 'tier'
      ? page.images.map((slide, index) => {
          const g = copy.gallery[index];
          if (!g) return slide;
          return { ...slide, alt: g.alt, caption: g.caption, captionDesc: g.captionDesc };
        })
      : page.images;

  const systemRequirements = page.systemRequirements.map((req, index) => ({
    ...req,
    text: copy.systemRequirements[index] ?? req.text,
  }));

  return {
    ...page,
    overview: bucket.overview,
    body: bucket.body,
    about: 'about' in bucket ? bucket.about : page.about,
    goodToKnow: bucket.goodToKnow,
    limitations: bucket.limitations,
    acquisition,
    images,
    systemRequirements,
  };
}
