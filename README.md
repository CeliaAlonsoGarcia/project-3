# project-3

Planning
When I was plan

purpose of the website

thought of the ways i wanted the user to be able to interact with the page

and wrote the pseudo code for what I thought would be the next steps to get those functions to work.


Building 

I started by creating the html skeleton with a tiny bit of css - that's the part the I was most confortable with.

then I jumped into trying to do the JS side. At first, I didnt know where to start and I begun reading about simple java script and doing bits of courses like freecodecamp or code with mosh. 

At first, I thought I would write the data on the html and then realised that had to be stored in js for everything to work. I started by learing how to add a piece of string stored in JS to the html. Then I wrote the dataObject and managed to render it on the page with a loop.

I started trying to sort the object by title and managed to do it in console.log but didn't now how to make the page itself change.

Before I figured out how to make the page load realised that I coudn't sort by numerical values if the data was sotored in an object so I learnt to store it into an array.

Then I created a reusable function that would draw the movieDataObject and used innerHTML and createElement within it. I reused that funciton when making the buttons sort the movieDataObject by year, runtime, title and rating.




Debugging

I had problems trying sort the movies by year, rating, etc. when the movieData was an object so learnt how to convert the object into and array.

I also struggled when the title of the movie was the name of the object so I created a new key in the object for title.

I tried to call a constant that was inside a function from outside the fuction and learnt about scope.

I wanted to have an if statement to that if all the boxes of the form were not filled when submitting a new film it would ask the user to fill them all. But I wrote this if statement on its own without any function and it meant  it was running as soon as the page loaded. I then included it in a fuction.


