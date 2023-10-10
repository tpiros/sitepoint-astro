import { z, defineCollection, reference } from 'astro:content';

const devBlogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default('The Dev Team'),
    tags: z.array(z.string()),
    date: z.date(),
    draft: z.boolean().default(true),
    description: z.string(),
  }),
});

const corporateBlogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    featured: z.boolean(),
    language: z.enum(['en', 'es']),
  }),
});

export const collections = {
  devblog: devBlogCollection,
  corporateblog: corporateBlogCollection,
};

// const blog = defineCollection({
//   type: 'content',
//   schema: z.object({
//     title: z.string(),
//     relatedPosts: z.array(reference('blog')).optional(),
//     // author: reference('author'),
//   }),
// });

// const author = defineCollection({
//   type: 'data',
//   schema: z.object({
//     name: z.string(),
//   }),
// });

// export const collections = { blog, author };
