import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';
import { getSiteFaqs as getSiteFaqsForLocale } from './faq/locale';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'aim' | 'safety' | 'products' | 'blog' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Delta Force Cheats', ROUTES.cheats);
const hwid = link('HWID Spoofer', ROUTES.hwidSpoofer);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  { id: 'status', topic: 'setup', icon: 'faqStatus', q: 'Where do I check Delta Force cheat status?', a: 'Check the current product status before purchase or launch, especially after a Delta Force update.' },
  { id: 'after-buy', topic: 'setup', icon: 'faqAfterBuy', q: 'What happens after I buy?', a: 'Your order flow provides access instructions and the current setup guidance. Read the product requirements before launch.' },
  { id: 'risk', topic: 'safety', icon: 'faqBanRisk', q: 'Can third-party software lead to account action?', a: 'Yes. Third-party software can conflict with game rules or updates. Review the current status and use the product at your own risk.' },
  { id: 'platforms', topic: 'setup', icon: 'faqPlatforms', q: 'Which systems are listed as supported?', a: 'The published requirements list Windows 10 or 11 on Intel or AMD, with HVCI, Core Isolation, TPM, and Secure Boot enabled.' },
  { id: 'products-page', topic: 'products', icon: 'faqProductsPage', q: 'Where are the products listed?', a: `${cheats} and ${hwid} are the two product pages, with their own feature lists and checkout paths.` },
  { id: 'what-is-esp', topic: 'esp', icon: 'faqWhatIsEsp', q: 'What does Delta Force ESP include?', a: `${cheats} lists player names, health, weapons, skeletons, boxes, distance, team information, loot, rarity, price, corpses, and computer visual options.`, scopes: ['elite'] },
  { id: 'esp-vs-aim', topic: 'aim', icon: 'faqEspVsScripts', q: 'What is the difference between ESP and aimbot?', a: 'ESP displays player or item information. Aimbot controls are listed separately with FOV, smoothing, speed, stickiness, filters, keybinds, and bone selection.' },
  { id: 'plans', topic: 'plans', icon: 'faqEliteSlots', q: 'What are the published Delta Force cheat plans?', a: 'The published options are monthly access at $35 and lifetime access at $150. Review the current product page before checkout.', scopes: ['elite'] },
  { id: 'chams-fov', topic: 'esp', icon: 'faqStreamProof', q: 'Does the product list chams and FOV controls?', a: `${cheats} lists chams for player, AI, weapon, hands, and self, plus a camera FOV changer and third-person view.` },
  { id: 'cloud-dma', topic: 'setup', icon: 'faqExternalLoader', q: 'Is Cloud DMA required?', a: 'Cloud DMA is listed as required for full functionality on the supplied product page.' },
  { id: 'hwid-when', topic: 'products', icon: 'faqHwidWhen', q: 'What is the HWID Spoofer page for?', a: `${hwid} covers disk, MAC, and GPU identifier tools, restore-point steps, compatibility checks, and post-reboot verification.` },
  { id: 'support', topic: 'setup', icon: 'faqDiscordHelp', q: 'What should I send to support?', a: 'Include your order email, Windows version, Delta Force build, current status, exact error text, and the affected feature group.' },
  { id: 'guides', topic: 'blog', icon: 'faqBlogVsCheats', q: 'Where are the setup and feature guides?', a: `Use the ${blog} for Delta Force setup, feature, pricing, troubleshooting, and Operations loot topics.` },
  { id: 'faq-more', topic: 'all', icon: 'faqMore', q: 'Where is the full FAQ?', a: `See the ${faqPage} for product, setup, pricing, and support answers.` },
];

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter plans, ESP, aim, products, setup, and guide answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'aim', 'safety', 'products', 'blog', 'setup'];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading. Visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  return ['all', ...SITE_FAQ_FILTER_TOPICS.filter((topic) => topic !== 'all' && present.has(topic))];
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

export function getBlogFaqs(_tag: string, _slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  if (locale !== 'en') return getSiteFaqsForLocale(locale).filter((item) => item.topic === 'blog').slice(0, 8);
  return siteFaqs.filter((item) => ['blog', 'setup', 'products'].includes(item.topic)).slice(0, 8);
}
