import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    client: z.string(),
    category: z.enum(['FSC', 'HealthCloud', 'ExperienceCloud', 'Seguros', 'PYMES', 'Demo']),
    stack: z.array(z.string()),
    coverImage: z.string(),
    bannerImage: z.string().optional(),
    duration: z.string(),
    linesOfCode: z.string(),
    keyMetric: z.string(),
    keyMetricLabel: z.string(),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    videoUrl: z.string().optional(),
    animationKey: z.enum(['kanban', 'video-gen', 'markowitz']).optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    orgUrl: z.string().optional(),
    order: z.number().default(0)
  })
});

export const collections = { projects };
