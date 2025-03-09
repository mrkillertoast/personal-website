import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
	collections: {
		workExperience: defineCollection({
			source: 'work-experience/**.json',
			type: 'data',
			schema: z.object({
				title: z.string(),
				location: z.string(),
				url: z.string().optional(),
				startDate: z.string(),
				endDate: z.string().optional(),
				description: z.string().optional(),
				tags: z.array(z.string()).optional(),
			})
		}),
		education: defineCollection({
			source: 'education/**.json',
			type: 'data',schema: z.object({
				title: z.string(),
				location: z.string(),
				url: z.string().optional(),
				startDate: z.string(),
				endDate: z.string().optional(),
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