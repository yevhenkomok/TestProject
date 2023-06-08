"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцените его", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log ("Watching low films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log("Classic watching");
} else if (personalMovieDB.count >= 30) {
    console.log("You awesome watching");
} else {
    console.log("error");
}

console.log(personalMovieDB);