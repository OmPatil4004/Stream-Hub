const movies = [
    { title: "Pixy Dragons", section: "kids", link: "https://www.mxplayer.in/movie/watch-pixy-dragons-hindi-dubbed-movie-online-f5eda9429a6243f6ce32be0e55f7fb13?watch=true", img: "images/movies/kids/movkid1.jpg" },
    { title: "Zoo Wars", section: "kids", link: "https://www.mxplayer.in/movie/watch-zoo-wars-hindi-dubbed-movie-online-11637757861f2dd159e50c279167c2f0?watch=true", img: "images/movies/kids/movkid2.jpg" },
    { title: "Kuchhe Dhaage", section: "old", link: "https://www.shemaroome.com/movies/kuchhe-dhaage", img: "images/movies/old/old1.webp" },
    { title: "Mera Gaon Mera Desh", section: "old", link: "https://www.shemaroome.com/movies/mera-gaon-mera-desh", img: "images/movies/old/old5.jpg" },
    { title: "Duniyaa", section: "adult", link: "https://wynk.in/music/song/duniyaa/hu_47309655", img: "images/songs/Adults/songrom1.jpg" }
    // Add more movies from all sections
];

function searchMovies() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    // If the search bar is empty, do not display any movies
    if (searchInput.trim() === '') {
        return;  // Exit the function without displaying anything
    }

    // Filter movies based on search input
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.innerHTML = `
                <a href="${movie.link}">
                    <img src="${movie.img}" alt="${movie.title}">
                    <p>${movie.title} (${movie.section} section)</p>
                </a>
            `;
            searchResults.appendChild(movieDiv);
        });
    } else {
        searchResults.innerHTML = `<p>No movies found</p>`;
    }
}

