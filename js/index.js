const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

let getMovie = () => {
    let movieName = movieNameRef.value.trim();
    if (movieName.length === 0) {
        result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film ou série</h3>`;
        return;
    }

    let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${key}`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if (data.Response === "True") {
                result.innerHTML = `
                    <div class="movie-card">
                        <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/200x300'}" alt="Affiche">
                        <div class="details">
                            <h2>${data.Title}</h2>
                            <p><strong>${data.imdbRating}</strong> | ${data.Rated} | ${data.Year} | ${data.Runtime}</p>
                            <p><strong>Genres:</strong> ${data.Genre}</p>
                            <p><strong>Plot:</strong> ${data.Plot}</p>
                            <p><strong>Cast:</strong> ${data.Actors}</p>
                        </div>
                    </div>
                `;
            } else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">Erreur lors de la récupération des données</h3>`;
        });
};

searchBtn.addEventListener("click", getMovie);
