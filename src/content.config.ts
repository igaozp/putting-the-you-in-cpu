import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { locales } from './i18n/ui'

export const collections = {
	chapters: defineCollection({
		loader: glob({
			pattern: '**/*.mdx',
			base: './src/content/chapters',
			generateId: ({ entry, data }) => {
				// entry: "en/0-intro.mdx" or "zh/1-the-basics.mdx"
				const lang = entry.split('/')[0]
				const locale = (locales as readonly string[]).includes(lang) ? lang : 'en'
				return `${locale}/${data.slug as string}`
			}
		}),
		schema: z.object({
			chapter: z.number(),
			title: z.string(),
			shortname: z.string(),
			slug: z.string(),
			updatedAt: z.date()
		})
	})
}
