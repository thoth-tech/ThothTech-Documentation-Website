import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Thoth Tech",
      favicon: "/favicon.svg",
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: true,
        }),
      ],
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/thoth-tech",
      },
      logo: {
        src: "./public/favicon.svg",
      },
      components: {
        // MarkdownContent: "starlight-blog/overrides/MarkdownContent.astro",
        // Sidebar: "starlight-blog/overrides/Sidebar.astro",
        // ThemeSelect: "starlight-blog/overrides/ThemeSelect.astro",
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
                { label: "Overview", link: "/products/splashkit" },
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
