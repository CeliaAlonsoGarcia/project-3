// Movie Data
let movieDataObject = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    tag: "darjeeling"
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
for(const [key, value] of Object.entries(movieDataObject)){


// join together the key (title of film) and value (film info) to create one new object
const newObject = {
  title: key,
   ...value
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


const deleteFirstMovieButton = document.querySelector("#delete-first-movie");

sortByAscCheckbox.addEventListener('change', () => {
sortByAsc = sortByAscCheckbox.checked
});

sortByYearBtn.addEventListener('click', () => {
movieData = movieData.sort((a,b) => 
// Inline condition
  sortByAsc ?  
    a.year - b.year : 
    b.year - a.year);
drawMovieList();
});

sortByRatingBtn.addEventListener('click', ()=> {
  movieData = movieData.sort((a,b) =>
  sortByAsc ?
    a.rating - b.rating :
    b.rating - a.rating);
    drawMovieList();
});

sortByRuntimeBtn.addEventListener('click', ()=> {
movieData = movieData.sort((a,b) =>
sortByAsc ?
  a.runtime - b.runtime :
  b.runtime - a.runtime);
drawMovieList();
});

// Example of above inline condition but not inline
// if(sortByAsc){
//   return a.year - b.year;
// }
// else{
//   return b.year - a.year;
// }

deleteFirstMovieButton.addEventListener('click', () => {
if(movieData.length < 1)
  return;

const removedElements = movieData.splice(0, 1);
console.log(movieData, removedElements);
drawMovieList();
});

function clearMovieList(){
// Clear the moviesContainers children
moviesContainer.innerHTML = '';
}
// Create new re-usable function that will CLEAR the movieContainer, and REDRAW the current movieData into the container
function drawMovieList(){
clearMovieList();
for (const movie of movieData) {  
  // Create a new HTML element for each movie
  const movieElement = document.createElement('div');
// Add the movie title, year, plot, cast, runtime, and rating to the element
movieElement.innerHTML = `
  <h2>${movie.title}</h2>
  <p><strong>Year:</strong> ${movie.year}</p>
  <p><strong>Plot:</strong> ${movie.plot}</p>
  <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
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

function addMovieArray(obj) {
  movieDataObject.push(obj)

  return movieDataObject;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
console.log('hi')
let titleInput = document.getElementById("in-title");
let yearInput = document.getElementById("in-year");
let plotInput = document.getElementById("in-plot");
let ratingInput = document.getElementById("in-rating");
let castInput = document.getElementById("in-cast");
let runtimeInput = document.getElementById("in-runtime");

const newTitle = titleInput.value; 
const newPlot = plotInput.value;
const newYear = yearInput.value;
const newRating = ratingInput.value;
const newRuntime = runtimeInput.value;
const newCast = castInput.value.split(",");

console.log(titleInput)

const newMovieData = {
  title: newTitle,
  plot: newPlot,
  year: newYear,
  rating: newRating,
  runtime: newRuntime,
  cast: newCast,
};

newMovieData = [];
movieData.push(newMovieData);

drawMovieList();

})



  
console.log(movieData)

// movieNewElement.innerHTML = 
//     `
//       <h2>${newTitle}</h2>
//       <p><strong>Year:</strong> ${newYear}</p>
//       <p><strong>Plot:</strong> ${newPlot}</p>
//       <p><strong>Runtime:</strong> ${newRuntime} minutes</p>
//       <p><strong>Rating:</strong> ${newRating}</p>
//     `
// });


  
// )




// // cast

// console.log("submited");

// if (titleInput.value == "" || yearInput.value == "" || plotInput.value == "" || ratingInput.value == "" || runtimeInput.value == "") {
//   alert("Ensure you input a value in all fields!");
// } else {
//   // perform operation with form input
//   // alert("Your new film has been successfully submitted!");
  
//   //   `This form has a tile of ${titleInput.value} and a rating of ${ratingInput.value}`
//   // );

//   const newTitle = titleInput.value; 
//   const newPlot = plotInput.value;
//   const newYear = yearInput.value;
//   const newRating = ratingInput.value;
//   const newRuntime = runtimeInput.value;

// function drawNewMovieList(){
//   clearNewMovieList();
//     for (const movie of form) {  
//       // Create a new HTML element for each movie
//       const movieNewElement = document.createElement('div');
//   movieNewElement.innerHTML = 
//   `
//     <h2>${newTitle}</h2>
//     <p><strong>Year:</strong> ${newYear}</p>
//     <p><strong>Plot:</strong> ${newPlot}</p>
//     // <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
//     <p><strong>Runtime:</strong> ${newRuntime} minutes</p>
//     <p><strong>Rating:</strong> ${newRating}</p>
//   `;

//   moviesContainer.appendChild(movieNewElement);
//     }
//   }
//   drawNewMovieList();
  
//   titleInput.value = "";
//   plotInput.value = "";
//   runtimeInput.value = "";
//   ratingInput.value = "";
//   yearInput.value = "";

//   movieData.push(movieNewElement);
// }
  

//   // handle submit
// });


// scope movienewElement was within a function so couldnt find it

// if else was not inside a fuction so was just running

// 	function addNewMovie() {
//     document.getElementById("form").innerHTML = ;
//   }
// });


// form.addEventListener('submit', function () {
// 	function addNewMovie() {
//     document.getElementById("form").innerHTML = ;
//   }
// });


// const title = form.elements['title'];
// const plot = form.elements['plot'];
// const runtime = form.elements['runtime'];
// const rating = form.elements['rating'];

// let newTitle = title.value;
// let newPlot = plot.value;
// let newRuntime = runtime.value;
// let newRating = rating.value;






// function sortMoviesByYear() {
//   const sortedMovieTitles = Object.keys(movieData).sort((a, b) => {
//     return movieData[a].year - movieData[b].year;
//   });


// chat gpt - says I'm missing last stepts
 // Remove existing movie elements from the movies container
//    moviesContainer.innerHTML = '';

//    // Add new movie elements in the sorted order
//    sortedMovieTitles.forEach(title => {
//      const movie = movieData[title];
//      const movieElement = document.createElement('div');
//      movieElement.innerHTML = `
//        <h2>${title}</h2>
//        <p><strong>Year:</strong> ${movie.year}</p>
//        <p><strong>Plot:</strong> ${movie.plot}</p>
//        <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
//        <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>
//        <p><strong>Rating:</strong> ${movie.rating}</p>
//      `;
//      moviesContainer.appendChild(movieElement);
//    });
//  }

//   sortByYear.addEventListener("click", sortMoviesByYear);


// 1 way
  // let locationHTML = document.querySelector("#movies-container");
  // locationHTML.innerHTML = movieData["The Grand Budapest Hotel"].plot;

  

  // button.addEventListener("click", function() {
  
  // });
  // });






// const movieDataArray = Object.entries(movieData);

 // movieDataArray.forEach(movie => { 
 
//   movies.insertAdjacentHTML("beforeend", 
//   `
//   <div> 
//   <h1>${movie[0]}</h1>
//   <h2>${movie[1].plot}</h2>
//   </div>
//   `)
// })




// showProperties(movie);
// function showProperties(obj) {
// for (let key in obj)}

// for (const [key, value] of Object.entries(movieData))

// console.log(key);




// foreach //queryslector/  insertadjacementHTML

//  conditional statements



// Iterate over each movie in the movieData object
// for (const title in movieData) {
//   // Get a reference to the movie object
//   const movie = movieData[title];