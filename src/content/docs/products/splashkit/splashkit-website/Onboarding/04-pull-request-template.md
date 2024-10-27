---
title: Pull Request Template
description: This is a template for creating a pull request for SplashKit Website.
sidebar:
  label: Pull Request Template
  order: 5
---

## Template for making a pull request

When making a pull request to the `splashkit.io-starlight` repository, please use the following
template to ensure that your pull request covers all the required steps and can be reviewed by your
peers. The template includes a checklist of items that you need to complete before submitting your
pull request, some of which may not be relevant to your specific pull request. Please ensure that
you complete all the relevant items before submitting your pull request.

```markdown
# Description

Please include a summary of the changes and the related issue. Please also include relevant
motivation and context. List any dependencies that are required for this change.

## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as
      expected)
- [ ] Documentation (update or new)

## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can
reproduce. Please also list any relevant details for your test configuration.

- [ ] Tested in latest Chrome
- [ ] Tested in latest Firefox
- [ ] npm run build
- [ ] npm run preview

## Checklist

### If involving code

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings

### If modified config files

- [ ] I have checked the following files for changes:
  - [ ] package.json
  - [ ] astro.config.mjs
  - [ ] netlify.toml
  - [ ] docker-compose.yml
  - [ ] custom.css

## Folders and Files Added/Modified

Please list the folders and files added/modified with this pull request.

- Added:
  - [ ] folder/folder
  - [ ] folder/folder
- Modified:
  - [ ] folder/file
  - [ ] folder/file

## Additional Notes

Please add any additional information that might be useful for the reviewers.
```

Please refer to Pull Request Guide for more information on creating a pull request.
