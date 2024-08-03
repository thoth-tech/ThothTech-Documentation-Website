---
title: Linux Installation Guide
description: Use this template to create a proposal for a new SplashKit tutorial.
sidebar:
  order: 2
  label: 2. Linux Installation
  attrs:
    class: linux
---

This is a guide on how to install Splashkit on Ubuntu, along with all the necessary dependencies and software required to run Splashkit. This guide is intended to get you set up and ready to contribute to the SplashKit team if you're a Linux user. This installation guide was done on Ubuntu 24.04 LTS.

## Installing Necessary Packages

### Update your system

To start, open up a terminal with the keys `ctrl + Alt + T`, then type in the following commands:

```bash
sudo apt update && sudo apt upgrade -y
```

![Terminal](/splashkit/linux-installation-fig2.png)

### Install curl and git

Curl and git can be installed with the following command:

```bash
sudo apt-get install curl git
```

![Terminal](/splashkit/linux-installation-fig3.png)

## Install SplashKit

### Collect the Installation scripts for SplashKit

Run the following command to download the SplashKit installation scripts:

```bash
bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
```

![Terminal](/splashkit/linux-installation-fig4.png)

Then you must **RESTART** you terminal.

### skm Command

To install SplashKit, you can use the `skm` command. Run the following command to install SplashKit:

```bash
skm
```

![Terminal](/splashkit/linux-installation-fig5.png)

### skm Linux Install

Then to install skm on SplashKit you will run the following command:

```bash
skm linux install
```

![Terminal](/splashkit/linux-installation-fig6.png)

This command may or may not require you to enter your password to install additional dependencies for SplashKit.

![Terminal](/splashkit/linux-installation-fig7.png)

### skm Global Install

To install SplashKit globally, run the following command:

```bash
skm global install
```

![Terminal](/splashkit/linux-installation-fig8.png)

## Installing Visual Studio Code

Next you will need to install visual studio code, if you have this already installed, then move to installing the necessary extensions step.

### Download Visual Studio Code

 To install Visual Studio Code, go to the [Visual Studio Code website](https://code.visualstudio.com/) and download the `.deb` file.

![Terminal](/splashkit/linux-installation-fig9.png)

![Terminal](/splashkit/linux-installation-fig10.png)

### Install Visual Studio Code

To install Visual Studio Code, move to the directory where the downloaded `.deb` file by doing:

```bash
cd ~/Downloads
```

Then run the following command:

```bash
sudo dpkg -i code_1.*.deb
```

![Terminal](/splashkit/linux-installation-fig11.png)

## Installing Necessary Extensions for Visual Studio Code

To install the necessary extensions, keep the terminal open and run the following commands:

### C# Extension

[C# for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp):

```bash
code --install-extension ms-dotnettools.csharp
```

![Terminal](/splashkit/linux-installation-fig12.png)

### C# Dev Kit

[C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit):

```bash
code --install-extension ms-dotnettools.csdevkit
```

![Terminal](/splashkit/linux-installation-fig13.png)

### Intellicode for C# Dev Kit

[Intellicode for C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscodeintellicode-csharp):

```bash
code --install-extension ms-dotnettools.vscodeintellicode-csharp
```

![Terminal](/splashkit/linux-installation-fig14.png)

### C++ Extension Pack

[C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack):

```bash
code --install-extension ms-vscode.cpptools-extension-pack
```

![Terminal](/splashkit/linux-installation-fig15.png)

### Installing .net SDK

To install the .net SDK, head to the following site and select for your operating system.

[.NET SDK](https://dotnet.microsoft.com/en-us/download?initial-os=linux)

![Terminal](/splashkit/linux-installation-fig16.png)

![Terminal](/splashkit/linux-installation-fig17.png)

Then to install the package, first head to your downloads folder again, then run the following command:

```bash
sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-8.0
```

![Terminal](/splashkit/linux-installation-fig18.png)

## RESTART Your Computer

After installing all the necessary software, restart your computer to ensure all the changes are applied. Then you're ready to use SplashKit on your Linux machine.

## Beneficial Additional Packages

Some beneficial additional packages to install for working on SplashKit are:

#### Docker

```bash
sudo apt install docker.io
sudo usermod -aG docker $USER
```

#### Python

```bash
sudo apt install python3 python3-pip
```

#### node.js and NPM

```bash
sudo apt install nodejs npm
```

## Using SplashKit

### With C++

To compile C++ SplashKit code, you will use the following command (assuming the code file is named `program.cpp`):

```bash
g++ program.cpp -l SplashKit -o test_program
```

Then to run the program, use the following command:

```bash
./test_program
```

### With C#

To run C# SplashKit code with dotnet, you will need to first run the command below:

```bash
dotnet add package SplashKit
```

This will add the SplashKit NuGet package, to link the SplashKit SDK to your project.

Then you can run the program using:

```bash
dotnet run
```

### With Python

To run SplashKit python code, you will use the following command (assuming the code file is named `program.py`):

```bash
skm python3 program.py
```
