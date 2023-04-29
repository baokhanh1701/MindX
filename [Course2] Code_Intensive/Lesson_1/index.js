

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi-VN&page=1";

const request = fetch(API_URL, {
  method: "GET",
});

request
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then(function (jsonData) {
    renderMovie(jsonData.results);
  });

function renderMovie(movies) {
  console.log("movie: ", movies);
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieHtml = generatorMovieHtml(movie);
    console.log(movieHtml);
    document.getElementById("movie-container").innerHTML += movieHtml;
  }
}

function generatorMovieHtml(obj) {
  return `
    <div class="movie container">
        <img src="https://www.themoviedb.org/t/p/w440_and_h660_face${obj.poster_path}" alt="" />
        <h2>${obj.title}</h2>
        <h5>${obj.release_date}</h5>
        <p>${obj.overview}</p>
    </div>
    `;
}
// console.log(request);
