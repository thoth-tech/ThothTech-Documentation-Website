# src

## Purpose
The `src` directory is the core of the repository, containing all essential resources for the OnTrack and SplashKit projects. It houses static assets, technical documentation, style configurations, and resources for onboarding and quality assurance.

## Structure

### 1. `assets/`
- **Purpose**: Stores static assets like logos and images.
- **Contents**:
  - `thoth-logo.png`: The primary logo for Thoth Tech.
  - `thoth-tech-logo-glow.png`: A glowing variation of the Thoth Tech logo.

---

### 2. `content/`
- **Purpose**: Contains the main documentation for various projects and modules.
- **Subdirectories**:
  - **`docs/`**: Core technical documentation organized into:
    - **`Products/`**: Documentation for key projects:
      - **`CourseFlow/`**:
        - Contains project files, including data flow diagrams, entity relationships, and user stories.
      - **`OnTrack/`**:
        - Covers deployment, file submission, multiple organizations, and setup guides.
        - Includes `review-ontrack-github.md` for GitHub reviews.
      - **`SplashKit/`**:
        - Documents game development, arcade machines, and website details.
    - **`old-files-and-folders/`**: Archived files for reference purposes.
  - **Files in `content/`**:
    - `config.ts`: Configuration file for Astro framework.

---

### 3. `styles/`
- **Purpose**: Contains CSS and style-related files for customizing the documentation website.
- **Note**: Ensure any new styles align with existing design guidelines.

---

### Notes
- Follow **snake_case** for any new file or folder names.
- All documentation updates should be reflected in the `astro.config.mjs` file for proper linkage.
- Static assets for all modules and subprojects should be added to the `assets/` folder.

