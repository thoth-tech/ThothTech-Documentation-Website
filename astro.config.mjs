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
          tag: 'script',
          type: 'text/partytown',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
            });
            gtag('config', 'G-D62C4YT9KZ');
          `,
        },
        // CookieConsent stylesheet
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css',
          },
        },
        // CookieConsent configuration script
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: '/cookieconsent-config.js', // Ensure this script exists in the `public/` folder
          },
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
              autogenerate: { directory: "Resources/onboarding_hub" },
            },
            {
              label: "Quality Assurance",
              collapsed: true,
              autogenerate: { directory: "Resources/quality_assurance" },
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
              autogenerate: { directory: "products/splashkit" },
            },
            {
              label: "OnTrack",
              collapsed: true,
              autogenerate: { directory: "products/ontrack" },
            },
            {
              label: "CourseFlow",
              collapsed: true,
              autogenerate: { directory: "products/courseFlow" },
            },
          ],
        },
        {
          label: "Teams and Contributions",
          collapsed: true,
          autogenerate: { directory: "teams_and_contributions" },
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
