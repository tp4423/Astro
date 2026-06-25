import { defineCollection, z } from "astro:content";

const downloads = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    version: z.string(),
    category: z.string(),
    platforms: z.array(z.string()),
    fileSize: z.string(),
    downloadUrl: z.string(),
    updated: z.date(),
    changelog: z.string().optional(),
  }),
});

export const collections = { downloads };
