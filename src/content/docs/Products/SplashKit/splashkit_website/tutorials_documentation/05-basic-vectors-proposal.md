---
title: Tutorial Proposal Guide
description:
  Structure of a tutorial proposal on basic vector mathematics and its applications in game
  development.
sidebar:
  hidden: true
  label: Tutorial Proposal Guide
  order: 5
---

## Tutorial Template 1: Basic Vectors

This tutorial will cover the fundamentals of vector mathematics and some applications (such as in
game development). The intended audience will be for beginners to intermediate learners, and will
guide them through understanding and implementing vector operations, including angle and magnitude
calculations, vector addition and subtraction, and the dot product. It will also cover other
techniques like vector normals and basic reflection, all within the context of creating dynamic game
mechanics. By the end, it will lead to a greater understanding of using vectors to enhance program
functionality and interactivity.

### Tutorial Details

#### Tutorial Structure

This tutorial will follow an "as-you-go" approach, introducing concepts and code snippets
progressively. Each section will focus on a specific vector operation, providing both theoretical
background and practical implementation. Visual aids and code examples will be used throughout to
help illustrate the concepts. It will also contain the code for the learner to run themselves and
adjust the values as they please to see the effects on the program.

#### Level of Difficulty

This tutorial is geared towards beginners and intermediate learners with basic programming
knowledge. It's ideal for those looking to expand their understanding of game mechanics through
vector mathematics.

#### Functions Covered

The tutorial will cover the following main SplashKit functions:

1. [double vector_angle(const vector_2d v)](https://splashkit.io/api/physics/#vector-angle)
2. [double vector_magnitude(const vector_2d &v)](https://splashkit.io/api/physics/#vector-magnitude)
3. [vector_2d vector_add(const vector_2d &v1, const vector_2d &v2)](https://splashkit.io/api/physics/#vector-add)
4. [vector_2d vector_subtract(const vector_2d &v1, const vector_2d &v2)](https://splashkit.io/api/physics/#vector-subtract)
5. [vector_2d vector_normal(const vector_2d &v)](https://splashkit.io/api/physics/#vector-normal)
6. [double dot_product(const vector_2d &v1, const vector_2d &v2)](https://splashkit.io/api/physics/#dot-product)
7. [vector_2d vector_multiply(const vector_2d &v1, double s)](https://splashkit.io/api/physics/#vector-multiply)
8. [vector_2d vector_point_to_point(const point_2d &start, const point_2d &end_pt)](https://splashkit.io/api/physics/#vector-point-to-point)

### Conclusion

This tutorial provides a comprehensive introduction to vectors and their applications in game
development. By understanding and utilising vector operations, readers can significantly enhance the
realism and responsiveness of their games. Whether creating simple games or increasing the
interactivity of their existing games, the skills gained from this tutorial will add complexity to
their programs.

## Tutorial Template 2: Camera Controls

### Introduction

This tutorial will cover how to use the various camera functions in SplashKit to implement dynamic
camera movements in graphical applications. By following this tutorial, readers will learn to create
zoom effects, responsive camera controls, and movements enhancing the interactivity and immersion of
their games or other projects.

### Tutorial Details

#### Tutorial Structure

This tutorial will follow an "as-you-go" style. Each section will introduce a specific concept and
demonstrate its practical application with step-by-step code examples. The tutorial will start with
a basic overview of the camera functions, then guide readers through progressively more complex
examples, allowing them to apply what they’ve learned immediately. Visual aids will be used to
illustrate camera movements and effects in real-time.

#### Level of Difficulty

This tutorial is targeted at intermediate learners who have experience in programming with the
SplashKit library. It is ideal for developers who want to add dynamic camera control to their
graphical applications or games.

#### Functions Covered

The tutorial will cover the following main SplashKit functions:

- [MoveCameraBy](https://splashkit.io/api/camera/#move-camera-by-2)
- [SetCameraPosition](https://splashkit.io/api/camera/#set-camera-position)
- [CameraPosition](https://splashkit.io/api/camera/#camera-position)
- [OptionDefaults](https://splashkit.io/api/graphics/#option-defaults)
- [OptionScaleBmp](https://splashkit.io/api/graphics/#option-scale-bmp)
- [DrawBitmap](https://splashkit.io/api/graphics/#draw-bitmap-4)

### Conclusion

This tutorial will help readers understand how to manipulate the camera in their SplashKit
applications. By mastering these camera functions, developers can create more engaging and
interactive experiences, such as zoom effects and camera movements. This knowledge will be valuable
for anyone looking to improve the visual dynamics and responsiveness of their game projects.
