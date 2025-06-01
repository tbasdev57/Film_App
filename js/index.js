const key = "3bc568d8";

const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

let getMovie = () => {
    console.log("Recherche lancée !");  // Pour vérifier que la fonction est appelée

    let movieName = movieNameRef.value.trim();
    if (movieName.length === 0) {
        result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film</h3>`;
        return;
    }

    let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${key}`;
    console.log("URL appelée :", url);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log("Réponse API :", data);
            if (data.Response === "True") {
                result.innerHTML = `
                    <div class="info">
                        <h2>${data.Title}</h2>
                        <p>${data.Plot}</p>
                    </div>
                `;
            } else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        .catch(err => {
            console.error("Erreur fetch :", err);
            result.innerHTML = `<h3 class="msg">Erreur lors de la récupération des données</h3>`;
        });
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
