# ThothTech Documentation Website

<p align="left">
    <img width="150px" src="https://github.com/thoth-tech/.github/blob/main/images/splashkit.png"
    alt="Thoth Tech Logo"/>
</p>

[![GitHub contributors](https://img.shields.io/github/contributors/thoth-tech/ThothTech-Documentation-Website?label=Contributors&color=F5A623)](https://github.com/thoth-tech/ThothTech-Documentation-Website/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/thoth-tech/ThothTech-Documentation-Website?label=Issues&color=F5A623)](https://github.com/thoth-tech/ThothTech-Documentation-Website/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/thoth-tech/ThothTech-Documentation-Website?label=Pull%20Requests&color=F5A623)](https://github.com/thoth-tech/ThothTech-Documentation-Website/pulls)
[![Forks](https://img.shields.io/github/forks/thoth-tech/ThothTech-Documentation-Website?label=Forks&color=F5A623)](https://github.com/thoth-tech/ThothTech-Documentation-Website/network/members)
[![Stars](https://img.shields.io/github/stars/thoth-tech/ThothTech-Documentation-Website?label=Stars&color=F5A623)](https://github.com/thoth-tech/ThothTech-Documentation-Website/stargazers)

Welcome to the **ThothTech Documentation Website** repository! This project serves as the central
hub for all Thoth Tech resources, designed to provide a structured and accessible platform for
documentation, product information, and team resources. This contains out long term documentation,
such as the documentation for onboarding information, general information and company deliverables.

Short term documentation such as spike reports and sprint reports are stored in the
[Documentation](https://github.com/thoth-tech/documentation) repository.

Built with Astro and Starlight, this website offers an organized space where users can explore Thoth
Tech's mission, values, and goals, along with in-depth information on each of the company's products
and services. Each product has its own dedicated section, featuring a brief overview, its purpose,
and comprehensive documentation to support both users and development teams.

The site also includes team documentation for each semester, highlighting the efforts of the
individuals contributing to Thoth Tech's ongoing projects. Whether you're a developer, a team
member, or a user, this website provides all the information needed to understand and contribute to
Thoth Tech's vision and initiatives.

## Format Checks to Run

To maintain code quality, please ensure you run the following commands before submitting a pull
request:

1. **Format the Files**:

   ```shell
   npm run format
   ```

2. **Run the Lint Checker**:

   ```shell
   npm run lint
   ```

## Project Structure

This website is built with Astro and uses the **Starlight Starter Kit** as a foundation. Below is a
breakdown of the project structure:

```plaintext
.
├── public/              # Static assets like favicons, images
├── src/
│   ├── content/         # Markdown files for documentation content
│   │   ├── docs/        # Documentation pages
│   │   └── config.ts    # Configuration for Starlight content
│   ├── styles/          # Custom CSS for styling
│   └── env.d.ts         # TypeScript environment definitions
├── astro.config.mjs     # Astro configuration
├── package.json         # Node.js dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

- **Documentation Content**: `.md` or `.mdx` files placed in `src/content/docs/` are exposed as
  routes based on their filenames.
- **Static Assets**: Place images and other static files in `public/` for easy access.

## Commands

All commands should be run from the root of the project in the terminal:

| Command                   | Action                                                  |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | Installs all dependencies                               |
| `npm run dev`             | Starts the local development server at `localhost:4321` |
| `npm run build`           | Builds the production-ready site in `./dist/`           |
| `npm run preview`         | Previews your build locally before deployment           |
| `npm run astro ...`       | Runs Astro CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Displays help for Astro CLI commands                    |

---

## Getting Started

To initialize the project, use the following Astro command to set up with the Starlight Starter Kit:

```shell
npm create astro@latest -- --template starlight
```

For more information, check out the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Learn More

For additional resources, check out the following:

- **[Starlight Documentation](https://starlight.astro.build/)**: Learn more about the Starlight
  Starter Kit.
- **[Astro Documentation](https://docs.astro.build)**: Understand the Astro framework.
- **[Astro Discord Server](https://astro.build/chat)**: Connect with the Astro community.
