import { defineCollection } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { docsAndBlogSchema } from "starlight-blog/schema";

export const collections = {
  //og schema replaced with blog support one
  //docs: defineCollection({ schema: docsSchema() }),
  docs: defineCollection({ schema: docsAndBlogSchema }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
