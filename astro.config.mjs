import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlightBlog(),
    starlight({
      title: "Thoth Tech",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/thoth-tech",
      },
      components: {
        MarkdownContent: "starlight-blog/overrides/MarkdownContent.astro",
        Sidebar: "starlight-blog/overrides/Sidebar.astro",
        ThemeSelect: "starlight-blog/overrides/ThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Processes",
          items: [
            {
              label: "Thoth Tech Technology Stack Document",
              link: "processes/thoth-tech-technology-stack",
            },

            { label: "Introduction", link: "/processes/introduction" },
            {
              label: "Cyber Security Guidelines",
              autogenerate: {
                directory: "processes/cyber-security-guidelines",
              },
            },
            {
              label: "Documentation",
              autogenerate: { directory: "processes/Documentation" },
            },
            {
              label: "Quality Assurance",
              items: [
                {
                  label: "Git Contributions Guide",
                  link: "/processes/quality-assurance/git-contributions-guide",
                },
                {
                  label: "Quality Assurance Overview",
                  link: "/processes/quality-assurance/quality-assurance-overview",
                },
                {
                  label: "Testing and Development",
                  link: "/processes/quality-assurance/testing-and-dev",
                },
                {
                  label: "Templates",
                  autogenerate: {
                    directory: "processes/quality-assurance/templates",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Teams and Leadership",
          autogenerate: {
            directory: "teams-and-leadership",
          },
        },
        {
          label: "Company Wide Submissions",
          autogenerate: {
            directory: "companywidesubmissions",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Policies",
          autogenerate: {
            directory: "policies",
          },
        },
        {
          label: "Products",
          items: [
            {
              label: "Products",
              link: "/products/products",
            },
            {
              label: "Art Gallery",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/art-gallery/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/art-gallery/projects",
                  },
                  items: [
                    {
                      label: "Lighthouse",
                      autogenerate: {
                        directory: "products/art-gallery/Projects/Lighthouse",
                      },
                    },
                    {
                      label: "Dockerization",
                      autogenerate: {
                        directory: "products/art-gallery/Projects/dockerization",
                      },
                    },
                  ],
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/art-gallery/Documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/art-gallery/issues-and-resolutions",
                  },
                },
              ],
            },
            {
              label: "Company Operations",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/company-operations/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/company-operations/projects",
                  },
                  items: [
                    {
                      label: "Docusaurus Documentation",
                      autogenerate: {
                        directory: "products/company-operations/projects/docusaurus-documentation",
                      },
                    },
                    {
                      label: "Thoth Tech Website",
                      autogenerate: {
                        directory: "products/company-operations/projects/Thoth-Tech-Website",
                      },
                    },
                  ],
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/company-operations/documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/company-operations/issues-and-resolution",
                  },
                },
              ],
            },
            {
              label: "CourseFlow",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/courseflow/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/courseflow/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/courseflow/documentation",
                  },
                  items: [
                    {
                      label: "Research",
                      autogenerate: {
                        directory: "products/courseflow/documentation/research",
                      },
                    },
                  ],
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/courseflow/issues-and-resolutions",
                  },
                },
              ],
            },
            {
              label: "OnTrack",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/ontrack/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/ontrack/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/ontrack/documentation",
                  },
                  items: [
                    {
                      label: "Front End Migration",
                      autogenerate: {
                        directory: "products/ontrack/documentation/front-end-migration",
                      },
                    },
                    {
                      label: "Numbas",
                      autogenerate: {
                        directory: "products/ontrack/documentation/numbas",
                      },
                    },
                    {
                      label: "Deployment",
                      autogenerate: {
                        directory: "products/ontrack/documentation/deployment",
                      },
                    },
                  ],
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/ontrack/issues-and-resolutions",
                  },
                },
              ],
            },
            {
              label: "SplashKit",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/splashkit/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/splashkit/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/splashkit/Documentation",
                  },
                  items: [
                    {
                      label: "API Expansion",
                      autogenerate: {
                        directory: "products/splashkit/Documentation/API-Expansion",
                      },
                      items: [
                        {
                          label: "Modules",
                          items: [
                            {
                              label: "Data Analytics",
                              autogenerate: {
                                directory:
                                  "products/splashkit/Documentation/API-Expansion/Modules/Data-Analytics",
                              },
                              items: [
                                {
                                  label: "Background",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Data-Analytics/Background",
                                  },
                                },
                                {
                                  label: "Research & Findings",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Data-Analytics/Research-Findings",
                                  },
                                },
                                {
                                  label: "Testing",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Data-Analytics/Testing",
                                  },
                                },
                              ],
                            },
                            {
                              label: "Machine Learning",
                              autogenerate: {
                                directory:
                                  "products/splashkit/Documentation/API-Expansion/Modules/Machine-Learning",
                              },
                              items: [
                                {
                                  label: "Background",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Machine-Learning/Background",
                                  },
                                },
                                {
                                  label: "Research & Findings",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Machine-Learning/Research-Findings",
                                  },
                                },
                                {
                                  label: "Testing",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Machine-Learning/Testing",
                                  },
                                },
                              ],
                            },
                            {
                              label: "Physics",
                              autogenerate: {
                                directory:
                                  "products/splashkit/Documentation/API-Expansion/Modules/Physics",
                              },
                              items: [
                                {
                                  label: "Background",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Physics/Background",
                                  },
                                },
                                {
                                  label: "Research & Findings",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Physics/Research-Findings",
                                  },
                                },
                                {
                                  label: "Testing",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Modules/Physics/Testing",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: "Research and Findings",
                          autogenerate: {
                            directory:
                              "products/splashkit/Documentation/API-Expansion/Research-and-Findings",
                          },
                        },
                        {
                          label: "Spike Reports",
                          autogenerate: {
                            directory:
                              "products/splashkit/Documentation/API-Expansion/Spike-Reports",
                          },
                        },
                        {
                          label: "Windows DevContainer",
                          autogenerate: {
                            directory:
                              "products/splashkit/Documentation/API-Expansion/Windows-DevContainer",
                          },
                          items: [
                            {
                              label: ".devcontainer",
                              autogenerate: {
                                directory:
                                  "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer",
                              },
                              items: [
                                {
                                  label: "DXball",
                                  autogenerate: {
                                    directory:
                                      "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball",
                                  },
                                  items: [
                                    {
                                      label: "logs",
                                      autogenerate: {
                                        directory:
                                          "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/logs",
                                      },
                                    },
                                    {
                                      label: "Resources",
                                      autogenerate: {
                                        directory:
                                          "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/Resources",
                                      },
                                      items: [
                                        {
                                          label: "bundles",
                                          autogenerate: {
                                            directory:
                                              "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/Resources/bundles",
                                          },
                                        },
                                        {
                                          label: "fonts",
                                          autogenerate: {
                                            directory:
                                              "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/Resources/fonts",
                                          },
                                        },
                                        {
                                          label: "images",
                                          autogenerate: {
                                            directory:
                                              "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/Resources/images",
                                          },
                                        },
                                        {
                                          label: "json",
                                          autogenerate: {
                                            directory:
                                              "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/Resources/json",
                                          },
                                        },
                                        {
                                          label: "sounds",
                                          autogenerate: {
                                            directory:
                                              "products/splashkit/Documentation/API-Expansion/Windows-DevContainer/.devcontainer/DXball/Resources/sounds",
                                          },
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "Arcade Machine + Games",
                      items: [
                        {
                          label: "Arcade Machine",
                          items: [
                            {
                              label: "Arcade Machine Setup",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine-Setup",
                              },
                              items: [
                                {
                                  label: "Files",
                                  autogenerate: {
                                    directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Files",
                                  },
                                  items: [
                                    {
                                      label: "themes/splashkit",
                                      autogenerate: {
                                        directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Files/themes/splashkit",
                                      },
                                      items: [
                                        {
                                          label: "art",
                                          autogenerate: {
                                            directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Files/themes/splashkit/art",
                                          },
                                          items: [
                                            {
                                              label: "sk",
                                              autogenerate: {
                                                directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Files/themes/splashkit/art/sk",
                                              },
                                              items: [
                                                {
                                                  label: "art",
                                                  autogenerate: {
                                                    directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Files/themes/splashkit/art/sk/art",
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  label: "Adding Games",
                                  autogenerate: {
                                    directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Adding-Games",
                                  },
                                },
                                {
                                  label: "Create Pi Image",
                                  autogenerate: {
                                    directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Create-Pi-Image",
                                  },
                                },
                                {
                                  label: "Setup Arcade Machine",
                                  autogenerate: {
                                    directory: "products/splashkit/Documentation/Arcade-Machine-Setup/Setup-Arcade-Machine",
                                  },
                                },
                              ],
                            },
                            {
                              label: "Contribution Guides",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Contribution-Guides",
                              },
                            },
                            {
                              label: "Pi Emulation",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Pi-Emulation",
                              },
                            },
                            {
                              label: "Research and Findings",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Research-and-Findings",
                              },
                            },
                            {
                              label: "Game Design Documents",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Game-Design-Documents",
                              },
                            },
                            {
                              label: "Game Proposal Documents",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Game-Proposal-Documents",
                              },
                            },
                            {
                              label: "Meeting Minutes / T1-2022",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Meeting-Minutes-T1-2022",
                              },
                            },
                            {
                              label: "Templates",
                              autogenerate: {
                                directory: "products/splashkit/Documentation/Arcade-Machine/Templates",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "Tutorials",
                      autogenerate: {
                        directory: "products/splashkit/Documentation/Tutorials",
                      },
                    },
                    {
                      label: "Starlight Website",
                      autogenerate: {
                        directory: "products/splashkit/Documentation/Starlight-Website",
                      },
                    },
                    {
                      label: "Expansions",
                      autogenerate: {
                        directory: "products/splashkit/Documentation/Expansions",
                      },
                    },
                    {
                      label: "SplashKit Online",
                      autogenerate: {
                        directory: "products/splashkit/Documentation/SplashKit-Online",
                      },
                    },
                  ],
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/splashkit/issues-and-resolutions",
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
