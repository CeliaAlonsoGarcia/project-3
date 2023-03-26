#Planning

When I was planning the project, I first thought about the purpose of the page and the ways in which I wanted the user to interact with the page. I then wrote pseudo code for the next steps to get those functions to work.

#Building

I started by creating the HTML skeleton with a bit of CSS, as that was the part I was most comfortable with. Then, I moved on to the JavaScript side. At first, I didn't know where to start and began reading about simple JavaScript and doing bits of courses like [FreeCodeCamp](https://www.freecodecamp.org) or [Code with Mosh](https://codewithmosh.com).

When I started planning the project, I thought I would write the data on the HTML, but then realised that it had to be stored in JavaScript for everything to work. I started by learning how to add a `string` stored in JavaScript to the HTML. Then, I added the data object provided and managed to `render` it on the page with a `loop`.

I started trying to sort the object by title and managed to do it in `console.log`, but didn't know how add the information to the page itself so that the user could see it. Before I figured out how to render the information on the page, I learnt about how to change an `object` into an `array` so that I could sort the `object` better.

Then, I created a `reusable function` that would draw the `movieDataObject` and used `innerHTML` and `createElement` within it. I reused that function when making the buttons sort the `movieDataObject` by year, runtime, title, and rating.

#Debugging

-I had problems trying to sort the movies by year, rating, etc. when the `movieData` was an `object`, so I learned how to convert the `object` into an `array`.

-I also struggled when the title of the movie was the name of the `object`, so I created a new `key` in the `object` for title.

-I tried to call a `variable` that was inside a `function` from outside the `function`. I then learned about `scope` and how that was not possible.

-I wanted to have an `if statement` that would check if all the boxes of the `form` were not filled when submitting a new film, and if so, ask the user to fill them all. But I wrote this if statement on its own without any `function`, and it meant that it was running as soon as the page loaded. I then included it in a function.
