// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({ 
    loader: glob({
        pattern: ["**/*.mdx"],
        base: "./src/content/projects"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),     
        thumbnail: z.string(),   
    })
});

export const collections = { projects };