export function searchMovie(movies, keyword, checkbox) {
    console.log(movies)
    let someMovies = movies.filter(function (item) {
      const nameRu = item.nameRU.toLowerCase();
      const nameEn = item.nameEN.toLowerCase();
      const key = keyword.toLowerCase();
      return (nameRu.includes(key) | nameEn.includes(key))
    });
    console.log(someMovies);
    console.log(checkbox);
    if (checkbox) {
      let shortMovies = someMovies.filter(function (item) {
        return item.duration < 40
      });
      console.log(shortMovies);
      return shortMovies;
    }
    else { console.log(someMovies); return someMovies}
  }
  