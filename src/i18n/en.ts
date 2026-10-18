import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, SITE_DOMAIN, SITE_NAME } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: 'Delta Force Cheat | ESP, Aimbot & Loot ESP',
    description:
      'Delta Force cheat for Windows with player and loot ESP, configurable aimbot controls, chams, radar, FOV options, and third-person view for Operations and large-scale Warfare matches. Compare current plans at {siteDomain}.',
  },
  nav: [
    { id: 'products', href: `${productBase}`, label: 'Product', shortLabel: 'Product' },
    { id: 'hwidSpoofer', href: '/hwid-spoofer/', label: 'HWID Spoofer', shortLabel: 'HWID' },
    { id: 'blog', href: '/blog/', label: 'Blog' },
    { id: 'forum', href: '/forum/', label: 'Forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ' },
    { id: 'support', href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Delta Force, current build status',
    eyebrow: 'DELTA FORCE CHEAT',
    titleLine1: 'Delta Force',
    titleLine2: 'Cheat for PC',
    subtitle:
      'Use player and loot ESP, configurable aim, chams, radar, FOV controls, and third-person view across Delta Force Operations and large-scale Warfare matches on a supported Windows setup.',
    ctaPrimary: 'View products',
    metrics: [
      { label: 'Stream-proof', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
    statusPills: [
      'ESP Active',
      'Radar Online',
      'Season Build',
      'Aimbot Ready',
      'Soft Aim Ready',
      'No Recoil',
      'Stream Proof',
      'Loot ESP',
      'Skeleton ESP',
      'UAV Radar',
      'Extract ESP',
      '24/7 Support',
      'Instant Delivery',
      'Raid Ready',
      'Trigger Bot',
      'Bone Select',
      'Live Status',
      'Auto Updates',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Player ESP, loot ESP, aimbot, chams, FOV controls, and configuration tools for Delta Force.',
    items: [
      {
        title: 'Player ESP',
        subtitle: 'Track PMCs and Scavs.',
        desc: 'Player boxes, skeletons, names and distance readouts stay readable in dense raids.',
        bullets: [
          'PMC, Scav and boss filters',
          'Skeleton and bone markers',
          'Name tags and distance readouts',
          'Health and gear hints where enabled',
          'Color rules per faction',
        ],
        tags: ['delta force esp', 'player esp', 'skeleton esp'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Loot ESP',
        subtitle: 'Find value fast.',
        desc: 'Highlight containers, keys, meds and high-tier loot without tabbing through every drawer.',
        bullets: [
          'Item category filters and price tiers',
          'Container and corpse loot highlights',
          'Quest and key item markers',
          'Distance and name labels',
        ],
        tags: ['loot esp', 'container esp', 'delta force loot'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Aimbot',
        subtitle: 'Controlled aim assist.',
        desc: 'Soft aim and bone selection with FOV and smoothing sliders tuned for raids, not rage defaults.',
        bullets: ['FOV and smoothing controls', 'Bone select and target priority', 'Visibility checks', 'Hotkey toggle per weapon class'],
        tags: ['aimbot', 'soft aim', 'bone select'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'No Recoil',
        subtitle: 'Steadier full-auto.',
        desc: 'Recoil compensation profiles per weapon family with portal presets for common builds.',
        bullets: ['Per-weapon recoil profiles', 'Strength sliders with caps', 'Pairs with aimbot FOV limits', 'Save profiles to cloud'],
        tags: ['no recoil', 'recoil control', 'weapon profiles'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Radar & Extracts',
        subtitle: 'Map awareness in raid.',
        desc: '2D radar, extract markers and optional UAV-style hints for orientation between fights.',
        bullets: [
          'Extract and transition markers',
          '2D radar with player blips',
          'Optional UAV-style overview',
          'Custom zoom and opacity',
        ],
        tags: ['radar hack', 'extract esp', 'map awareness'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Trigger Bot',
        subtitle: 'Fire when aligned.',
        desc: 'Optional trigger assist when crosshair meets valid targets, with delay and key gates.',
        bullets: [
          'Delay and hold-time tuning',
          'Team and bot ignore rules',
          'Toggle separate from aimbot',
          'Conservative defaults in portal',
        ],
        tags: ['trigger bot', 'fire assist', 'delta force cheats'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Built for creators.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar capture modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs capture', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Misc utilities',
        subtitle: 'Raid QoL tools.',
        desc: 'Night vision, thermal-style highlights, no sway and other toggles grouped in one utilities tab.',
        bullets: ['No sway and stamina helpers where enabled', 'Night vision and thermal-style modes', 'Crosshair and FOV helpers', 'Hotkey manager'],
        tags: ['no sway', 'night vision', 'delta force utilities'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch day ready.',
        desc: 'Published setup guidance and status notes help you review Delta Force changes before launch.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Raid tooling backed by patches, not promises',
    subtitle:
      'Many cheat shops ship stale loaders, obvious rage presets, and ticket bots. {siteDomain} focuses on patch-day loader builds, conservative ESP and aim defaults, and live Discord operators.',
    usLabel: 'DELTA FORCE CHEAT',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Review current product status after Delta Force updates before you launch.',
      },
      {
        title: 'Humanized aim & ESP defaults',
        desc: 'FOV caps, smoothing and distance filters ship conservative in the portal so overlays stay readable, not wall-of-box rage modes.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, raid configs and HWID resets: 24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'A configurable overlay suite with player, loot, aim, chams, and camera controls listed on the product page.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'PMC, Scav and per-map profiles backup to the portal, same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops, most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Status and update notes for the current Delta Force product build.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Windows players running ESP, aimbot and utilities on {siteDomain}.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first raid in just',
    titleHighlight: 'three simple steps',
    intro:
      'Start by checking the published requirements, read the current setup guidance, and review status before launching Delta Force on Windows.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Open portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import raid presets, and tune ESP, aimbot and no recoil sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & launch Delta Force',
        desc: 'Check the live status banner, launch the game client, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the current product status before launching Delta Force after updates.',
    items: ['Windows 10 & 11', 'Intel / AMD', 'HVCI', 'Core Isolation', 'TPM', 'Secure Boot', 'Cloud DMA', 'Config system'],
  },
  cheats: {
    eyebrow: 'Main product',
        title: 'Delta Force Cheats',
    subtitle: 'Compare current cheat plans, feature coverage, and checkout options for Delta Force.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Delta Force Cheats with ESP, Aimbot & Loot ESP',
        desc: 'Player ESP, loot ESP, aimbot, chams and configurable controls for Delta Force. Check current availability before purchase.',
        heroDesc:
          'Delta Force access with configurable ESP, aim, loot, chams and FOV controls. Review the current feature list and setup requirements before checkout.',
        features: ['Player ESP', 'Loot ESP', 'Aimbot', 'No recoil', 'Extract markers', 'Stream-proof'],
        more: 9,
        href: productBase,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle: 'Raid cheats plus a hardware utility: two checkout paths for PMC play and machine recovery.',
    viewAll: 'View all cheats',
    backToCheats: 'Back to product',
    showcaseHeading: 'Product Overview',
    experience: {
      eyebrow: 'Experience',
      title: 'Loader layers · After checkout',
      subtitle:
        'Use the screenshots above for module layout; below is what each layer does and how portal access works after purchase.',
      previewLabel: 'In-game layers',
      accessDividerTop: 'Preview',
      accessDividerBottom: 'Access',
    },
    hwidPage: {
      showcaseHeading: 'Spoofer dashboard shots',
      overviewSubtitle:
        'How disk, MAC, and GPU ID tooling fits portal prep, verification, and post-spoof launches. Confirm status on {siteDomain} first.',
      highlights: {
        eyebrow: 'Quick read',
        title: 'What the utility targets',
        desc: 'Hardware fingerprint recovery before you attach a fresh game account. See the full tool list below.',
      },
      featuresSection: {
        eyebrow: 'Tooling',
        title: 'Portal modules included',
        desc: 'Ten recovery utilities you enable and tune from the operator portal after checkout.',
      },
      experience: {
        eyebrow: 'Post-purchase',
        title: 'Dashboard views · Access steps',
        subtitle:
          'Left column explains each screenshot; right column lists how portal access and spoof milestones work after payment.',
        previewLabel: 'Panel views',
        accessDividerTop: 'UI',
        accessDividerBottom: 'Steps',
      },
      highlightsMore: 'Plus {count} more recovery tools in the portal. Scroll to the full module grid.',
    },
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: 'USD / month',
    planOneTimeNote: 'USD, one time',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer for Windows',
        subtitle:
          'Review serial checks, UEFI spoof toggles, and the verification checklist before a cold reboot.',
        desc: 'Work through disk, MAC, and GPU identifier tooling on a supported Windows setup, then follow the verification steps.',
        features: ['Drive cleanup & spoof kit', 'Rotating serial profiles', 'Pre-spoof compatibility scan', 'Reboot verification prompts'],
        more: 9,
        href: '/hwid-spoofer/',
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Delta Force setup, aimbot, ESP, loot filters, and update guidance.',
    latestTitle: 'Delta Force Cheat Guides & Updates',
    latestSubtitle: 'Filter by topic to find setup guides, feature explainers, and update notes.',
    filterAll: 'All articles',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New guides will show up here.',
    viewAll: 'View all articles',
    read: 'Read',
    articleActionsAria: 'Continue reading',
    buyCta: 'Buy Delta Force Cheats',
    buyHwidCta: 'Buy HWID Spoofer',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from status check to a raid profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Read the live banner on {siteDomain} before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: 'Pick raid cheats or the hardware utility, whichever matches bans, rigs, or account resets you face.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune ESP and aim sliders offline first.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save PMC and map presets to the cloud.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Delta Force Cheat Support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: '{supportEmail}',
        href: 'mailto:{supportEmail}',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup, before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on {siteDomain} or via our partner checkout.' },
      { title: 'Platform', desc: 'Windows 10 or 11, Intel or AMD, and the current Delta Force build.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access, no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check Delta Force cheat status?',
        a: 'Check the current product status before purchase or launch, especially after a Delta Force update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your order flow provides access instructions and current setup guidance. Review the product requirements before launch.',
      },
      {
        num: '03',
        q: 'Can third-party software lead to account action?',
        a: 'Yes. Third-party software can conflict with game rules or updates. Review the current status and use the product at your own risk.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'The published requirements list Windows 10 or 11 on Intel or AMD, with HVCI, Core Isolation, TPM, and Secure Boot enabled.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes, use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Delta Force Cheats and HWID Spoofer live at {siteDomain}/product/ and {siteDomain}/hwid-spoofer/ with separate feature lists.',
      },
    ],
  },
  footer: {
    tagline: 'Delta Force cheat with ESP, aimbot, loot controls, and Windows setup guidance. {siteDomain}',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: productBase, label: 'Compare products', ariaLabel: 'Product comparison' },
      { id: 'hwidSpoofer', href: '/hwid-spoofer/', label: 'HWID protection', ariaLabel: 'HWID protection' },
      { id: 'blog', href: '/blog/', label: 'Read the guides', ariaLabel: 'Guides and updates' },
      { id: 'forum', href: '/forum/', label: 'Open the forum', ariaLabel: 'Community forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Delta Force Cheat',
      description:
        'Delta Force Cheat provides product information, setup guides, status notes, and support resources at {siteDomain}.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'This site is a PC-focused resource for Delta Force players reviewing player ESP, loot ESP, aimbot, chams, and configuration workflows. We publish setup guides and status notes before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Delta Force Cheats and HWID Spoofer. Blog articles explain setup, configuration, feature groups, and update checks.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, game account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Delta Force Cheat handles analytics, cookies, and contact data when you use {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages, we do not store payment card data on {siteDomain}.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Delta Force Cheat products and {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using {siteDomain} or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We list Delta Force Cheats and HWID Spoofer with product information and setup guidance for Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Controls can change when Delta Force or Windows updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'After purchase, follow the order flow and current setup guide before launching Delta Force.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account actions, or issues caused by ignoring setup guidance or launching while the status banner shows offline.',
            'If the product does not work as described on a supported setup, contact Support with your order email, Windows version, Delta Force build, and screenshots or exact error text.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Delta Force can conflict with game updates. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every raid. Do not load in while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Delta Force Cheat Support',
      description:
        'Get support for loader, HWID, and checkout questions at {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Product',
    breadcrumbBlog: 'Blog',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
  },
  notFound: {
    metaDescription: 'The page you requested could not be found on {siteDomain}.',
    title: 'Page not found',
    body: 'That URL does not exist or may have moved. Head back to the homepage or open the product and HWID pages.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View product page',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: 'Delta Force Cheat FAQ: Setup, Plans & Support',
      description:
        'Answers on Delta Force cheats: setup steps, monthly and lifetime plans, ESP and aim modules, current status, and checkout help at {siteDomain}.',
      schemaName: 'Delta Force Cheat FAQ',
      schemaDescription:
        'Answers on raid cheats, ESP, aimbot, loot filters, loader setup, pricing, and checkout at {siteDomain}.',
    },
    forum: {
      eyebrow: 'Delta Force community forum',
      title: 'Delta Force Community Forum',
      description:
        'Archived, read-only threads on loader setup, loot ESP, patch status, and HWID bans. Replies are closed.',
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Popular',
      sortLatest: 'Latest',
      sortTop: 'Most discussed',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: 'Delta Force guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: 'Delta Force Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Machine recovery when new accounts work elsewhere but fail instantly on this PC.',
      viewDetails: 'View',
      includes: 'Includes:',
      schemaName: 'HWID Spoofer',
    },
  },
  pageSeo: {
    '/': {
      title: 'Delta Force Cheat | ESP, Aimbot & Loot ESP',
      description:
        'Delta Force cheat with player ESP, loot ESP, aimbot and configurable gameplay tools for Windows. Compare current plans at {siteDomain}.',
    },
    '/product/': {
      title: 'Delta Force Cheats | ESP, Aimbot & Loot ESP',
      description:
        'Delta Force cheats with player ESP, loot filters, aimbot, chams and configurable controls. Monthly and lifetime plans on {siteDomain}.',
    },
    '/hwid-spoofer/': {
      title: 'HWID Spoofer | Windows Hardware Reset Utility',
      description:
        'Review disk, MAC, and GPU identifier tools, restore-point steps, and post-reboot verification for a supported Windows setup on {siteDomain}.',
    },
    '/blog/': {
      title: 'Delta Force Guides | ESP Setup, Aimbot & Updates',
      description:
        'Delta Force setup guides, ESP and aim tuning, loot filters, and update notes published on {siteDomain}.',
    },
    '/forum/': {
      title: 'Delta Force Cheat Forum | Setup, Status & Help',
      description:
        'Read-only Delta Force discussions on setup, patches, and guides. New threads and replies are closed.',
    },
    '/faq/': {
      title: 'Delta Force Cheat FAQ | Setup, Plans & Support',
      description:
        'Answers on Delta Force cheats: setup steps, monthly and lifetime plans, ESP and aim modules, current status, and checkout help at {siteDomain}.',
    },
    '/terms/': {
      title: 'Terms of Sale & License Use',
      description:
        'Refund rules, license limits, checkout delivery, and risk disclosure for products sold via {siteDomain}.',
    },
    '/privacy/': {
      title: 'Privacy Policy | Analytics & Support Data',
      description:
        'How {siteDomain} uses cookies, analytics, and the information you send when opening a support ticket.',
    },
    '/about/': {
      title: 'About Delta Force Cheat',
      description:
        'Information about the Delta Force cheat site, product resources, status notes, and support channels on {siteDomain}.',
    },
    '/support/': {
      title: 'Delta Force Cheat Support | Setup & Checkout Help',
      description:
        'Contact support for portal access, module errors, and billing questions before or after checkout on {siteDomain}.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheatsNav: 'Try Now',
    homeAria: 'Delta Force Cheat home',
    menuOpen: 'Open menu',
    themeLight: 'Switch to light mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
