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
				order: z.number(),
			})
		}),
		education: defineCollection({
			source: 'education/**.json',
			type: 'data', schema: z.object({
				title: z.string(),
				location: z.string(),
				url: z.string().optional(),
				startDate: z.string(),
				endDate: z.string().optional(),
				description: z.string().optional(),
				tags: z.array(z.string()).optional(),
				order: z.number(),
			})
		}),
		projects: defineCollection({
			source: 'projects/**.json',
			type: 'data',
			schema: z.object({
				id: z.string(),
				title: z.string(),
				status: z.enum([ 'completed', 'in-progress', 'idea', 'archived', 'draft' ]).default('draft'),
				postingDate: z.string(),
				imageUrl: z.string().optional(),
				tagline: z.string().optional(),
				description: z.string(),
				tags: z.array(z.string()).optional(),
				githubUrl: z.string().optional(),
				liveUrl: z.string().optional(),
			})
		}),
		codingSkills: defineCollection({
			source: 'skills/code/**.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				icon: z.string().optional(),
				remark: z.string().optional(),
			})
		}),
		softSkills: defineCollection({
			source: 'skills/soft/**.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				icon: z.string().optional(),
				remark: z.string().optional(),
			})
		}),
		hardSkills: defineCollection({
			source: 'skills/hard/**.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				icon: z.string().optional(),
				remark: z.string().optional(),
			})
		}),
		languageSkills: defineCollection({
			source: 'skills/languages/**.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				icon: z.string().optional(),
				remark: z.string().optional(),
				order: z.number(),
			})
		}),
		general: defineCollection({
			source: 'general/general.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				headline: z.string(),
				subtitle: z.string().optional(),
				description: z.string(),
				location: z.string(),
				email: z.string(),
				images: z.array(z.string()).optional(),
				githubUrl: z.string().optional(),
				linkedInUrl: z.string().optional(),
				mailtoUrl: z.string().optional(),
			})
		}),
		navigation: defineCollection({
			source: 'navigation/**.json',
			type: 'data',
			schema: z.object({
				name: z.string(),
				url: z.string(),
				order: z.number(),
			})
		})
	}
})