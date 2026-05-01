// Define the Movie class
class movie {

  // private properties
  #title;
  #cast;
  #description;
  #rating;

  // title, cast, description, rating
  constructor(title, cast, description, rating){
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const mi = document.getElementById("movie-info");

    mi.innerHTML += `
        <p><b>${this.#title}</b></p>
        <p>Cast: ${this.#cast.join(", ")}</p>
        <p>Description: ${this.#description}</p>
        <p>Rating: ${this.#rating}</p>
        `;
    }

  // Get Movie title to update rating from title
  getTitle() {
    return this.#title;
  }

  }

// Test your implementation

const testMovie = new movie(
    "Marty Supreme",
    ["Timothee Chalamet", "Gwyneth Paltrow", "Fran Drescher"],
    "Marty Mauser, a wily hustler with a dream no one respects, goes to hell and back in pursuit of greatness.",
    9
);

// Display the initial information of the movie

testMovie.displayInfo();

// Update the rating of the movie

testMovie.updateRating(5);

// Display the updated information of the movie
testMovie.displayInfo();

// Create array of movies
const movies = []

// Append object to the array to the array
movies.push(testMovie);

// Update Rating of correctly titled movie
function updateMovieRating(title, newRating) {
    // Find movie title in movies array
    const movieTitle = movies.find(m => m.getTitle() === title);

    // Update movie rating with newRating
    movieTitle.updateRating(newRating);
}

// Test function
updateMovieRating("Marty Supreme", 7);

testMovie.displayInfo();

