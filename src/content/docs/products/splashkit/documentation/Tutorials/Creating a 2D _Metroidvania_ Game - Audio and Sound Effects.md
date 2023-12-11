# The importance of audio and sound effects in a Metroidvania game

The foundational elements of the gaming experience that are frequently disregarded are sound and audio, which quietly work their magic in the background. They are the designers of immersive gameplay due to their exceptional capacity to immerse users in the heart of the virtual worlds they explore. Imagine for a moment what it might feel like to enter a gaming universe, whether it be a bustling metropolitan, an expansive alien environment, or a frightening mansion. While the graphics offer a glimpse into these realms, the audio components give them their true life.

Think about the quiet serenity of a forest, where the faint trickling of a nearby stream, the delicate rustle of leaves in the wind, and the distant call of wildlife engulf you. These audio cues serve as more than just background noise; they weave the player's presence into the very fabric of the virtual world. In this way, sound and audio profoundly engage the senses, creating a bond that extends beyond the confines of the screen between the player and the game environment.

Additionally, in video games, sound and audio are the masters of emotion. A triumphant moment can become a heroic crescendo with the help of a soaring orchestral composition, leaving the players feeling exhilarated. On the other hand, a depressing music might make people feel sorry and sympathetic for in-game characters. The effect of plot twists and character growth are amplified by these emotional soundscapes, which operate as a link between the player and the story.

But sound doesn't just add emotional dimension to games; it also helps make the gameplay more enjoyable. Players receive critical feedback from the sound of every stride, weapon firing, and ambient interaction. Players can often make split-second judgements and react precisely in fast-paced gaming situations thanks to this aural information, which frequently makes the difference between success and failure. The distinct sounds of foes hiding in the shadows or the recognisable click of an empty magazine are more than just background noise; they are important gameplay indicators that can make the difference between success and failure.

The invisible storytellers and mood-creators of the gaming world are, in essence, sound and audio. They set the tone and pace, control the suspense of a scene, and lead players through the developing story. Every aural component is painstakingly designed to improve the player's experience, from the deafening roar of a battlefield to the subdued whispers of a stealth mission.

The audio portion of any game is just as important as the visual elements.
While your visual aides can provide a feel for your environment, and adequate use of negative and positive space (Light, and darkness), a game simply doesn't feel complete without the help of audio.

Whether its the tapping sounds of the player running on grass, or the screams down a hallway where the player can't see, music and sound affects play a **very** pivotal role in a metroidvania game.

Let's look at some examples:

Hollow Knight's Greenpath.
![Hollow Knight](https://oyster.ignimgs.com/mediawiki/apis.ign.com/hollow-knight-wiki/b/bc/Greenpath_2.png?width=1280)
This glowy, turquoise cavern environment is calm and relaxing. When you look at it, there is no sense of danger or unknown harm. There is only peace. And the soundtrack for this reflects that atmosphere.
<https://www.youtube.com/watch?v=fWquuWkHVP4>

Audio and sound effects can create a visually appealing environment into a a world to escape in - this is what we hope to achieve within this tutorial.

## What do we need?

Let's create a table of what we need for our metroidvania game thus far:
| Concepts | Yes or No|
|----------|----------|
|Theme of the game?|
|Story?|
|Setting?|
|Gameplay goal?|
|Environment of level/s|
|sprites?|

Audio and sound effects go hand in hand with our environment and characters - Without audio, our environments can be bland and boring, but without the visual aides of our environment, we can't imagine the scenario being played out that matches the music as we intended.

There are different options and ways to create your own music and sound effects for your game.

### Option 1: royalty free music websites; Ready made audio

The easiest, and best way for placeholder music, is through sites such as <https://www.chosic.com/free-music/epic/> and <https://pixabay.com/music/search/genre/video%20games/>, <https://freesound.org/browse/>, <https://mixkit.co/free-sound-effects/game/>. These sites can provide you with free download music to be implemented within your game, and breathe a breath of fresh air into currently silent game.

For a number of reasons, using pre-made sounds when creating video games can be a useful and effective option. First off, it frees up time and resources, allowing you, the game developer, to concentrate on other important game-related elements. A large selection of high-quality, expertly designed sound effects and music are frequently available in ready-made sound libraries, which can improve your game's overall audio experience. They can also be a great resource for small teams or independent developers with tight budgets who might not have the money to engage specialist sound designers or composers. While bespoke sounds have their place, pre-made sounds can offer a strong foundation and make it simpler and more affordable for developers to create a professional and immersive audio environment in their games.

### Option 2: Creating your own audio and sound effects

Creating your own audio and sound effects can be done with a number of applications, and add a personal touch to your metroidvania game.
Multiple programs can be used to create audio and sound effects, such as:

- VOCALOID <https://www.vocaloid.com/en/> (Currently on Vocaloid6, at $225 USD with pre-installed voicebanks)
  - Can purchase multiple voicebanks (And used as character voices)
  - Voices are used with synthesizer, to sound robotic or futuristic
  - Examples: <https://www.youtube.com/watch?v=S_EWAw7Eg7w> (Otomachi Una in MELT)
  - <https://youtu.be/WiUjG9fF3zw?list=RDQM_cBiVu5mjX4> (Hatsune Miku in VIVA Happy)
  - <https://www.youtube.com/watch?v=ScSW9C3DF18&pp=ygUVbHVrYSBsdWthIG5pZ2h0IGZldmVy> (Luka Megurine in Luka Luka Night Fever)
  - <https://www.youtube.com/watch?v=udg1bIBUzJM&pp=ygUNTHVrYSBhbmQgTWlrdQ%3D%3D> (Miku and Luka in The Ends Dancehall)
- LMMS
  - An open sourced software that allows to produce music with a library of premade songs, effects and sound affects.
  - Similar layout to that of Vocaloid
  - Sequence, compose, mix and automate songs in one simple interface
  - Note playback via MIDI or typing keyboard
- FL Studio
  - Highly customizable
  - Tailored towards quickly making electronic loop-based music
  - Lifetime of free upgrades - Making it affordable for musicians
- Garage Band
  - Apple's music making application is available on Ipad and IOS
  - Easy to lug around (through your ipad or tablet)
  - Many downloadable sound affects and instruments

There is no right or wrong way to choose your audio and sound effects. The choice between using ready-made audio and creating your own audio for game development hinges on various factors. Ready-made audio offers convenience, high quality, and cost-efficiency, making it an excellent choice for those with limited budgets or tight schedules. However, it may lack the uniqueness and tailored experience of custom audio. Crafting your own audio grants complete creative control, ensuring a distinctive and immersive sound, but it can be time-consuming and costly, requiring technical skills or the hiring of professionals. Ultimately, the decision depends on your project's specific needs, resources, and the balance you aim to strike between convenience and creative expression, with the goal of delivering an engaging and cohesive audio experience that aligns with your game's vision.

## Adding Audio to our games

"But how do we add in our audio files?!" I hear you say.
"I have an environment idea, now I want to see how music will fit in"

Let's begin with making your main background audio.
This will be the music that loops throughout the level until its finished. You'll notice this in many games; amongst your sound affects, you have a jingle in the background. For example, the iconic Mario soundtrack.

First: Lets get our audio into it's correct folders.
We want our audio file, which can be ogg, wav, mod, flac, and mp3 files, into our 'sounds' folder.
Our code for background audio is only 3 lines of code.

    music background_music = load_music("test", "sounds/Test_Audio.mp3");
    play_music(background_music, -1, 1.0);
    stop_music();

Let's go through each line and see what each line does:

### Our first line

Our first line is simply loading our music; We've called it background_music as we're using this for our background, not to be confused with sound affects later on.
We load our music with a name of the audio, where I went with 'test', and then our location. Good practice is to use the resources folders provided with each CPP task - In this case, it's sounds.

Then, we play our music, where our parameters are the music we're loading (Background_music), how many times (-1 means infinite, where as 0 means never play.) and how loud do we want it. For 100% max volume, you would use 1.0 - but for songs that can be too loud or bassy, tinker around with the float value.

Once our window is closed, we will also stop_music, where it will stop **all** music. Not just our background music.

But what about sound effects? Like, jumping for example?

Well, the approach is very similar.
instead of our function of 'music', we instead use our sound_affect(); function.

      sound_effect my_sound = load_sound_effect("title", path/to/your/audiofile.wav");

We need to load our audio first, before we can use it.
Then, if you're like me, your audio files are booming and too loud. We don't want our audience to become deaf everytime they jump. So, we're going to adjust the volume of our new sound effect.

      float volume_factor = 0.25;

**float** is the data type of the variable, indicating that it can store decimal numbers (floating-point numbers).

We named our variable volume_factor, because we want our volume to be between 0.0, and 1.0.

And now, all we need to do is adjust our code *ever so slightly* to reflect our new audio, so that when we press a specific key, our audio will play.

We do this with:

      play_sound_effect(my_sound, volume_factor);

## The final outcome

Here's a finished example I made that has been added on from previous examples:

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

         music background_music = load_music("test", "sounds/Test_Audio.mp3");
         play_music(background_music, -1, 1.5);

         sound_effect my_sound = load_sound_effect("jump", "sounds/Jump.mp3");
         float volume_factor = 0.25;
    
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
            {   
                  player_y -= move_speed;
                  // Play the audio file when the "W" key is held down
                  play_sound_effect(my_sound, volume_factor); // Play the sound once
            }
            if (player_y + h > 500) // Check if the player's bottom edge is below the platform's top edge
                  player_y = 500 - h; // Reset the player's position to be just above the platform

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
         stop_music();
         return 0;
      }

Tinker around with different audio files, and see what fits.
The entire point of using different audios, and different affects, is to work through trial and error.
And with the efforts of trial and error, you eventually reach a happy place.
Which calls for a..

## Celebration

<https://www.youtube.com/watch?v=roRQ2mNwMMQ>
![Al Gore](https://media.tenor.com/wYNJpgVGMiMAAAAd/the-simpsons-simpsons.gif)

Adding audio into your game will bring forth new life, and add onto an already innovative and exciting environment to lead to fun adventures. And always remember to celebrate the little victories along the way. You deserve it.
