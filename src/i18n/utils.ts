import { type CollectionEntry, getCollection, getEntry } from 'astro:content'
import { defaultLocale, locales, type Locale, t } from './ui'

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value)
}

export function getLocaleFromId(id: string): Locale {
	const lang = id.split('/')[0]
	return isLocale(lang) ? lang : defaultLocale
}

export function getSlugFromId(id: string): string {
	const parts = id.split('/')
	return parts.length > 1 ? parts.slice(1).join('/') : id
}

export function chapterCollectionId(locale: Locale, slug: string): string {
	return `${locale}/${slug}`
}

/** Build a site path for a chapter (or home when chapter is 0 / intro). */
export function chapterHref(locale: Locale, slug: string, chapterNumber?: number): string {
	const isHome = chapterNumber === 0 || slug === 'intro'
	if (isHome) {
		return locale === defaultLocale ? '/' : `/${locale}`
	}
	return locale === defaultLocale ? `/${slug}` : `/${locale}/${slug}`
}

export function homeHref(locale: Locale): string {
	return locale === defaultLocale ? '/' : `/${locale}`
}

export function onePagerHref(locale: Locale): string {
	return locale === defaultLocale ? '/editions/one-pager' : `/${locale}/editions/one-pager`
}

/** Switch the current path to another locale, preserving chapter slug when possible. */
export function switchLocalePath(currentLocale: Locale, targetLocale: Locale, chapterSlug?: string): string {
	if (!chapterSlug || chapterSlug === 'intro') {
		return homeHref(targetLocale)
	}
	return chapterHref(targetLocale, chapterSlug)
}

export async function getChapters(locale: Locale) {
	const chapters = await getCollection('chapters', ({ id }) => id.startsWith(`${locale}/`))
	return chapters.sort((a, b) => a.data.chapter - b.data.chapter)
}

export async function getChapter(locale: Locale, slug: string) {
	return getEntry('chapters', chapterCollectionId(locale, slug))
}

export function formatChapterLabel(locale: Locale, chapterNumber: number): string {
	const strings = t(locale)
	if (chapterNumber === 0) return strings.intro
	if (locale === 'zh') return `${strings.chapter}${chapterNumber}${strings.chapterAbbrev}`
	return `${strings.chapter} ${chapterNumber}`
}

export function formatChapterNavLabel(locale: Locale, chapterNumber: number): string {
	const strings = t(locale)
	if (chapterNumber === 0) return strings.intro
	if (locale === 'zh') return `${chapterNumber}${strings.chapterAbbrev}`
	return `${strings.chapterAbbrev} ${chapterNumber}`
}

export function formatContinueLabel(
	locale: Locale,
	chapterNumber: number,
	title: string
): string {
	const strings = t(locale)
	if (locale === 'zh') {
		return `${strings.continueTo}${chapterNumber}${strings.chapterAbbrev}：${title}`
	}
	return `${strings.continueTo} ${chapterNumber}: ${title}`
}

export type ChapterEntry = CollectionEntry<'chapters'>
