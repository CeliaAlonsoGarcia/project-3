# project-3

// Define the movieData object


// Define the HTML structure for the movie list
let movieListHTML = `
  <ul id="movie-list">
    <!-- The list of movies will be dynamically generated here -->
  </ul>
`;

// Function to sort the movies by year
function sortMoviesByYear() {
  // Code to sort the movies by year and re-render the movie list
}

// Function to add a new movie to the movieData object
function addNewMovie(title, year, director) {
  // Code to add a new movie to the movieData object and re-render the movie list
}

// Function to render the movie list
function renderMovieList() {
  let movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // Clear the previous movie list

  // Loop through the movies and generate the HTML for each movie
  for (let i = 0; i < movieData.movies.length; i++) {
    let movie = movieData.movies[i];
    let movieHTML = `
      <li>
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
      </li>
    `;
    movieList.innerHTML += movieHTML;
  }
}

// Function to handle user input to add a new movie
function handleAddMovie() {
  let titleInput = document.getElementById("title-input");
  let yearInput = document.getElementById("year-input");
  let directorInput = document.getElementById("director-input");

  let title = titleInput.value;
  let year = parseInt(yearInput.value);
  let director = directorInput.value;

  addNewMovie(title, year, director);

  // Clear the input fields after adding the new movie
  titleInput.value = "";
  yearInput.value = "";
  directorInput.value = "";
}

// Add event listeners for user interaction
let sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", sortMoviesByYear);

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", handleAddMovie);

// Render the initial movie list
renderMovieList();