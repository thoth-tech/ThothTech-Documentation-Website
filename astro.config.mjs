import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from 'starlight-links-validator';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"], // Forward both for compatibility
      },
    }),
    starlight({
      title: "Thoth Tech",
      favicon: "/favicon.svg",
      head: [
        // Google Analytics script tag
        {
          tag: "script",
          attrs: {
            type: "text/partytown",
            src: 'https://www.googletagmanager.com/gtag/js?id=G-D62C4YT9KZ',
            async: true,
          },
        },
        // Google Analytics inline configuration
        {
          tag: "script",
          attrs: {
            type: "text/partytown",
          },
          content: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D62C4YT9KZ');
            `,
        },
      ],
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
          collapsed: false,
          items: [
            {
              label: "Introduction",
              link: "/resources/introduction"
            },
            {
              label: "Thoth Tech Technology Stack",
              link: "/resources/thoth-tech-technology-stack"
            },
            {
              label: "Remote Working Guide",
              link: "/resources/remote-working-guide"
            },
            {
              label: "Onboarding Hub",
              collapsed: true,
              autogenerate: { directory: "Resources/Onboarding Hub" },
            },
            {
              label: "Quality Assurance",
              collapsed: true,
              autogenerate: { directory: "Resources/Quality Assurance" },
            },
            {
              label: "Frequently Asked Questions (FAQ)",
              link: "/resources/faq"
            },
          ],
        },
        {
          label: "Products",
          collapsed: false,
          items: [
            { label: "Products", link: "/products" },
            {
              label: "SplashKit",
              collapsed: true,
              autogenerate: { directory: "Products/SplashKit" },
            },
            {
              label: "OnTrack",
              collapsed: true,
              autogenerate: { directory: "Products/OnTrack" },
            },
            {
              label: "CourseFlow",
              collapsed: true,
              autogenerate: { directory: "Products/CourseFlow" },
            },
          ],
        },
        {
          label: "Teams and Contributions",
          collapsed: true,
          autogenerate: { directory: "Teams and Contributions" },
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
