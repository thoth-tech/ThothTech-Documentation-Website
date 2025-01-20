---
title: Getting started with the new onboarding system
---

The aim of this document is to create a proof of concept for a tool that new members of thoth tech
could use to join the team that is right for their skills and interests. For a start, that means
getting together all of the technologies each team used, which has kindly been provided by Devanshi
Patel.

## Some ideas

there are a couple of ways that the team could go about implementing this into the new company
website, but these two are the most practical:

- A dynamic system, where the user types in all of their skills and we analyze the input from the
  users
- A static system, where we present the user with the tech stack and have them tick off options that
  apply to them

both options have pros and cons, and it is important to consider them.

### Looking at the dynamic system

the pros of using a dynamic system are:

- Unlimited choice
- More personal to the user

However, the cons are pretty aggressive:

- Security concerns, mainly injection or XSS (not that the site has any info worth pwning but it
  might down the line)
- User input must be filtered by regex or similar
- User might input things that we have not considered, resulting in no way to choose

### Looking at the static system

Having a static system provides us with some different pros:

- Options are presented to the user, making it easier to browse
- Provides a solid overview of the complete tech stack for Thoth Tech to the end user
- Does not require any kind of input filtering
- Does not leave the system vulnerable

But it does have a couple cons as well

- User is limited to static options
- Could result in a cluttered UI

### The big decision

I believe that the best possible option is to develop the static system, as the dynamic's cons far
outweigh its pros. This is the option that I will be developing.

## Static system development time

Great! So now I know what kind of page I want to make, What now?

### Part 1: complicated solutions

To start, I thought that the easiest way to approach this would be to separate the tech stack and
qualities each team is looking for into 3 categories:

- General interests
- Hard skills
- Soft skills

For example, company operations would be recommended to someone who is interested in documentation,
knows a bit about AstroJS, and a good communicator would be recommended to company operations.

Initially I wanted each of these skill / interests to be weighted, so for example, each company
would value communication, but company operations might value it a bit higher. This would mean that
each product gives communications a score of 1, but company operations values it at a 2.

### Part 2: making it a bit more simple

While I love all of the ideas that I came up with in part 1, the solution proved to be a bit too
much. Some of these ideas are excellent in theory, but proved too hard to do in practice. Weighting
the skills is a great example. While it is definitely a valuable addition, ranking every skill and
interest in relation to the products was just too much. There are just too many tools and skills at
Thoth Tech.

So the easiest solution I found was to strip it back to being a simple binary choice. That means
either a product needs a skill, or they don't. Similarly, having 3 categories proved a bit much as
well. I decided to go down to two: Areas of interest and skills & tools. This lead to the creation
of this UI design (the colours are beautiful I know. IT students should always do design)

![Onboarding tool design](/onboardingDesign.png)

Amazing! and pretty too :)

Super important though! The decision to cut the more complicated aspects of the tool are purely due
to time constraints of trimester 3. If anyone from trimester one or onwards has the time and energy
to add them back in, please do! Making this page better for everyone is an excellent way to
contribute to the team.

### Part 3: things get real...ly ugly (my code)

Now I have everything I need to start developing. I know the direction to take the page, I have a
design, let's get down to business.

The first solution that I created was very primitive. Basically it just had buttons that all used an
onclick function that would add to to the total of each product. The buttons were also toggled using
their CSS colour value.

#### JavaScript for demo 1

```javascript
const dataButtons = document.getElementsByClassName("toggle");
//declaring variables for each product
let ontrack = 0;
let companyOps = 0;
let splashkit = 0;
let artGallery = 0;
let courseFlow = 0;

//toggle function. Arguments as follows: id = array of button in ID. Should be in order.
//ot = ontrack, co = company operations, sk = splashkit, ag = art gallery, cf = courseflow.
function toggleButton(id, ot, co, sk, ag, cf) {
  var button = document.getElementById(dataButtons[id].id);

  //if statement uses the value of the button color to determine wether to increase or decrease the values
  if (button.style.color === "orange") {
    //first change color
    button.style.color = "black";

    //then adjust variables
    ontrack -= ot;
    companyOps -= co;
    splashkit -= sk;
    artGallery -= ag;
    courseFlow -= cf;
  } else {
    button.style.color = "orange";
    ontrack += ot;
    companyOps += co;
    splashkit += sk;
    artGallery += ag;
    courseFlow += cf;
  }
}
```

#### HTML for demo 1

```html
<h1>General areas of interest</h1>
<button class="toggle" id="button0" onclick="toggleButton(0,1,0,0,1,1)">
  Front end development
</button>
<button class="toggle" id="button1" onclick="toggleButton(1,1,0,0,1,1)">
  Back end development
</button>
<button class="toggle" id="button2" onclick="toggleButton(2,0,1,1,0,0)">Documentation</button>
<button class="toggle" id="button3" onclick="toggleButton(3,0,0,1,0,0)">
  Software development
</button>
```

#### Demo

![onboarding tool prototype demo](/onboardingDemo.png)

in this example, documentation is valued by company operations, but software development is only
valued by splashkit. This give splashkit a total score of 2, making it the best choice.

### Part 4: learning from my mistakes

while this was a very functional basic solution, it comes with some strong issues. The biggest being
code stability and expansion. Developing code in vanilla javascript means that errors had to be
debugged in runtime. Coming from more of an application development background, I didn't like that
at all and it lead to a LOT of troubleshooting and stability issues. In terms of expansion, the code
I wrote here was very clunky. Buttons needed an ID, IDs needed to be in order, and values had to be
declared directly in the function arguments. All of this is not only pretty bad practice, but also
meant that if future products were added, or if a product needed new software and skills, re writing
teh buttons would be an absolute nightmare.

So I decided on a couple of solutions. For a start, I moved to using TypeScript instead of vanilla
JS. TypeScript has much more clearly defined variables, and is compiled, meaning that I could check
a lot more of my errors prior to runtime. However, because TypeScript compiles back to vanilla JS,
if a future team decides to move back to that or another framework, the switch would be very easy.

To fix the concerns about extending the code, I had a few ideas. My first thought was that an excel
spreadsheet would be amazing. Have the leadership teams add new skills to it, and then assign them
each values for their products. We could then parse the excel doc, and use that to create each of
the buttons. This was the perfect solution. Everyone knows how to use excel, and it would make it
much easier to collaborate on. But then I realised just how hard it would be to parse excel in
javascript. Every solution I came up with made some really ugly objects or arrays that were way too
hard to use in practice.

Something else that I had considered was implementing a backend solution. Using something like
firebase or Jquery, a database could be populated with all of the skills and interests. There are
lots of easy ways to query information from them and return a value based on the user's input. The
biggest issue with going with this solution was cost. The hosting platform we are currently using is
free for pretty much everything as long as it stays in the front end, and using something like
firebase would put us into the paid tier which isn't really worth it at the moment.

Which brings me to my final consideration: Json. Json is super easy to query from Javascript, it
would allow us to create updates with minimal effort, and it can stay completely in the front end of
the website. For the time being, I just stored the Json as an object variable, but later down the
line, it could be accessed using something like fetch(), as long as it is stored at an HTTPS URL,
not a file path.

#### JavaScript for demo 2

```javascript
//declaring variables for each product
var ontrack = 0;
var companyOps = 0;
var splashkit = 0;
var artGallery = 0;
var courseFlow = 0;

var onboardingData = [
  {
    name: "front end development",
    ontrack: 1,
    companyOperations: 1,
    splashkit: 0,
    artGallery: 1,
    courseflow: 1,
  },
  {
    name: "back end development",
    ontrack: 1,
    companyOperations: 0,
    splashkit: 0,
    artGallery: 1,
    courseflow: 1,
  },
  {
    name: "documentation",
    ontrack: 0,
    companyOperations: 1,
    splashkit: 1,
    artGallery: 0,
    courseflow: 0,
  },
  {
    name: "software development",
    ontrack: 0,
    companyOperations: 0,
    splashkit: 1,
    artGallery: 0,
    courseflow: 0,
  },
];

//new and improved function for toggling variables and setting values
function trueToggleButton(currentButton) {
  var button = document.getElementById(currentButton);
  if (button.style.color === "orange") {
    //first change color
    button.style.color = "black";
    //then adjust variables using values in onboardingData
    ontrack -= onboardingData[currentButton].ontrack;
    companyOps -= onboardingData[currentButton].companyOperations;
    splashkit -= onboardingData[currentButton].splashkit;
    artGallery -= onboardingData[currentButton].artGallery;
    courseFlow -= onboardingData[currentButton].courseflow;
  } else {
    button.style.color = "orange";
    ontrack += onboardingData[currentButton].ontrack;
    companyOps += onboardingData[currentButton].companyOperations;
    splashkit += onboardingData[currentButton].splashkit;
    artGallery += onboardingData[currentButton].artGallery;
    courseFlow += onboardingData[currentButton].courseflow;
  }
}

//function for printing buttons based on the length of onboardingData
function printButton() {
  for (var i = 0; i < onboardingData.length; i++) {
    //create button. Give it the id of the current loop value
    var button = document.createElement("button");
    button.setAttribute("id", i);

    //set onclick to run the toggle button function on the
    button.onclick = function () {
      trueToggleButton(this.id);
    };
    var text = document.createTextNode(onboardingData[i].name);
    button.appendChild(text);
    document.body.appendChild(button);
  }
}
```

#### HTML for demo 2

```html
<body onload="printButton();"></body>
```

This code gives the same outputs as last time. However now, the buttons are dynamic generated from
the onboardingData variable, and loaded to the body.

### Part 5: what now?

So. Now we have a functional, modular solution. What now?

- adding the remaining tech stack data is a good place to start. Looking further into Devanshi's
  list, as well as talking to some of the products that did not run in T3 like art gallery will be
  essential.
- categories should be implemented to cut down on UI clutter. Especially as that data gets added in,
  sorting it into smaller chunks will be important so that we don't overwhelm the user.
- the UI could use a lot more theming. CSS and nav elements will be needed.
- if everything else is up and running, adding that weighting system back in would be really cool,
  but that's pretty far down the line at the time of writing.
- What ever else you think would be a good idea :)

As this was one of my first proper JS projects, I'm sure lots of you could run laps around me. Add
features, rewrite code, do whatever! This is a great opportuinity for you to show off your skills.
Develop this page to an amazing tool that will be used for trimesters to come.

The latest version of my prototype can be found
[on my personal github](https://github.com/QuinnCurtis02/Onboarding-tool-prototype)
