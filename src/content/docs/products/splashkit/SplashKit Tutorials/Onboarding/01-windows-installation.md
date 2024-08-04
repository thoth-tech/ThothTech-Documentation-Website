---
title: Windows Installation Guide
description: Use this template to create a proposal for a new SplashKit tutorial.
sidebar:
  order: 1
  label: 1. Windows Installation
  attrs:
    class: windows
---

This is a guide on how to install Splashkit on Windows, along with Visual Studio Code and the necessary extensions required to run Splashkit. This guide is intended to get you set up and ready to contribute to the SplashKit team if you're a Windows user. This installation guide was done on Windows 10.

## Install msys2

### Download msys2

To start, head to the official [msys2 website](https://www.msys2.org/) and download the installer.

![msys2](/splashkit/windows-installation-fig1.png)

### Install msys2

When the installer is downloaded, run it, you might get a pop up like the following:

![msys2](/splashkit/windows-installation-fig2.png)

If you do, you will need to click `more info` then click run. 

The following shows the steps of each part of the install for msys2:


![msys2](/splashkit/windows-installation-fig4.png)

![msys2](/splashkit/windows-installation-fig5.png)

![msys2](/splashkit/windows-installation-fig6.png)

![msys2](/splashkit/windows-installation-fig7.png)

## Install Command Line tools

Copy and paste the following into your new **MINGW64** terminal:

```bash
pacman -S git mingw-w64-x86_64-clang mingw-w64-x86_64-gcc mingw-w64-x86_64-gdb --noconfirm --disable-download-timeout
```

You will need to right click in the terminal and select paste as the terminal does not support `ctrl + v`.

![msys2](/splashkit/windows-installation-fig8.png)

![msys2](/splashkit/windows-installation-fig9.png)

## Installing SplashKit

### Collect the Installation scripts for SplashKit

Open your **MSYS2** terminal and run the following command to download the SplashKit installation scripts:

```bash
bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
```

![msys2](/splashkit/windows-installation-fig10.png)

### Execute skm

**Restart** your terminal, then execute the following:

```bash
skm
```

Then the command:

```bash
skm global install
```

![msys2](/splashkit/windows-installation-fig11.png)

## Install Visual Studio Code

### Download Visual Studio Code

To install Visual Studio Code, go to the [Visual Studio Code website](https://code.visualstudio.com/) and download the `.exe` file.

![msys2](/splashkit/windows-installation-fig12.png)

### Installing Necessary Extensions

To install the necessary extensions, keep the terminal open and run the following commands:

#### C# Extension

[C# for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp):

```bash
code --install-extension ms-dotnettools.csharp
```

![Terminal](/splashkit/linux-installation-fig12.png)

#### C# Dev Kit

[C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit):

```bash
code --install-extension ms-dotnettools.csdevkit
```

![Terminal](/splashkit/linux-installation-fig13.png)

#### Intellicode for C# Dev Kit

[Intellicode for C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscodeintellicode-csharp):

```bash
code --install-extension ms-dotnettools.vscodeintellicode-csharp
```

![Terminal](/splashkit/linux-installation-fig14.png)

#### C++ Extension Pack

[C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack):

```bash
code --install-extension ms-vscode.cpptools-extension-pack
```

## Installing Necessary Extensions for Visual Studio Code

To install the necessary extensions, keep the terminal open and run the following commands:

### C# Extension

[C# for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp):

```bash
code --install-extension ms-dotnettools.csharp
```

![Terminal](/splashkit/windows-installation-fig15.png)

### C# Dev Kit

[C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit):

```bash
code --install-extension ms-dotnettools.csdevkit
```

![Terminal](/splashkit/windows-installation-fig16.png)

### Intellicode for C# Dev Kit

[Intellicode for C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscodeintellicode-csharp):

```bash
code --install-extension ms-dotnettools.vscodeintellicode-csharp
```

![Terminal](/splashkit/windows-installation-fig17.png)

### C++ Extension Pack

[C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack):

```bash
code --install-extension ms-vscode.cpptools-extension-pack
```

![Terminal](/splashkit/windows-installation-fig18.png)

### Installing .net SDK

To install the .net SDK, head to the following site and select for your operating system.

[.NET SDK](https://dotnet.microsoft.com/en-us/download)

Once installed, **RESTART** your computer. You are now ready to start using SplashKit on Windows.

## Other Beneficial Software

### Docker

To install Docker, head to the following site and select for your operating system.

[Docker](https://docs.docker.com/desktop/install/windows-install/)

### Python

To install Python, head to the following site and select for your operating system.

[Python](https://www.python.org/downloads/)
