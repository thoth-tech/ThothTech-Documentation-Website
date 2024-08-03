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
          label: "Resources",
          collapsed: true, // Collapsed by default
          items: [
            { label: "Introduction", 
              link: "/resources/introduction",
            },
  
            {
              label: "Thoth Tech Technology Stack",
              link: "/resources/thoth-tech-technology-stack",
            },

            {
              label: "Remote Working Guide",
              link: "/resources/remote-working-guide",
            },
            {
              label: "Onboarding Hub",
              collapsed: true, // Collapsed by default
              items: [
                {
                  label: "Thoth Tech Welcome Package",
                  link: "resources/onboarding-hub/thothtech-onboarding-doc",
                },
                {
                  label: "OnTrack Onboarding Package",
                  link: "resources/onboarding-hub/ontrack-onboarding-doc",
                },
                {
                  label: "SplashKit Onboarding Package",
                  link: "resources/onboarding-hub/splashkit-onboarding-doc",
                },
              ],
            },
            {
              label: "Quality Assurance",
              collapsed: true, // Collapsed by default
              items: [
                {
                  label: "Quality Assurance Overview",
                  link: "/resources/quality-assurance/quality-assurance-overview",
                },
                {
                  label: "Git Contributions Guide",
                  link: "/resources/quality-assurance/git-contributions-guide",
                },
                {
                  label: "Testing and Development",
                  link: "/resources/quality-assurance/testing-and-dev",
                },
              ],
            },
            {
              label: "Documentation",
              collapsed: true, // Collapsed by default
              items: [
                {
                  label: "Documenting for Thoth Tech",
                  link: "/resources/documentation/documenting-for-thoth-tech",
                },
                {
                  label: "Writing Style Guide",
                  link: "/resources/documentation/writing-style-guide",
                },
                {
                  label: "Templates",
                  collapsed: true, // Collapsed by default
                  autogenerate: {
                    directory: "resources/Documentation/templates",
                  },
                },
              ]
            },
            {
              label: "Frequently Asked Questions (FAQ)",
              link: "/resources/faq",
            },
          ],
        },
        {
          label: "Teams and Leadership",
          collapsed: true, // Collapsed by default
          autogenerate: {
            directory: "teams-and-leadership",
          },
        },
        {
          label: "Company Submissions",
          collapsed: true, // Collapsed by default
          autogenerate: {
            directory: "companywidesubmissions",
          },
        },
        {
          label: "Products",
          collapsed: true, // Collapsed by default
          items: [
            {
              label: "Products",
              link: "/products/products",
            },
            {
              label: "Art Gallery",
              collapsed: true, // Collapsed by default
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/art-gallery/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/art-gallery/Projects",
                  },
                  items: [
                    {
                      label: "Lighthouse",
                      autogenerate: {
                        directory: "products/art-gallery/Projects/Lighthouse",
                      },
                    },
                    {
                      label: "Testing Project",
                      autogenerate: {
                        directory: "products/art-gallery/Projects/Testing Project",
                      },
                    },
                  ],
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/art-gallery/Documentation",
                  },
                  items: [
                    {
                      label: "BackendUpgrades",
                      autogenerate: {
                        directory: "products/art-gallery/Documentation/BackendUpgrades",
                      },
                    },
                    {
                      label: "Deployment",
                      autogenerate: {
                        directory: "products/art-gallery/Documentation/Deployment",
                      },
                    },
                    {
                      label: "Dockerization",
                      autogenerate: {
                        directory: "products/art-gallery/Documentation/Dockerization",
                      },
                    },
                    {
                      label: "Documentation Project",
                      autogenerate: {
                        directory: "products/art-gallery/Documentation/Documentation Project",
                      },
                    },
                    {
                      label: "Guidance",
                      autogenerate: {
                        directory: "products/art-gallery/Documentation/Guidance",
                      },
                    },
                  ],
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/art-gallery/Issues-and-Resolutions",
                  },
                },
              ],
            },
            {
              label: "Company Operations",
              collapsed: true, // Collapsed by default
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
                    {
                      label:"Onboarding Tool",
                      autogenerate: {
                        directory: "products/company-operations/projects/onboaring-tool",
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
              collapsed: true, // Collapsed by default
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
                  items: [
                    {
                      label: "2FA - Documentation",
                      autogenerate: {
                        directory: "products/courseflow/Projects/2FA - Documentation",
                      },
                    },
                  ]
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
              collapsed: true, // Collapsed by default
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/ontrack/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/ontrack/Projects",
                  },
                  items: [
                    {
                      label: "Group_Task_Submission",
                      autogenerate: {
                        directory: "products/ontrack/Projects/Group_Task_Submission",
                      },
                    },
                    {
                      label: "Numbas",
                      autogenerate: {
                        directory: "products/ontrack/Projects/Numbas",
                      },
                    },
                    {
                      label: "Staff Grant Extension",
                      autogenerate: {
                        directory: "products/ontrack/Projects/Staff Grant Extension",
                      },
                    },
                    {
                      label: "Task Submission & Redesign",
                      autogenerate: {
                        directory: "products/ontrack/Projects/Task Submission & Redesign",
                      },
                    },
                    {
                      label: "Tutor Times",
                      autogenerate: {
                        directory: "products/ontrack/Projects/Tutor Times",
                      },
                      items: [
                        {
                          label: "Documentation",
                          autogenerate: {
                            directory: "products/ontrack/Projects/Tutor Times/Documentation",
                          },
                        },
                        {
                          label: "UML Diagrams",
                          autogenerate: {
                            directory: "products/ontrack/Projects/Tutor Times/UML Diagrams",
                          },
                        },
                      ]
                    },
                  ]
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/ontrack/Documentation",
                  },
                  items: [
                    {
                      label: "Deployment",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Deployment",
                      },
                      items: [
                        {
                          label: "Enhanced_Authentication",
                          autogenerate: {
                            directory: "products/ontrack/Documentation/Deployment/Enhanced_Authentication",
                          }
                        },
                        {
                          label: "Google_Cloud",
                          autogenerate: {
                            directory: "products/ontrack/Documentation/Deployment/Google_Cloud",
                          }
                        },
                      ]
                    },
                    {
                      label: "Documentation",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Documentation",
                      },
                    },
                    {
                      label: "File Submission Enhancements",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/File Submission Enhancements",
                      },
                    },
                    {
                      label: "Front-End-Migration",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Front-End-Migration",
                      },
                    },
                    {
                      label: "Incorporate Content Ontrack",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Incorporate Content Ontrack",
                      },
                    },
                    {
                      label: "Jupyter Notebook",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Jupyter Notebook",
                      },
                    },
                    {
                      label: "Multiple Organisations",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Multiple Organisations",
                      },
                    },
                    {
                      label: "Voice Verification",
                      autogenerate: {
                        directory: "products/ontrack/Documentation/Voice Verification",
                      },
                    },
                  ],
                },
                {
                  label: "Issues-and-resolutions",
                  autogenerate: {
                    directory: "products/ontrack/Issues-and-resolutions",
                  },
                },
                {
                  label: "Ontrack-setup",
                  autogenerate: {
                    directory: "products/ontrack/Ontrack-setup",
                  },
                },
              ],
            },
            {
              label: "SplashKit",
              collapsed: true, // Collapsed by default
              autogenerate: {
                directory: "products/splashkit",
              },
              // items: [
              //   {
              //     label: "Get to Know Us",
              //     link: "/products/splashkit/example",
              //   },
              //   {
              //     label: "Projects",
              //     autogenerate: {
              //       directory: "products/splashkit/projects",
              //     },
              //   },
              //   {
              //     label: "Documentation",
              //     autogenerate: {
              //       directory: "products/splashkit/documentation",
              //     },
              //     items: [
              //       {
              //         label: "Tutorials",
              //         autogenerate: {
              //           directory: "products/splashkit/documentation/tutorials",
              //         },
              //       },
              //       {
              //         label: "Expansions",
              //         autogenerate: {
              //           directory: "products/splashkit/documentation/expansions",
              //         },
              //       },
              //       {
              //         label: "SplashKit Online",
              //         autogenerate: {
              //           directory: "products/splashkit/documentation/splashkit-online",
              //         },
              //         items: [
              //           {
              //             label: "Code Documentation",
              //             autogenerate: {
              //               directory: "products/splashkit/documentation/splashkit-online/code-documentation",
              //             },
              //             items: [
              //               {
              //                 label: "Classes",
              //                 autogenerate: {
              //                   directory: "products/splashkit/documentation/splashkit-online/code-documentation/classes",
              //                 },
              //               },
              //               {
              //                 label: "Processes",
              //                 autogenerate: {
              //                   directory: "products/splashkit/documentation/splashkit-online/code-documentation/processes",
              //                 },
              //               },
              //               {
              //                 label: "Other",
              //                 autogenerate: {
              //                   directory: "products/splashkit/documentation/splashkit-online/code-documentation/other",
              //                 },
              //               },
              //             ],
              //           },
              //         ],
              //       },
              //       {
              //         label: "Research and Findings",
              //         autogenerate: {
              //           directory: "products/splashkit/documentation/splashkit-online/research-and-findings",
              //         },
              //       },
              //     ],
              //   },
              //   {
              //     label: "Issues and Resolutions",
              //     autogenerate: {
              //       directory: "products/splashkit/issues-and-resolutions",
              //     },
              //   },
              // ],
            },
          ],
        },
        {
          label: "Feedback",
          items: [
            {
              label: "Feedback Form",
              link: "feedback/feedback-form",
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
