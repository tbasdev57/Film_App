const key = "3bc568d8"; // Ta clé API OMDb

const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

function getMovie() {
    const movieName = movieNameRef.value.trim();

    if (movieName.length === 0) {
        result.innerHTML = `<h3>Merci d'entrer un nom de film</h3>`;
        return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${key}`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if (data.Response === "True") {
                result.innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <p><strong>Note IMDb:</strong> ${data.imdbRating}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Résumé:</strong> ${data.Plot}</p>
                    <img src="${data.Poster !== "N/A" ? data.Poster : ""}" alt="Poster" style="max-width:200px;" />
                `;
            } else {
                result.innerHTML = `<h3>${data.Error}</h3>`;
            }
        })
        .catch(err => {
            console.error(err);
            result.innerHTML = `<h3>Erreur lors de la récupération des données</h3>`;
        });
}

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
