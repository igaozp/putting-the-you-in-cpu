export const locales = ['en', 'zh'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	zh: '中文'
}

export const ui = {
	en: {
		articleTitle: 'Putting the "You" in CPU',
		articleTitleWords: ['Putting', 'the', '\u201cYou\u201d', 'in', 'CPU'] as const,
		abstract:
			'Curious exactly what happens when you run a program on your computer? Learn how multiprocessing works, what system calls really are, how computers manage memory with hardware interrupts, and how Linux loads executables.',
		by: 'By',
		date: 'July, 2023',
		fromTheBeginning: 'From the beginning\u2026',
		continueTo: 'Continue to Chapter',
		chapter: 'Chapter',
		chapterAbbrev: 'Ch.',
		intro: 'Intro',
		chapterContents: 'Chapter Contents',
		previous: 'Previous',
		next: 'Next',
		partOf: 'Part of',
		partOfSuffix: 'a rabbit hole into how your computer runs programs.',
		allChapters: 'All Chapters',
		editOnGitHub: 'Edit on GitHub',
		navigateBetweenChapters: 'Navigate Between Chapters',
		scrollPaddingBlank: '[This Space Intentionally Left Blank]',
		scrollPaddingNote:
			'The bottom of every page is padded so readers can maintain a consistent eyeline.',
		openSource: 'Open source with \u2764\uFE0E on GitHub',
		otherEditions: 'Other editions',
		onePager: 'One-Pager',
		pdf: 'PDF',
		normal: 'Normal',
		editions: 'Editions',
		language: 'Language',
		notFoundTitle: 'Not Found',
		notFoundSegfault: 'Segmentation fault (core dumped)',
		notFoundHint:
			"Looks like you wound up accessing a memory region \u2014 errr, page \u2014 that doesn't exist.",
		notFoundCta: 'Want to learn more about page faults?',
		notFoundLink: 'Start from the beginning!',
		keywords: [
			'unix',
			'linux',
			'mmu',
			'paging',
			'memory management',
			'cpu',
			'program execution',
			'elf',
			'elf format',
			'timeslicing',
			'fork',
			'cow'
		]
	},
	zh: {
		articleTitle: '把「你」放进 CPU',
		articleTitleWords: ['把', '「你」', '放进', 'CPU'] as const,
		abstract:
			'好奇当你在电脑上运行一个程序时，底层究竟发生了什么？学习多进程如何工作、系统调用到底是什么、计算机如何用硬件中断管理内存，以及 Linux 如何加载可执行文件。',
		by: '作者',
		date: '2023 年 7 月',
		fromTheBeginning: '从头说起\u2026',
		continueTo: '继续阅读第',
		chapter: '第',
		chapterAbbrev: '章',
		intro: '序章',
		chapterContents: '本章目录',
		previous: '上一章',
		next: '下一章',
		partOf: '本文是',
		partOfSuffix: '：带你钻进计算机如何运行程序的兔子洞。',
		allChapters: '全部章节',
		editOnGitHub: '在 GitHub 上编辑',
		navigateBetweenChapters: '章节导航',
		scrollPaddingBlank: '【此处有意留白】',
		scrollPaddingNote: '每页底部留白，方便阅读时视线保持一致的高度。',
		openSource: '开源 \u2764\uFE0E 于 GitHub',
		otherEditions: '其他版本',
		onePager: '单页版',
		pdf: 'PDF',
		normal: '普通版',
		editions: '版本',
		language: '语言',
		notFoundTitle: '页面未找到',
		notFoundSegfault: 'Segmentation fault (core dumped)',
		notFoundHint: '看起来你访问了一块不存在的内存区域——呃，页面。',
		notFoundCta: '想了解更多关于缺页中断的知识？',
		notFoundLink: '从头开始阅读！',
		keywords: [
			'unix',
			'linux',
			'mmu',
			'分页',
			'内存管理',
			'cpu',
			'程序执行',
			'elf',
			'elf 格式',
			'时间片',
			'fork',
			'写时复制'
		]
	}
} as const

export type UiKey = keyof (typeof ui)['en']

export function t(locale: Locale) {
	return ui[locale]
}
