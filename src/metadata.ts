import { type Locale, t } from './i18n/ui'

export function getAbstract(locale: Locale = 'en') {
	return t(locale).abstract
}

/** @deprecated Use getAbstract(locale) for i18n-aware abstract text. */
export const abstract =
	'Curious exactly what happens when you run a program on your computer? Learn how multiprocessing works, what system calls really are, how computers manage memory with hardware interrupts, and how Linux loads executables.'
