# Creating a 2D "Metroidvania" Game - Player Character

## Recapping

Before we dive into creating an important and vital part of any game, lets recap from the previous
tutorial, to provide a foundation of what we'll need before continuing:

### Basic drawing and Graphics (From Tutorial 2, by Josh Kilinc)

**[Basic Drawing and Graphics](https://github.com/thoth-tech/SplashKit-Tutorial/pull/4/commits/2e28170207ba49827aaeaea38b40194cc3be2149?short_path=e73e4c5#diff-e73e4c5186637b3164d5f9b5dd0ffea2835f30f062d70fd696cc7e01be290811)**:

- Window setup:
  - Using the function of opening a window, with the title and x and y dimensions (Shown as "Your
    Game Title" and the dimensions 800x600px in Tutorial 2)
  - Although a game can be made entirely within a terminal, using clever characters and story
    telling to create a narrative and gameplay, we're relying on a window and visual aides to create
    a metroid/castlevania (Metroidvania) style game.
- Drawing rectangles.
  - Using the function fill_rectangle, with the parameters of colour, x position, y position, width
    and height, is our starting point for character basics. You can use the function of drawing a
    rectangle (Or other shapes, for that matter) for other aspects too such as environments,
    enemies, items, etc.
- Simple Backgrounds (Drawing and Loading bitmaps)
  - Although we can utilize the use of the fill_rectangle function to draw ourselves a background,
    it can become confusing and difficult to follow which line of code represents your background,
    environment and character. This is where we can use the function of bitmaps to differentiate our
    sections of game.
  - To use the bitmap function, first load in your bitmap file with the function 'load_bitmap'. It
    will use the parameters of a string name (To name your bitmap in future references to it), and
    the filename (This will be in your resources folder).
  - Then you can draw your bitmap with draw_bitmap, with its respected name and the x and y
    parameters.
- With the above lines of code in mind, you can affective use bitmaps and the basic functions of a
  looping window to create the beginning of your game. Whilst there is no user input, or much
  functionality besides visual elements, this can provide a foundation of your first level, and what
  you'd like to invision and embiggen your game idea.

## Before you Create your character

Creating a character can involve multiple parameters and can include multiple moving parts. This is
dependent on how many characters you want playable (Will this be a multiplayer game? Or will it be
capable of both solo, and multiplayer capabilities?), customization, and other features shown in
modern games. However, for beginner and testing purposes, we will use the recapped function of
drawing a rectangle. This tutorial, and introduction, will show you the basics of using a rectangle
as your placeholder character, as well as understanding the user's input functions within
Splashkit's C++. Further introductions will show how to replace your character's rectangle with a
sprite and animations, as well as executing new features such as power ups, items/advantages (or
disadvantages), enemies, and other features of a functioning game. An important part of game design
and concept is coming up with your basis ideas. This being your themes, what you'd like to begin
with (Characters, maps, enemies, items/powerups, etc), colour schemes and your preferred language.
Before implementing your character's rectangle, we will establish and create a new window with a new
background. ![VoidBound](https://i.ibb.co/Tvn13zN/voidbound.png) Here is an example of a background
I made, using the same sample code from Tutorial 2 of basic drawings and graphics. While traditional
metroidvania games are made in pixel art, you can still use high quality images such as the example
provided above. Assets such as grounds, backgrounds, platforms and other visual aides can be made
through your own art programs (Such as Clip Studio Paint, Krita, PAINT TOOL SAI 2,
<https://www.pixilart.com/draw>, and other programs both available online and independently), you
can also source free to use sprites and placeholder images from websites such as
<https://opengameart.org/>. Following the tutorial of a game concept, where you have mapped out your
ideas and plans for your game (remember, nothing is set in stone, you can always adjust and change
things), we can begin creating your character and using user inputs.

Depending on your style of gameplay, you may require more, or less user inputs. For a top down style
of gameplay (Such as Undertale)
![Undertale](https://coal.gamemaker.io/sites/5d75794b3c84c70006700381/content_entry5e6a48c646214800085d75a1/5f4d1565dbb160000725787c/files/1-undertale.png?1678442263)
You may find you require Up, Down, left and right inputs. This can be mapped to WASD, or your arrow
keys. This would also require the use of collision detection, such as your walls and maping specific
paths according to your map. For typical side scroller Mario like games, you would utilise left and
right arrow keys for movement, and either the Up button for jumping or a different specified key
(space bar, W, etc), or down to enter new areas (like pipes)

![Mario](https://i.insider.com/560ebbe7dd0895325c8b458e?width=700)

Keep in mind the style, and how you want your character to move - Are they moving left to right in a
side scroller, can they go up and enter new rooms? These are things to keep in mind.

For this tutorial, we will use the basic left and right side scrolling pattern for our user inputs,
and using a rectangle to represent our character. Please keep in mind that when drawing your
character to make them still visible.

## Creating Your Character

You have created your window, you have a bitmap loaded, and you have drawn yourself a rectangle from
the previous tutorial.

🎉 Congratulations. 🎉

![Celebration](https://media.gettyimages.com/id/542095594/photo/birthday-party-in-the-office.jpg?s=612x612&w=gi&k=20&c=UhvAsMS7-SHC2XzGdM3qv84JSMe8wviEVbGrpjM5WGI=)

You're on your way to making your first game. Although this is just the beginning, take a chance to
appreciate the hard work you've put in into learning a new coding language and embiggen your
creativity. Celebrate every little victory, even this one.

Let's make some minor adjustments to our coding. A good general rule of thumb for characters and
scaling is not to search for a specific ratio for your character's size. This is entirely dependent
on what type of game your making. Size, feelings and environments all play a role in how your player
is going to feel of each level. If you're making a horror game, you may choose to have your
character 'big' or close to the screen, to envision a claustrophobic feeling. If you want an open
world, exploration, Legend of Zelda style, you would choose your character to be smaller but still
visible, to emphasise the vastness and wide world you're exploring. For a simple side scroller, you
may find (In a 800x600 window) that a comfortable size is 32W by 64H.
![Voidbound](https://i.ibb.co/M1cVqHL/image-2023-09-10-040439069.png) This can ensure you're able to
see your character, without it taking a large portion of the screen. You can always change this to a
size you're more comfortable with, depending on the environment. We need to keep in mind that we
have no collision, walls, or anything from stopping us from leaving the window and running off.

We will begin by using the basis code snippet provided in Tutorial 2.

      #include "splashkit.h"

      int main()
      {
       // Declare variables for window dimensions
       int width = 800;
       int height = 600;

       // Open a game window with specified title and dimensions
       open_window("Voidbound", width, height);

       // Load the background image from the specified path
      bitmap background = load_bitmap("sky", "Resources/images/sky.png");
       // Clear the screen with the loaded background image
       clear_screen();
       draw_bitmap(background, 0, 0);

       // Declare variables for rectangle dimensions
       double w = 400;
       double h = 200;

       // Calculate the position to center the rectangle
      double x = width / 2 - w / 2;
      double y = height / 2 - h / 2;

       // Draw a filled red rectangle using calculated dimensions and position
      fill_rectangle(COLOR_RED, x, y, w, h);

      // Refresh the screen to display the drawn rectangle
      refresh_screen();

       // Pause execution for 2.5 seconds to observe the result
       delay(2500);

      // Close the game window
       close_all_windows();

      // Indicate successful program completion and return 0
      return 0;
    }

We will make some minor adjustments to this code. We will include these following lines:

'double move_speed = 0.5;'

      while (!window_close_requested("Voidbound"))
         {
            process_events();
                // Check for arrow key inputs
                if (key_down(S_KEY))
                    y += move_speed;
               else if (key_down(A_KEY))
                    x -= move_speed;
               else if (key_down(D_KEY))
                   x += move_speed;
                else if (key_down(W_KEY))
                  y-= move_speed;
         clear_screen();
         draw_bitmap(background, 0, 0);
         fill_rectangle(COLOR_RED, x, y, w, h);
         refresh_screen();
       }

Let's go through line by line what's happening.

### **Double Move_speed 0.5**

This line of code is somewhat self explained; **_Double_** is used to express decimal places. We're
using **double** so we can go as slow as 0.1, or faster, such as 5.0.

### **move_speed** is the name of our variable

Just like our other functions like clear*screen, draw_bitmap, we use a name derived of underscores
(*) to give it a name. This is much easier to call upon rather than re-writing each individual
function and its intended purpose.

### **while (!window_close_requested("Voidbound"))** Is a loop function

To put this simply, we're saying "While the window is **not** requested to be closed, titled
'voidbound', do this:" The use of the **!** exclamation mark is coding language of saying not. This
allows us to use the loop function of while, where we can input all desired lines of code for the
window being open.

### **Process Events()**

**_Process_events()_** is used in SplashKit to handle numerous events that occur in a graphical
programme, including as window events, keyboard input, mouse input, and more. For this tutorial, it
is the use of keyboard events.

### **If else if (key inputs)** is the actual user input of our keyboard

"If this occurs, produce this output, but if this occurs, do this!" Our key inputs are registered as
WASD. This is traditional in a lot of games, but can be adjusted for personal preference. We're
saying if the W button, for example, is held, then the rectangle (Our character) will move up along
the y axis. This is coded as y-. Decreasing y means moving the rectangle upwards because the
vertical coordinate system typically has its origin (0,0) at the top-left corner of the screen, with
positive values increasing downward. By subtracting the values of y by our move speed, we're moving
the reactangle up, essentially going up along our y axis. If the S button is held, then the
rectangle will move down along the y axis. Just as we have put in above, instead of y-, we're using
y+, to demonstrate that we're going **down** the y axis.

This same principle is applied to our A and D keys for left and right, respectively. This means we
will have x- and x+.

You'll also notice we're reusing the move speed function in each instance of key_down. The move
speed tells us how fast we move across, and because we're using a double function, you can be as
specific as you'd like for your speed (examples: 0.25, 0.01, 0.37, etc)

## Putting it all together

Now that we've established our new lines of code, their importance and functionality, and why we're
using them, let's apply our new knowledge to the test.

Here is the complete code to demonstrate the combined code from tutorial 2, and your newly acquired
knowledge in this tutorial:

      #include "splashkit.h"
      int main()
    {
       // Declare variables for window dimensions
        int width = 800;
       int height = 600;

      // Open a game window with specified title and dimensions
       open_window("Voidbound", width, height);

       // Load the background image from the specified path
         bitmap background = load_bitmap("sky", "images/sky.png");
       // Clear the screen with the loaded background image
         clear_screen();
          draw_bitmap(background, 0, 0);

       // Declare variables for rectangle dimensions
       double w = 32;
       double h = 64;

      // Calculate the position to center the rectangle
      double x = width / 2 - w / 2;
      double y = height / 2 - h / 2;

      double move_speed = 0.01; // Adjust this as needed

       // Draw a filled red rectangle using calculated dimensions and position



      while (!window_close_requested("Voidbound"))
         {
             process_events();

            // Check for arrow key inputs
            if (key_down(S_KEY))
                y += move_speed;
             else if (key_down(A_KEY))
                x -= move_speed;
            else if (key_down(D_KEY))
                x += move_speed;
            else if (key_down(W_KEY))
                y-= move_speed;

            clear_screen();
            draw_bitmap(background, 0, 0);
            fill_rectangle(COLOR_RED, x, y, w, h);
            refresh_screen();
       }
       // Refresh the screen to display the drawn rectangle
      refresh_screen();

      // Indicate successful program completion and return 0
      return 0;
      }

Once you've used this code, remember to compile your finished code, and run it! You should now be
able to have a moving rectangle across your screen.

## Celebrate

🎉🎉🎉 Congratulations 🎉🎉🎉 You're on your way to making a functioning, fun game that can be
expanded upon and one day shared with the world.
![Yay](https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1107/wavebreakmediamicro110730111/10095380-fortunate-business-team-punching-the-air-in-celebration.jpg)
