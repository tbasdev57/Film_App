// Ne redéclare pas "const key" ici
const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

let getMovie = () => {
    let movieName = movieNameRef.value.trim();
    if (movieName.length === 0) {
        result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film</h3>`;
        return;
    }

    let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${key}`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if (data.Response === "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src="${data.Poster}" alt="Poster de ${data.Title}">
                        <h2>${data.Title}</h2>
                        <p>${data.Plot}</p>
                    </div>
                `;
            } else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        .catch(err => {
            result.innerHTML = `<h3 class="msg">Erreur lors de la récupération des données</h3>`;
        });
};

searchBtn.addEventListener("click", getMovie);
