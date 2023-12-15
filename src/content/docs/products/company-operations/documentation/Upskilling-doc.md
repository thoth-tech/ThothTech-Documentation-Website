---
title: Upskilling Documentation on CSS
---

## Introduction

This document provides a guide on the Modern Web Development Technologies and help team members in
Upskilling their knowledge when working with at Thoth Tech company. This manual will offer
step-by-step instructions and resources to help you become knowledgeable in Angular, TypeScript,
JavaScript, Material UI, and Tailwind CSS whether you're new to web development or seeking to
broaden your skill set.

## Setting Up Your Development Environment

Make sure you have the necessary tools installed before exploring the technologies:

- Node.js and npm (Node Package Manager)
- Visual studio code (code editor)

## Basics of HTML, CSS, and JavaScript

HTML is the standard markup language for Web pages which will help you create your own website/
page. With the use of CSS you can style your web page.

Having a fundamental understanding of HTML and CSS, is helpful if you're new to web development.

Resources: Basics of HTML and CSS, from MDN Web Docs or you can refer to w3school

- [HTML](https://www.w3schools.com/html/default.asp)

- [CSS](https://www.w3schools.com/css/default.asp)

## Javascript for CSS

- Variables and Data Types:

  Learn about variables, data types, and how to manipulate data using JavaScript. Variables can be
  declared in four ways:

  1. automatically
  2. var
  3. const
  4. let

- Functions: Explore function declarations, expressions, and arrow functions. Understand scope and
  closures. A JavaScript function is defined with the function keyword, followed by a name, followed
  by parentheses ().

- Objects and Classes: Master object-oriented programming in JavaScript, including creating classes
  and instances.

  You can link the JavaScript to your HTML page using the \<script\> tag

  ![script_image1](./images/script%20_image1.png)

Understand how to select HTML elements using JavaScript selectors such as getElementById,
querySelector, and querySelectorAll.

Example for getElementByID

![getElementByID_image2](./images//getElementByID_image2.png)

Example for querySelector

![querySelector_images3.png](./images/querySelector_image3.png)

Modifying CSS Properties

Discover how to change CSS properties using JavaScript. This section will cover methods like
style.propertyName and classList.

Example of DOM Element style

![DOM_image4](./images/DOM_image4.png)

## Angular for CSS

With the aid of the potent front-end framework Angular, you can create dynamic and responsive web
apps. While Angular largely concentrates on the structure and logic of the application, it also
offers strong support for styling via CSS. You can use Angular for CSS to improve the aesthetic
appeal of your Angular applications by following the instructions in this manual.

Before getting started, you would need the following:

1. Basic knowledge of HTML, CSS and Javascript.

2. Node.js and npm installed in your machine.

3. Use the following command for installing Angular CLI

   - Install it globally using npm with following code

     **npm install -g @angular/cli**

   - Create a new project **ng new first-angular-app**

   - Navigate to the folder

   - cd first-angular-app

4. Styling in Angular Angular provides several ways to apply CSS to your application:

- Inline Styles You can apply styles directly using the HTML elements using the style attribute:
  **<div [style.color]="red">This text is red</div>**
- External CSS Create a separate file example angular.json file under ‘styles’:

            **"styles": [
            "src/styles.css",
            "path/to/external-styles.css"
            ]**

- Angular Stylesheets You can use Angular's built-in stylesheet feature by generating components
  with stylesheets: To create a component using the Angular CLI:
- From a terminal window, navigate to the directory containing your application.
- Run the ng generate component \<component-name\> command, where <\component-name\> is the name of
  your new component.

Angular CSS clause

- Class binding: By using bind CSS classes to the HTML elements **<div
  [class.my-class]="isMyClassActive">Conditional Class</div>**
- ngClass Directive: The ngClass directive allows you to add or remove CSS classes based on
  expressions: **<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Dynamic
  Classes</div>**

You can integrate Bootstrap with Angular simply by installing Bootstrap package using below code.
Then you can add bootstrap CSS and Javascript in your projects **npm install bootstrap**

Additional resources:

- [Angular Documentation](https://angular.io/docs)

- [Angular CLI Documentation](https://angular.io/cli)

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

- [Angular Material Documentation](https://material.angular.io/)

- [SASS Documentation](https://sass-lang.com/documentation)

- [Less Documentation](http://lesscss.org/)

- [Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)

- There are ample of help available on youtube on learning and getting started on web technologies
  <https://www.youtube.com/watch?v=oklBaGKx9uQ&list=PLNeMoaZ9VHP94JKBmajJDfR4pnNhBBtx2>

## Typescript for CSS

Ensure that before you begin, make sure you have the following prerequisites in place:

- Node.js and npm installed on your machine.

- A basic understanding of TypeScript and CSS.

- A code editor of your choice (e.g., Visual Studio Code)

Setting up TypeScript:

To use TypeScript for CSS, you need to set up a TypeScript project. Here's how:

![type_image5](./images/type_image5.png)

Creating a TypeScript CSS File:

In your project directory, create a TypeScript (.ts) file for your CSS. For example, create a file
named ‘styles.ts’

Writing TypeScript for CSS:

In styles.ts, you can define your styles using TypeScript. Here's an example:

![type2_image6](./images/type2_image6.png)

Compiling TypeScript CSS:

- To compile your TypeScript CSS into regular CSS, you can use the tsc command.
- Create a "tsconfig.json" file in your project directory if you haven't already. Configure it to
  compile TypeScript files as CommonJS modules. ![tsconfig_image7](./images/tsconfig_image7.png)

Now, compile your TypeScript files using: “npx tsc”

Compiled CSS will be in the ‘dist’ directory.

Integrating with Your Web Project:

Link the compiled CSS in your HTML file: ![type3_image8](./images/type3_image8.png)

Best Practices:

Use TypeScript types for CSS properties to ensure type safety.

Organize your TypeScript CSS files into a well-structured directory.

Consider using CSS pre-processors like SASS or LESS in combination with TypeScript. Regularly update
your project dependencies for security and feature improvements.

References: Below are some videos that can be helpful
<https://www.youtube.com/watch?v=d56mG7DezGs&pp=ygUTdHlwZXNjcmlwdCB0dXRvcmlhbA%3D%3D>

<https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI>

## Material Library for CSS

A design language created by Google called Material Design provides a thorough set of rules and
elements for making contemporary and aesthetically pleasing user experiences. To make it simple to
include Material Design into your web applications, the Material CSS library offers pre-defined
styles and components.

- **Perquisites for Material Library**

  Basic knowledge of HTML and CSS. A text editor or integrated development environment (IDE)

- **Download Material CSS Library**

  Visit the Material Design CSS website to download the latest version of the library. Download the
  CSS file to your project directory.

- **Usage of Material Library**
- Linking Material CSS: In your HTML file, link the Material CSS library by adding the following
  line within the \<head\> section example is as below: ![ML_image9](./images/ML_image9.png)

- Replace "path/to/material.css" with the actual path to the downloaded CSS file.

- Applying Material Styles: You can now apply Material styles to your HTML elements by adding
  appropriate class names. For example, to create a Material Design button, use the ‘mdc-button’
  class: ![ML1_image10](./images/ML1_image10.png)

Using Typography Classes

Material CSS provides typography classes for easy text styling. Apply classes like
mdc-typography--headline6 to format text elements: ![ML2_image11](./images/ML2_image11.png)

Custom Typography

For custom typography, override default styles with your own CSS rules, ensuring they follow
Material Design principles.

Styling Buttons

You can create Material Design buttons by adding the mdc-button class. Customize button styles
further with mdc-button--raised, mdc-button--unelevated, or mdc-button--outlined.
![ML3_image12](./images/ML3_image12.png)

For unique button styles, create custom CSS rules, or modify existing classes while adhering to
Material Design guidelines.

Creating Material Cards

To create Material Design cards, use the mdc-card class. Cards are versatile containers for content.
![ML4_image13](./images/ML4_image13.png)

Styling Form Elements

Material CSS styles form elements like inputs, labels, and checkboxes. Use classes like
‘mdc-text-field’, ‘mdc-checkbox’, and ‘mdc-form-field’. ![ML5_image14](./images/ML5_image14.png)

Creating Navbars

Material Design navbars can be created using classes like mdc-top-app-bar or mdc-drawer. These
components provide ready-made navigation structures.

![ML6_image15](./images/ML6_image15.png)

Material Icons

Material Icons can be easily added to your project by including the Material Icons font and using
the corresponding icon classes. ![ML7_image16](./images/ML7_image16.png)

Changing Theme Colors

You can change theme colors by overriding CSS variables like --mdc-theme-primary,
--mdc-theme-secondary, etc. Customize these variables to achieve your desired color scheme.
![ML8_image17](./images/ML8_image17.png)

**Additional Resources**
[Material Design CSS Documentation](https://material.io/components/web/docs/getting-started)
[Material Icons Documentation](https://material.io/resources/icons/)
[Material Design Guidelines](https://material.io/design)

## Tailwind for CSS

Developers may easily create user interfaces using the highly configurable CSS framework known as
Tailwind CSS. It focuses on offering a collection of compact, special-purpose classes that may be
combined to quickly construct intricate layouts and patterns.

Why Utilise Tailwind CSS?

Rapid Development: By eliminating the need to develop bespoke CSS, Tailwind CSS enables you to build
websites and applications more quickly.

Maintainability: It promotes maintainable code by providing a predefined collection of utility
classes.

Tailwind is quite flexible, allowing you to mould the framework to the requirements of your project
even if it comes with a default set of styles.

**Setting Up Your Development Environment** Before you start using Tailwind CSS, make sure you have
the following installed:

- [Node.js](https://nodejs.org/)
- npm (Node Package Manager)

**Installation** You can install Tailwind CSS in your project by running the following commands in
your terminal:

![TW1_image18](./images/TW1_image18.png)

Adding Tailwind CSS to Your HTML

Include the Tailwind CSS styles in your HTML file by linking to the generated CSS file (usually
named styles.css) in your project's public or dist directory. Make sure to add this link in the
\<head\> section of your HTML file: ![TW2_image19](./images/TW2_image19.png)

Using Utility Classes

You can apply styles to your HTML elements by adding Tailwind CSS utility classes directly to your
HTML markup. For example: ![TW3_image20](./images/TW3_image20.png)

Customizing Tailwind CSS

Tailwind CSS is highly customizable. You can modify the default configuration by editing the
‘tailwind.config.js’ file in your project. Refer to the official documentation for details on
customization: [Tailwind CSS Customization](https://tailwindcss.com/docs/configuration).

Components and Plugins

Tailwind CSS includes a set of pre-designed components like modals, popovers, and tooltips. You can
easily integrate these components into your project. Refer to the documentation for component usage:
[Tailwind CSS Components](https://tailwindcss.com/docs/components).

Tailwind CSS has a plugin ecosystem that extends its functionality. You can find and install plugins
for various purposes, such as typography and forms. Explore available plugins here:
[Tailwind CSS Plugins](https://tailwindcss.com/docs/plugins).

Additional Resources

- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS GitHub Repository](https://github.com/tailwindcss/tailwindcss)
- [Tailwind CSS Community](https://tailwindcss.com/community).
