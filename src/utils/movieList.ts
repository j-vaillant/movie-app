import movies from "../fixtures/movies.json";

const utils = movies.movies;

movies.movies.reduce((acc, next) => {
    return {
        ...acc,
        [next.year]: [...(acc[next.year] || []), next]
    };
}, {});

export default utils;




