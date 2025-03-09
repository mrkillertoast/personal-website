import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
	collections: {
		experience: defineCollection({
			source: 'experience/**.json',
			type: 'data',
			schema: z.object({
				job: z.string(),
				enterprise: z.string(),
				start_date: z.string(),
				end_date: z.string().optional(),
				description: z.string().optional(),
				tags: z.array(z.string()).optional(),
			})
		}),
		education: defineCollection({
			source: 'education/**.json',
			type: 'data',schema: z.object({
				education: z.string(),
				school: z.string(),
				start_date: z.string(),
				end_date: z.string().optional(),
				description: z.string().optional(),
				tags: z.array(z.string()).optional(),
			})
		}),
		projects: defineCollection({
			source: 'projects/**.json',
			type: 'data',
			schema: z.object({
				title: z.string(),
				image: z.string().optional(),
				description: z.string(),
				tags: z.array(z.string()).optional(),
				github_link: z.string().optional(),
				link: z.string().optional(),
			})
		}),
		skills: defineCollection({
			source: 'skills/**/**.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				remark: z.string().optional(),
			})
		}),
		general: defineCollection({
			source: 'general/general.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				subtitle: z.string().optional(),
				description: z.string(),
			})
		})
	}
})