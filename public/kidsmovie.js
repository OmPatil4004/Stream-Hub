function searchMovies() {
    // Get the input field and its value
    const input = document.getElementById('movieSearch').value.toLowerCase();
    
    // Get all movie image elements
    const movies = document.querySelectorAll('.movie a img');
    
    // Loop through all movies and hide those that don't match the search query
    movies.forEach(img => {
        // Get the alt attribute which contains the movie title
        const movieTitle = img.getAttribute('alt').toLowerCase();

        // Check if the movie title includes the search query
        if (movieTitle.includes(input)) {
            img.parentElement.style.display = "block";  // Show matching movies (parent <a> tag)
        } else {
            img.parentElement.style.display = "none";   // Hide non-matching movies (parent <a> tag)
        }
    });
}

function searchGames() {
    // Get the input field and its value
    const input = document.getElementById('gameSearch').value.toLowerCase();
    
    // Get all movie image elements
    const games = document.querySelectorAll('.game a img');
    
    // Loop through all movies and hide those that don't match the search query
    games.forEach(img => {
        // Get the alt attribute which contains the movie title
        const gameTitle = img.getAttribute('alt').toLowerCase();

        // Check if the movie title includes the search query
        if (gameTitle.includes(input)) {
            img.parentElement.style.display = "block";  // Show matching movies (parent <a> tag)
        } else {
            img.parentElement.style.display = "none";   // Hide non-matching movies (parent <a> tag)
        }
    });
}

function searchAudio() {
    // Get the input field and its value
    const input = document.getElementById('audioSearch').value.toLowerCase();
    
    // Get all movie image elements
    const audio = document.querySelectorAll('.audio a img');
    
    // Loop through all movies and hide those that don't match the search query
    audio.forEach(img => {
        // Get the alt attribute which contains the movie title
        const audioTitle = img.getAttribute('alt').toLowerCase();

        // Check if the movie title includes the search query
        if (audioTitle.includes(input)) {
            img.parentElement.style.display = "block";  // Show matching movies (parent <a> tag)
        } else {
            img.parentElement.style.display = "none";   // Hide non-matching movies (parent <a> tag)
        }
    });
}

function searchTvShows() {
    // Get the input field and its value
    const input = document.getElementById('tvShowsSearch').value.toLowerCase();
    
    // Get all movie image elements
    const tvshow = document.querySelectorAll('.tvshow a img');
    
    // Loop through all movies and hide those that don't match the search query
    tvshow.forEach(img => {
        // Get the alt attribute which contains the movie title
        const tvshowTitle = img.getAttribute('alt').toLowerCase();

        // Check if the movie title includes the search query
        if (tvshowTitle.includes(input)) {
            img.parentElement.style.display = "block";  // Show matching movies (parent <a> tag)
        } else {
            img.parentElement.style.display = "none";   // Hide non-matching movies (parent <a> tag)
        }
    });
}