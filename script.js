// Movie Data
let movieDataObject = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    tag: "darjeeling",
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

// new array for sorting the movie Data
let movieData = [];
let sortByAsc = false;

// iterate entries of the movieDataObject
for (const [key, value] of Object.entries(movieDataObject)) {
  // join together the key (title of film) and value (film info) to create one new object
  const newObject = {
    title: key,
    ...value,
  };
  // Add newObject to movieData
  movieData.push(newObject);
}

// Select the movies container element

const moviesContainer = document.querySelector("#movies-container");

// Select buttons container for sorting
const sortByYearBtn = document.querySelector("#sort-by-year");
const sortByRuntimeBtn = document.querySelector("#sort-by-runtime");
const sortByRatingBtn = document.querySelector("#sort-by-rating");
const sortByAscCheckbox = document.querySelector("#sort-by-asc");

sortByAscCheckbox.addEventListener("change", () => {
  sortByAsc = sortByAscCheckbox.checked;
});

sortByYearBtn.addEventListener("click", () => {
  movieData = movieData.sort((a, b) =>
    // Inline condition
    sortByAsc ? a.year - b.year : b.year - a.year
  );
  drawMovieList();
});

sortByRatingBtn.addEventListener("click", () => {
  movieData = movieData.sort((a, b) =>
    sortByAsc ? a.rating - b.rating : b.rating - a.rating
  );
  drawMovieList();
});

sortByRuntimeBtn.addEventListener("click", () => {
  movieData = movieData.sort((a, b) =>
    sortByAsc ? a.runtime - b.runtime : b.runtime - a.runtime
  );
  drawMovieList();
});

// Example of above inline condition but not inline
// if(sortByAsc){
//   return a.year - b.year;
// }
// else{
//   return b.year - a.year;
// }

function clearMovieList() {
  // Clear the moviesContainers children
  moviesContainer.innerHTML = "";
}
// Create new re-usable function that will CLEAR the movieContainer, and REDRAW the current movieData into the container
function drawMovieList() {
  clearMovieList();
  for (const movie of movieData) {
    // Create a new HTML element for each movie
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    // Add the movie title, year, plot, cast, runtime, and rating to the element
    movieElement.innerHTML = `
  <h2>${movie.title}</h2>
  <p><strong>Year:</strong> ${movie.year}</p>
  <p><strong>Plot:</strong> ${movie.plot}</p>
  <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
  <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>
  <p><strong>Rating:</strong> ${movie.rating}</p>
`;

    // Add the movie element to the movies container
    moviesContainer.appendChild(movieElement);
  }
}
drawMovieList();

//  Form for user to add new movie

// Select the form

const form = document.getElementById("entry-form");

// function to update movieData Array - it needs to be outside the submit function not to have problems with scope
function addMovieArray(obj) {
  movieData.push(obj);
  return movieData;
}

// connecting submit button with the information we are submitting
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // select the data we get in the form

  console.log("hi");
  let titleInput = document.getElementById("in-title");
  let yearInput = document.getElementById("in-year");
  let plotInput = document.getElementById("in-plot");
  let ratingInput = document.getElementById("in-rating");
  let castInput = document.getElementById("in-cast");
  let runtimeInput = document.getElementById("in-runtime");

  // extract the values
  const newTitle = titleInput.value;
  const newPlot = plotInput.value;
  const newYear = yearInput.value;
  const newRating = ratingInput.value;
  const newRuntime = runtimeInput.value;
  const newCast = castInput.value.split(",");

  console.log(titleInput);

  // create new object with new input
  const newMovieData = {
    title: newTitle,
    plot: newPlot,
    year: newYear,
    rating: newRating,
    runtime: newRuntime,
    cast: newCast,
  };

  // new object being added to movieData
  addMovieArray(newMovieData);
  drawMovieList();
  form.reset();
});

console.log(movieData);
