import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Thoth Tech",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/thoth-tech",
      },
      sidebar: [
        {
          label: "Resources",
          collapsed: true, // Collapsed by default
          items: [
            { label: "Introduction", link: "/resources/introduction" },
            { label: "Thoth Tech Technology Stack", link: "/resources/thoth-tech-technology-stack" },
            { label: "Remote Working Guide", link: "/resources/remote-working-guide" },
            {
              label: "Onboarding Hub",
              collapsed: true, 
              autogenerate: { directory: "resources/onboarding-hub" },
            },
            {
              label: "Quality Assurance",
              collapsed: true,
              autogenerate: { directory: "resources/quality-assurance" },
            },
            { label: "Frequently Asked Questions (FAQ)", link: "/resources/faq" },
          ],
        },
        {
          label: "Teams and Contributions",
          collapsed: true,
          autogenerate: { directory: "teams-and-contributions" },
        },
        {
          label: "Products",
          collapsed: true,
          items: [
            { label: "Products", link: "/products/products" },
            {
              label: "SplashKit",
              collapsed: true,
              items: [
                {
                  label: "Arcade Machine",
                  collapsed: true,
                  autogenerate: { directory: "products/splashkit/arcade-machine" },
                },
                {
                  label: "Games Development",
                  collapsed: true,
                  autogenerate: { directory: "products/splashkit/games-development" },
                },
                {
                  label: "SplashKit Expansion",
                  collapsed: true,
                  autogenerate: { directory: "products/splashkit/splashkit-expansion" },
                },
                {
                  label: "SplashKit Online",
                  collapsed: true,
                  autogenerate: { directory: "products/splashkit/splashkit-online" },
                },
                {
                  label: "SplashKit Tutorials",
                  collapsed: true,
                  autogenerate: { directory: "products/splashkit/splashkit-tutorials" },
                },
                {
                  label: "SplashKit Website",
                  collapsed: true,
                  autogenerate: { directory: "products/splashkit/splashkit-website" },
                },
              ],
            },
            {
              label: "OnTrack",
              collapsed: true,
              autogenerate: { directory: "products/ontrack" },
            },
            {
              label: "CourseFlow",
              collapsed: true,
              autogenerate: { directory: "products/courseflow" },
            },
            {
              label: "Art Gallery",
              collapsed: true,
              autogenerate: { directory: "products/art-gallery" },
            },
          ],
        },
        {
          label: "Feedback",
          collapsed: true,
          items: [
            { 
              label: "Feedback Form", 
              link: "/feedback/feedback-form" 
            }
          ],
        },
      ],
    }),
  ],
  // Image processing
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
