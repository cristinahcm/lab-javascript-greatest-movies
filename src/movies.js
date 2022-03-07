// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors (arr) {
  const allDirectors = arr.map((obj) => obj.director)
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter(movie => (movie.genre.includes('Drama') && movie.director === "Steven Spielberg"));
  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const avg = movies.reduce(function (sum, movie) {
    return sum + (movie.score || 0); 
  }, 0)/movies.length;
  if (movies.length === 0) {
    return 0
  }
  else {
    return Math.round(avg * 100) / 100;
  }
}

function howManyDramaMovies(movies) {
  const dramaMovies = movies.filter(movie => (movie.genre.includes('Drama')));
  return dramaMovies.length
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
const dramaAvg = movies.filter(movie => (movie.genre.includes('Drama'))).reduce(function (sum, movie) {
  return sum + (movie.score || 0); 
}, 0)/howManyDramaMovies(movies)
 if (howManyDramaMovies(movies) === 0) {
  return 0
}
else {
  return Math.round(dramaAvg * 100) / 100;
}
}


 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const yearsAsc = (a, b) => {
   if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
    else {
      return a.year - b.year
    }    
 };
 const orderMovies = Array.from(movies);
 return orderMovies.sort(yearsAsc)
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphOrder = (a, b) => {
    if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
  }
  const newAlphOrder = Array.from(movies);
  newAlphOrder.sort(alphOrder)
  const sliceOrder = newAlphOrder.slice(0,20)
  return sliceOrder.map((movie)=>movie.title)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
