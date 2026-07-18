const movies = [
{ title:"Interstellar",
    year:2014,
    rating:8.7,
    genre:"sci-fi"
},
{ title:"Avengers",
  year:2012,
    rating:8.1,
    genre:"action"
},
{ title:"The Mask",
    year:1994,
    rating:7.0,
    genre:"comedy"
},
{
    title:"Inception",
    year:2010,
    rating:8.8,
    genre:"sci-fi"
},
{
    title:"The Dark Knight",
    year:2008,
    rating:9.0,
    genre:"action"
},
{
    title:"Joker",
    year:2019,
    rating:8.4,
    genre:"crime"
},
{
    title:"Titanic",
    year:1997,
    rating:7.9,
    genre:"romance"
},
{
    title:"Toy Story",
    year:1995,
    rating:8.3,
    genre:"comedy"
},
{
    title:"Avatar",
    year:2009,
    rating:7.8,
    genre:"sci-fi"
},
{
    title:"Gladiator",
    year:2000,
    rating:8.5,
    genre:"action"
},
{
    title:"Finding Nemo",
    year:2003,
    rating:8.2,
    genre:"comedy"
},
{
    title:"The Matrix",
    year:1999,
    rating:8.7,
    genre:"sci-fi"
},
{
    title:"Black Panther",
    year:2018,
    rating:7.3,
    genre:"action"
},
{
    title:"Frozen",
    year:2013,
    rating:7.4,
    genre:"comedy"
},
{
    title:"Parasite",
    year:2019,
    rating:8.5,
    genre:"crime"
},
{
    title:"Interstellar 2",
    year:2026,
    rating:8.0,
    genre:"sci-fi"
},
{
    title:"Spider-Man",
    year:2002,
    rating:7.3,
    genre:"action"
},
{
    title:"Home Alone",
    year:1990,
    rating:7.7,
    genre:"comedy"
},
{
    title:"Avatar: Fire and Ash",
    year:2026,
    rating:8.2,
    genre:"sci-fi"
},
{
    title:"The Batman Part II",
    year:2026,
    rating:8.6,
    genre:"action"
}
];
const averageRating = movies.reduce(
    (sum, movie) => sum + movie.rating,
    0
) / movies.length;

console.log("Average Rating:", averageRating.toFixed(2));
const movieList = document.getElementById("movie-list");
const search = document.getElementById("search");
const genre = document.getElementById("genre");
const topRated = document.getElementById("topRated");

function renderMovies(movieArray){
    movieList.innerHTML =movieArray.map(movie => `
        <li>
            <h3>${movie.title}</h3>
            <p>${movie.year} | ${movie.rating} ⭐| ${movie.genre} </p>
        </li>
    `).join("");
}
renderMovies(movies);
search.addEventListener("input", () => {
    const searchResult =movies.filter(movie =>
      movie.title.toLowerCase().includes(search.value.toLowerCase())
    );  
    renderMovies(searchResult);
});
genre.addEventListener("change", () => {
    const genreResult = movies.filter(movie =>
        genre.value === "all" ||
        movie.genre === genre.value
    );
    renderMovies(genreResult);
});
topRated.addEventListener("click", () => {
    const sortedMovies = [...movies].sort(
        (a, b) => b.rating - a.rating
    );

    renderMovies(sortedMovies);
});