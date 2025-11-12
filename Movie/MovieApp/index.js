async function fetchData(page, title){
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=32d7fea5`);
    const data = await response.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data.Search;
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector(".searchButton");
    const searchInput = document.querySelector(".searchInput");
    const moviesContainer = document.getElementById("moviesContainer");
    let nextButton = document.querySelector(".nextButton");
    let prevButton = document.querySelector(".prevButton");
    let pageNumber= 1;
    async function loadData(pageNumber){
        try {
            moviesContainer.innerHTML = '';
            const data = await fetchData(pageNumber, searchInput.value.trim());
            data.forEach(movie => {
                const card = document.createElement('div');
                card.classList.add('movie-card');
                card.innerHTML = `
                    <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${movie.Title}">
                    <div class="movie-info">
                        <h3>${movie.Title}</h3>
                        <p>Год: ${movie.Year}</p>
                        <p>Тип: ${movie.Type}</p>
                    </div>
                `;
                moviesContainer.appendChild(card);
            });
        } catch (err) {
            moviesContainer.innerHTML = `<p>${err.message}</p>`;
        }
    }
    nextButton.addEventListener("click",  async (e) =>{
        pageNumber++;
        await loadData(pageNumber);
    })
    prevButton.addEventListener("click", async (e) =>{
        pageNumber--;
        await loadData(pageNumber);
    })
    searchButton.addEventListener("click", async (e) => {
        e.preventDefault();
        moviesContainer.innerHTML = '';
        await loadData(pageNumber);
    });
});
