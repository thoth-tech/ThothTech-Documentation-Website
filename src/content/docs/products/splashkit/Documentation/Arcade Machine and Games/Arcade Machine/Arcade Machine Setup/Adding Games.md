---
title: Adding Games to Arcade Machine
---

> many of these steps are eser to perform via the GUI all commands below are for CLI but can start
> the GUI by typing `startx` in the terminal

## C++ Programs

> If you have a complied arm program skip to step 7

1. Open Terminal
2. Change to the Games Source Folder in the home directory

   ```shell
   cd GameSource
   ```

3. Create a new folder for your Game and change into the folder (Optional)

   ```shell
   mkdir mygame
   cd mygame
   ```

4. Git Clone your code into the directory

   ```shell
   git clone https://github.com/Thoth-Tech/MyGame.git
   ```

5. Compile your game

   ```shell
   skm g++ program.cpp -o MyGame
   ```

6. Test Your game is running correctly (optional)

   ```shell
   ./MyGame
   ```

7. Copy your Complied game to the Games directory\

   ```shell
   cp -r ~/GamesSource/MyGame ~/Games
   ```

8. Create a Launch Script for your game

   ```shell
   nano ~Games/LaunchScript/MyGame.sh
   ```

   - Add the following

     ```shell
     #!/bin/bash
     ~/Games/MyGame/MyGame
     ```

   - > Note: Some C++ programs may not run correctly when executed from a remote directory in which
     > case make the script chagne to the program directory first

     ```shell
      #!/bin/bash
     cd ~/Games/MyGame/
     ./MyGame
     ```

   - save by pressing `ctrl-o` and exit by pressing `ctrl-x`

9. Make the script executable

```shell
sudo chmod +x MyGame.sh
```

10\. Add the game to the emulation station game list.

```shell
nano ~/.emulationstation/gamelist/pc/gamelist.xml
```

11\. Create new entire for your game.

```shell
<game>
    <path>./MyGame.sh</path>
    <name>My Game</name>
    <image>~/Games/MyGame/TitleImage.png</image>
</game>
```

## C# Programs

1. Open Terminal
2. Change to the Games Source Folder in the home directory

```shell
cd GameSource
```

3\. Create a new folder for your Game and change into the folder (Optional)

```shell
mkdir mygame
cd mygame
```

4\. Git Clone your code into the directory

```shell
git clone https://github.com/Thoth-Tech/MyGame.git
```

5\. Compile your game (--sc complies it as standard alone)

- you may need to change into a sub directory first

> Compiling as a standalone program is presently required for C# games as dotnet and splashkit paths
> are not loaded on CLI boot, paths are presently loaded by bashrc which only run on interactive
> login shells. i.e. when you login to the desktop.

```shell
skm dotnet publish --sc
```

6\. Copy libsplashkit.dll and libsplashkit.so to your published project directory

```shell
cp ~/.splaskkit/lib/linux/libsplashkit.dll ~/GamesSource/MyGame/bin/Debug/netcoreapp7.0/publish
cp ~/.splaskkit/lib/linux/libsplashkit.so ~/GamesSource/MyGame/bin/Debug/netcoreapp7.0/publish
```

7\. Test Your game is running correctly (optional)

- change into the publish directory
- If you are using a Resources folder copy that into the Publish directory
  `cp -r ~/GamesSource/MyGame/Resources ~/GamesSource/MyGame/bin/Debug/netcoreapp7.0/publish`

```shell
./MyGame
```

8\. Copy your Complied game to the Games directory

```shell
cp -r ~/GamesSource/MyGame/bin/Debug/netcoreapp7.0/publish/ ~/Games/MyGame
```

9\. Create a Launch Script for your game

```shell
nano ~Games/LaunchScript/MyGame.sh
```

- Add the following

```shell
#!/bin/bash
~/Games/MyGame/MyGame
```

- save by pressing `ctrl-o` and exit by pressing `ctrl-x`

10\. Make the script executable

```shell
sudo chmod +x MyGame.sh
```

11\. Add the game to the emulation station game list.

```shell
nano ~/.emulationstation/gamelist/pc/gamelist.xml
```

12\. Create new entire for your game.

```shell
<game>
    <path>./MyGame.sh</path>
    <name>My Game</name>
    <image>~/Games/MyGame/TitleImage.png</image>
</game>
```
