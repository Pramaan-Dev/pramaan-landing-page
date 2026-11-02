import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Legal pages: Markdown written by scripts/build-legal.mjs.
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({ title: z.string(), nav: z.string(), order: z.number() }),
});

// Who a resource is for; the /resources hub filters on it. "everyone" shows under both.
const audience = z.enum(['business', 'developers', 'everyone']).default('everyone');
const person = z.object({ name: z.string(), role: z.string(), photo: z.string().optional() });

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Pramaan'),
    date: z.coerce.date(),
    audience,
    draft: z.boolean().default(false),
  }),
});

// Events: talks, demos, meetups. Times are stored with their offset and shown in London time.
const events = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    format: z.enum(['online', 'in-person', 'hybrid']),
    location: z.string(),
    registerUrl: z.string().url().optional(),
    host: z.string().default('Pramaan'),
    speakers: z.array(person).default([]),
    audience,
    draft: z.boolean().default(false),
  }),
});

// Guides: ebooks, whitepapers and reports. `file` is the PDF (in public/ or a full URL); no file shows "coming soon".
const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.enum(['ebook', 'whitepaper', 'report']),
    file: z.string().optional(),
    pages: z.number().optional(),
    cover: z.string().optional(),
    contributors: z.array(person).default([]),
    audience,
    draft: z.boolean().default(false),
  }),
});

export const collections = { legal, blog, events, guides };
