import type { SiteLocale } from '../../i18n/locales';
import type { BlogPostFull } from './types';
import { blogPosts as blogPostsEn } from './posts';

const byLocale: Record<Exclude<SiteLocale, 'en'>, BlogPostFull[]> = {
  es: [],
  de: [],
  fr: [],
};

export function getBlogPostsForLocale(locale: SiteLocale): BlogPostFull[] {
  if (locale === 'en') return blogPostsEn;
  return byLocale[locale] ?? blogPostsEn;
}

export function getBlogPost(slug: string, locale: SiteLocale): BlogPostFull | undefined {
  return getBlogPostsForLocale(locale).find((p) => p.slug === slug);
}
