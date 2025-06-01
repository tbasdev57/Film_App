const key = "3bc568d8";

const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
const themeBtn = document.getElementById("theme-btn");

let darkMode = true;

const getMovie = () => {
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
            <h2>${data.Title} (${data.Year})</h2>
            <img src="${data.Poster}" alt="Affiche de ${data.Title}" class="poster" />
            <p><strong>Note :</strong> ${data.imdbRating} ⭐</p>
            <p><strong>Durée :</strong> ${data.Runtime}</p>
            <p><strong>Genre :</strong> ${data.Genre}</p>
            <p><strong>Synopsis :</strong> ${data.Plot}</p>
            <p><strong>Acteurs :</strong> ${data.Actors}</p>
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
window.addEventListener("load", getMovie);

themeBtn.addEventListener("click", () => {
  if (darkMode) {
    document.documentElement.style.setProperty('--bgColor', 'var(--bgColor-light)');
    document.documentElement.style.setProperty('--textColor', 'var(--textColor-light)');
    themeBtn.textContent = "Mode sombre";
  } else {
    document.documentElement.style.setProperty('--bgColor', 'var(--bgColor-dark)');
    document.documentElement.style.setProperty('--textColor', 'var(--textColor-dark)');
    themeBtn.textContent = "Mode clair";
  }
  darkMode = !darkMode;
});
