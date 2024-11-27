import movies from "../fixtures/movies.json";

export const formatData = () => {
  return movies.movies.reduce((acc, next) => {
    return {
      ...acc,
      [next.year]: [...(acc[next.year] || []), next],
    };
  }, {});
};
