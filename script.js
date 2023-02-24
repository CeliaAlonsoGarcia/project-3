// Movie Data
let movieData = {
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


    // Select the movies container element

const moviesContainer = document.querySelector("#movies-container");

// Iterate over each movie in the movieData object
for (const title in movieData) {
  // Get a reference to the movie object
  const movie = movieData[title];

  // Create a new HTML element for each movie
  const movieElement = document.createElement('div');

  // Add the movie title, year, plot, cast, runtime, and rating to the element
  movieElement.innerHTML = `
    <h2>${title}</h2>
    <p><strong>Year:</strong> ${movie.year}</p>
    <p><strong>Plot:</strong> ${movie.plot}</p>
    <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
    <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>
    <p><strong>Rating:</strong> ${movie.rating}</p>
  `;

  // Add the movie element to the movies container
  moviesContainer.appendChild(movieElement);
}

// Select buttons container for sorting by year
const sortByYear = document.querySelector("#sort-by-year");
const sortByRuntime = document.querySelector("#sort-by-runtime");
const sortByRating = document.querySelector("#sort-by-rating");


function sortByYear() {
  const sortedMovieTitles = Object.keys(movieData).sort((a, b) => {
    return movieData[a].year - movieData[b].year;
  });






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


 
  