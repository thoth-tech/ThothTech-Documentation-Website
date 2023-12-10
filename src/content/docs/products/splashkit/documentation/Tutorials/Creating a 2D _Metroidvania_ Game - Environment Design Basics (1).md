
# Environment Design Basics
## Basics of an environment
Metroidvania games typically feature a large, interconnected world where various areas are linked together. Players should be able to revisit previous locations with newfound abilities to access previously unreachable areas. This interconnectedness encourages exploration and backtracking. As such, an environment should include obstacles or barriers that require specific abilities or items to overcome. These act as progression gates, motivating players to acquire new skills or items to advance. Examples include locked doors, high ledges, or hazardous terrain. Environments should vary in terms of aesthetics and gameplay challenges. Different biomes or areas can have unique visual themes, enemies, and obstacles, providing a sense of variety and discovery as players explore the world. 
An example of this can be seen within Legend of Zelda.

![LoZ](https://cdn.wikimg.net/en/strategywiki/images/thumb/0/03/TLOZMM_Termina_Field_Map.jpg/600px-TLOZMM_Termina_Field_Map.jpg)

As you can see, we have 4 different areas that contain different biomes. We have a Snowhead Region, of ice, winter and cold. Ikana region of sand, caves and deserts. Woodfall Region, of grassy forests and lakebeds. And Great Bay Region, for the ocean and water theme of biomes. Each area, biome and landmark holds significance in providing the user various areas that are linked together, can be revisted, and provide variety in terms of skills and problem solving. And as such, each area conveys their own feelings; they contain their own soundtracks, their own atmosphere and their own significant role.

Environment, and in conjunction, level design is designed to be both open and explorative, and within this tutorial, we will discuss creating an environment with bitmaps and sprites to create an open environment.
## Colour schemes and what makes a good environment
Before we design and work on applying environments to our Metroidvania style game, let's look at some examples to inspire us.

![Undertale Ending](https://i.pinimg.com/564x/62/a1/2e/62a12edf977bd901f3a92024d86d5013.jpg)
![Example 2](https://i.pinimg.com/564x/f9/0c/46/f90c4678fcdba1e53e1596a90582569e.jpg)
![Example 3](https://i.pinimg.com/564x/38/f4/93/38f49380c10015dcc9f1007ace85e870.jpg)
![example 4](https://i.pinimg.com/564x/5e/2d/e1/5e2de19b61daba1cd3dece99de4a229f.jpg)
![Example 5](https://i.pinimg.com/564x/6b/b2/af/6bb2afcbce56a0da9ae29ad078710d3f.jpg)

These examples were specifically chosen to not only show different styles of design, but how different environments and scales depict different emotions and feelings of environments.
Games like Undertale use schemes and colours that depict depth, sunlight or moonlight, and in the first example, the empitness of the Judgement hall. For Undertale specifically, this period of silence and being (seemingly) alone allows the player to reflect on their actions throughout the game (Depending on the path they went down for the multiple endings) and can lead to a number of outcomes. 

Examples 2 through to 5 all follow a specific rule: Less is more. And thus is the beauty of metroidvania games - The limited colour schemes and details allows the player to fit in the extra details. In Example 2, the sand by the Egyptian pillars shown to be wavey, smooth and have various 'hills' - the shadows, shades and darker colours and gradients show that it is soft sand. But we don't see the fine details of sand. We know by the small cell shading that it is sand, by the way it looks, trails from the sides and the way it gives the environment a dry feeling of a desert. Within that same example, we can see the individual cracked bricks, the rings within wood planks, and even the background gradually fading into simple shapes and colours - It creats an illusion of depth and distance, as well adding small details to imply textures. The contrasting colours, and subtle darker parts to different areas can add the element of three dimensions in a 2D game.

As you can see throughout the examples, a lot of assets don't use a large variety of colours. In fact, they're quite limited to 3 or 4 colours per asset. Looking at Example 3, specifically in the sky, we can see 4 colours in total that depict a sunsetting, or firey sky of dark clouds. The castle uses around the same number of colours - reds, marons, greys and orange. In Example 2 and 3, you can see black is used quite sparingly - Where as Example 1 (Undertale), uses a lot of black. The use of black in sprites, and art in general, is discussed as to be used sparingly because it is a powerful colour; It can draw the eyes **away** from the main focal point if used poorly. The use of the colour black in Undertale shows characters and objects as more visually distinct, and the game delves into dark and emotional themes; Just like in the judgement hall, through a genocide run, you could feel the sins crawling down your back.
However, in Example 4, you can see black is used to create a night-time environment. It shows shadows, and darkness around a firey middle. It draws your attention to what's in front of you, and leaves the darkness to your imagination. 
This use of darkness can create environments where the focal point is the player and can convey strong emotions of fear, unknown and darkess. While on the contrast, bright colours and light areas can portray safety, calm, and adventure.
## Going from rectangle to sprites.
Let's talk about creating our environment in rectangles first.
We've used rectangles in the past to create a character, to move left to right and up and down. However, we've used this to show how we can move our character in a borderless, groundless void. Let us instead create a new ground, and some platforms, to build a start of a level. Even if our game is utilising a zero gravity world, we still need boundaries and walls.

A core feature of any metroidvania game, or even any game is one of the most difficult; level design.
And while this tutorial won't discuss how to design your levels and progressions, they do work closely together. 
You do need to keep in mind that the entire idea around Metroidvania is that in order to progress forward, you need to backtrack. There are different ways and different styles to interpret your game, and there will be different exceptions to be made with your level and environment 

<p style="text-align: center; font-size:50px;"><strong>LESS IS MORE</p>

By creating an environment or design that is heavily detailed can make your environment feel busy, cluttered and takes away from the main focal point - the main character.
Regardless of the style of art you decide to venture down (which is typically centred around pixel art, but the design of your pixel art can vary), <strong> less detail can create more atmosphere </strong> and thus can be more appealing to the eye.
![Simple Pixel](https://qph.cf2.quoracdn.net/main-qimg-09c3f49439fcb263b57bc9a4ce907bd8-lq)
![Detailed pixel](https://qph.cf2.quoracdn.net/main-qimg-3b04ff295dcb2a379bbe2237ee526a87-lq)
![Hollow Knight](https://qph.cf2.quoracdn.net/main-qimg-621803903906ad642ba1c5a4d545b92f-lq)

I've chosen these 3 different variants of pixel art to demonstrate your environments and atmospheres.
The reason these 3 examples are chosen is to show you how less can be more. Example 1 is 'typical' pixel art; you can make out each individual 'pixel' and its rough and blocky. But the detail is limited - there is not a lot of shading or highlighting, and simply uses basic shapes. Similar to your traditional Super Mario Bros. Example 2 is more "detailed" but is still pixel art - it's smoother, uses highlights and shading, but is limited to its schemes and colours. and Example 3 is the most detailed pixel art - because it doesn't look like pixel art. Its smooth, and curved and rounded. And doesn't depict traditional pixel games.
But, looking over all 3 examples, we can see that less is more. You can achieve more detail, and even assume textures and feelings by limited how much is shown, and letting the mind fill in the blanks. Even in art styles as "simple" as example 1 can still provide a level of detail - We can see blood having dripped on the walls, the lit fuses and the "3d" design of the floor. 

With all this in mind, let's actually apply our coding language to the test.
Let's start with a very simple, and basic ground, just as we did with our character.

	fill_rectangle(COLOUR_GREEN, 0, height - 100, width, 200);
This can provide the very beginning of our ground. It is on the bottom, it creates a "grass" block, and can be just a simple running ground.

But we're wanting to create something great and amazing.
Let's upgrade this with bitmaps.
One place to use resources from is https://craftpix.net, where you can buy or use royalty free sprites and images to create an immersive and captivating environment. You can use this to find more fitting backgrounds and even enemies for future tutorials.
Just as we did with our background function, which is:

      bitmap [title your bitmap] = load_bitmap([name of bitmap], [location of bitmap, including extension of the file (png, jpg, etc)]);

We can use the same function for our tiles. 
![Example](https://i.ibb.co/vHNvJzD/image-2023-09-17-040617935.png)

As you can see in my example, I have made a few changes. I have added a new pixel art background, and added in 5 new sprites of grass. 

The way we can use this line of grass sprites can be done in multiple ways.
### The first way:
The first way is very tedious, and long. That is, manually writing each individual line of code and manually increasing your X axis values by 1 less than the width of your sprite. So, for example, using the sprite I've chosen, I would go across by 31 values, as opposed to 32.
This tedious process can result in this:

      draw_bitmap(ground, 0, 500);
      draw_bitmap(ground, 31, 500);
      draw_bitmap(ground, 63, 500);
      draw_bitmap(ground, 95, 500);
      draw_bitmap(ground, 127, 500);

Do you see an issue with this? For many sprites, of different placements, this can become very long, and tedious, and confusing. We could do this for a simple straight linear path, but that is both boring and very tiresome. 

### The second way:
A faster, but less favourable and less progressive approach is to manually apply each sprite within an art program along the path you'd like and create a whole new bitmap of this new image, and placing it within your lines of code to produce only 1 line of code for multiple sprites.
This can be better, but is again less favourable, as we're not creating sprites/barriers for our character to run along, and instead have a bitmap image similar to our background that is not dynamic, or adjustable with collision detecting (for future tutorials.)

### The third way:
The third way is a bit of a jump from the previous examples, but allows you to load multiple sprites within a looping function and run across your x axis without the need of the first way; multiple of the same lines of code with minor adjustments.

Let's start with the first chunk of code, and explain what we've done.
      #include "splashkit.h"

      int main()
      {
       // Declare variables for window dimensions
      int width = 800;
      int height = 600;

      // Open a game window with specified title and dimensions
      open_window("Voidbound", width, height);

      // Load the background image from the specified path
      bitmap background = load_bitmap("sky", "images/6.png");
      bitmap ground = load_bitmap("Ground", "images/Ground.png");

      // Clear the screen with the loaded background image
      clear_screen();
      draw_bitmap(background, 0, 0);
      
Just as tutorial 1, and tutorial 2, we have declared our window dimensions of 800x600, with the title of our game, and we're loading our sprites in - Our background, and our ground.
We clear the screen and draw in our first bitmap, the sky. (Remember, we won't see any of this until our screen has been refreshed.)

Now, let's dig into our **new** code.

      int x_spacing = 31; // Adjust spacing as needed
      
      // Set the number of bitmaps in the row
      int num_bitmaps = 500;
    
      // Calculate the starting x-coordinate
      int x = 0;

      // Use a loop to draw the duplicate bitmaps
      for (int i = 0; i < num_bitmaps; ++i)
      {
        draw_bitmap(ground, x, 500);
        x += x_spacing; // Increase the x-coordinate for the next bitmap
      }
      
      close_window("Voidbound");
      free_bitmap(background);
      free_bitmap(ground);

### What does this mean? Following our first line:

      int x_spacing = 31
is saying that the **Integer of our function named x_spacing will move across by 31 pixels, along the x axis**
Our sprites are 32x32, but by going across by 32 pixels, we're leaving a tiny by noticable gap. We eliminate this by pushing it back by 1 pixel. 

### Following our second line:

      int num_bitmaps = 500
   
This function is saying that the actual number of bitmaps that will be drawn, will be 500. Of course, we can change this to  reflect how many sprite placements we need to reflect platforms and mapping.

### Following our third line:

      int x = 0;

X is our current X co-ordinate along the x axis. Just as our second line, we can adjust this to create a gap from the side, or appear as a floating island. For this example, I've decided to stick with x = 0, so we can create a straight path of grass.

### Following our fourth line, the loop:

    for (int i = 0; i < num_bitmaps; ++i)
      {
          draw_bitmap(ground, x, 500);
         x += x_spacing; // Increase the x-coordinate for the next bitmap
      }
We can see that we begin our loop with the 'for' function.
**int i = 0** declares and initializes the loop control variable i to 0, meaning it keeps track of how many times the loop has ran.
We also have the condition **i < num_bitmaps;**, which specifies that the condition must be true for the loop to continue. Therefore, the loop will continue as long as i is less than the value stored in the num_bitmaps variable, which is 500 in our example.
**++i** is a shorthand way of incrementing that i by 1 in each increment; this can be seen as i = i + 1.
Within our curly brackets, we have:

      draw_bitmap(ground, x, 500)
      x += x_spacxing; 

Of course, we understand that draw_bitmap will draw out whatever we have specified within its parameters (in this case, ground), but we have 2 new parameters within it.
**x** is the x co-ordinate where the bitmap will be first drawn. We've already marked this at the placement of 0, and will increase with every iteration of the loop. **500** is where our bitmap will begin along the Y axis. This will not change with each iteration of the loop.

      x += x_spacing;

this line specifically increases along the x axis of the coordinate following the increase of x_spacing. This means, after each drawing of our bitmap, another one will be place along the horizon, following the increase of horizontal axis value.

We will reuse our fourth line of code within our while loop function too. A loop function, within a loop function.

# Following our fifth line:
Our fifth lines of code is very simple.
When we close the window, we free up our bitmaps, background and ground, to allow a free up of memory. While this isn't very important when we have small numbers of sprites being used, in larger quantities, we would want to free up any unnecessary memory being used for sprites, or functions not being utilised. 

# Coding example
Our final coding example will end up looking like this:

      #include "splashkit.h"

      int main()
      {
         // Declare variables for window dimensions
         int width = 800;
         int height = 600;

         // Open a game window with specified title and dimensions
          open_window("Voidbound", width, height);

         // Load the background image from the specified path
         bitmap background = load_bitmap("sky", "images/6.png");
         bitmap ground = load_bitmap("Ground", "images/Ground.png");

         // Clear the screen with the loaded background image
         clear_screen();
         draw_bitmap(background, 0, 0);
    
         int x_spacing = 31; // Adjust spacing as needed


         // Set the number of bitmaps in the row
         int num_bitmaps = 500;
    
          // Calculate the starting x-coordinate
         int x = 0;

         // Use a loop to draw the duplicate bitmaps
         for (int i = 0; i < num_bitmaps; ++i)
         {
              draw_bitmap(ground, x, 500);
             x += x_spacing; // Increase the x-coordinate for the next bitmap
         }

         // Declare variables for rectangle dimensions
         double w = 32;
         double h = 64;

         // Calculate the position to center the rectangle
         double player_x = width / 2 - w / 2;
         double player_y = height / 2 - h / 2;

         double move_speed = 0.05; // Adjust this as needed

         while (!window_close_requested("Voidbound"))
         {
              process_events();

            // Check for arrow key inputs
            if (key_down(S_KEY))
               player_y += move_speed;
            else if (key_down(A_KEY))
               player_x -= move_speed;
            else if (key_down(D_KEY))
               player_x += move_speed;
            else if (key_down(W_KEY))
               player_y -= move_speed;

            clear_screen();
            draw_bitmap(background, 0, 0);
        
            // Use a loop to draw the duplicate bitmaps
            x = 0; // Reset the x-coordinate for the ground bitmaps
            for (int i = 0; i < num_bitmaps; ++i)
            {
               draw_bitmap(ground, x, 500);
               x += x_spacing; // Increase the x-coordinate for the next bitmap
            }

            // Draw the player (rectangle)
            fill_rectangle(COLOR_RED, player_x, player_y, w, h);
            refresh_screen();
         }

      // Close the window and free resources when done
      close_window("Voidbound");
      free_bitmap(background);
      free_bitmap(ground);

      return 0;
      }
      

With this coding example, you'll have created a ground you can walk upon with your rectangle character, and have created a loop that allows repetition of the same bitmap image along an x axis increasing by a specified amount of pixels.

# Celebrate
![Celebrate](https://static9.depositphotos.com/1594308/1166/i/450/depositphotos_11666010-stock-photo-festive-atmosphere.jpg)

Congratulations. You have used a looping function to create a repititon of bitmap to create your ground. With the knowledge you have obtained, you can create an environment that specifically allows sprites to sit in specific areas, and add layers to your environment to create an adaptive and thrilling atmosphere determined by your goals.
In the inspiring words of Triple H:
![Triple H](https://www.azquotes.com/picture-quotes/quote-this-game-is-not-over-it-is-just-beginning-triple-h-63-29-46.jpg)




   
