import React, { useState } from 'react';

export default function useSearchMovie() {

  const [searchMovies, setSearchMovies] = useState([])
  const [movies, setMovies] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChangeSearchData (movies, key, checkbox) {
    setMovies(movies);
    setKeyword(key);
    setCheckbox(checkbox);
  };

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
    console.log(someMovies)
    setSearchMovies(shortMovies);
  }
  else {setSearchMovies(someMovies);}
  return { searchMovies, handleChangeSearchData };
}
