export function searchMovie(movies, keyword, checkbox) {
    let someMovies = movies.filter(function (item) {
      const nameRu = item.nameRU.toLowerCase();
      const nameEn = item.nameEN.toLowerCase();
      const key = keyword.toLowerCase();
      return (nameRu.includes(key) | nameEn.includes(key))
    });
    if (checkbox) {
      let shortMovies = someMovies.filter(function (item) {
        return item.duration < 40
      });
      return shortMovies;
    }
    else { return someMovies}
  }
  