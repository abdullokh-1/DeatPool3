
        // Sample movie data
        const movies = [
            {
                title: "Patton Oswalt: Annihilation",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 7.4,
                year: 2017,
                duration: "1 hr 6 min",
                genres: ["Uncategorized"]
            },
            {
                title: "New York Doll",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 7.9,
                year: 2005,
                duration: "1 hr 15 min",
                genres: ["Documentary", "Music"]
            },
            {
                title: "Mickey's Magical Christmas",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 6.8,
                year: 2001,
                duration: "1 hr 5 min",
                genres: ["Adventure", "Animation", "Comedy"]
            },
            {
                title: "And Then I Go",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 7.6,
                year: 2017,
                duration: "1 hr 39 min",
                genres: ["Drama"]
            },
            {
                title: "An Extremely Goofy Movie",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 6.4,
                year: 2000,
                duration: "1 hr 19 min",
                genres: ["Animation", "Comedy", "Family"]
            },
            {
                title: "Peter Rabbit",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 6.6,
                year: 2018,
                duration: "1 hr 35 min",
                genres: ["Adventure", "Animation", "Comedy"]
            },
            {
                title: "The Avengers",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 8.0,
                year: 2012,
                duration: "2 hr 23 min",
                genres: ["Action", "Adventure", "Sci-Fi"]
            },
            {
                title: "Inception",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 8.8,
                year: 2010,
                duration: "2 hr 28 min",
                genres: ["Action", "Adventure", "Sci-Fi"]
            },
            {
                title: "The Shawshank Redemption",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 9.3,
                year: 1994,
                duration: "2 hr 22 min",
                genres: ["Drama"]
            },
            {
                title: "Pulp Fiction",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 8.9,
                year: 1994,
                duration: "2 hr 34 min",
                genres: ["Crime", "Drama"]
            },
            {
                title: "The Dark Knight",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 9.0,
                year: 2008,
                duration: "2 hr 32 min",
                genres: ["Action", "Crime", "Drama"]
            },
            {
                title: "Forrest Gump",
                poster: "/placeholder.svg?height=250&width=200",
                rating: 8.8,
                year: 1994,
                duration: "2 hr 22 min",
                genres: ["Drama", "Romance"]
            }
        ];

        // Function to create movie card
        function createMovieCard(movie) {
            const card = document.createElement('div');
            card.className = 'movie-card';
            
            card.innerHTML = `
                <img src="./img/img.png" alt="${movie.title}" class="movie-poster">
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-meta">
                        <span class="movie-rating">${movie.rating}</span>
                        <span class="movie-year">${movie.year}</span>
                        <span class="movie-duration">${movie.duration}</span>
                    </div>
                    <div class="movie-genres">${movie.genres.join(' ')}</div>
                    <button class="info-btn">More info</button>
                </div>
            `;
            
            return card;
        }

        // Function to display movies
        function displayMovies(moviesList) {
            const moviesGrid = document.getElementById('moviesGrid');
            moviesGrid.innerHTML = '';
            
            moviesList.forEach(movie => {
                const card = createMovieCard(movie);
                moviesGrid.appendChild(card);
            });
        }

        // Function to filter movies by genre
        function filterMoviesByGenre(genre) {
            if (genre === 'all') {
                return movies;
            }
            
            return movies.filter(movie => 
                movie.genres.some(g => g.toLowerCase() === genre.toLowerCase())
            );
        }

        // Function to filter movies by search term
        function filterMoviesBySearch(searchTerm) {
            if (!searchTerm) {
                return movies;
            }
            
            return movies.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Function to sort movies by rating
        function sortMoviesByRating(moviesList, ascending = false) {
            return [...moviesList].sort((a, b) => 
                ascending ? a.rating - b.rating : b.rating - a.rating
            );
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            // Display all movies initially
            displayMovies(movies);
            
            // Search button click event
            document.getElementById('searchBtn').addEventListener('click', () => {
                const searchTerm = document.getElementById('searchInput').value;
                const genre = document.getElementById('genreFilter').value;
                
                let filteredMovies = filterMoviesBySearch(searchTerm);
                filteredMovies = filterMoviesByGenre(genre).filter(movie => 
                    filteredMovies.includes(movie)
                );
                
                displayMovies(filteredMovies);
            });
            
            // Sort button click event
            let sortAscending = false;
            document.getElementById('sortBtn').addEventListener('click', () => {
                sortAscending = !sortAscending;
                const searchTerm = document.getElementById('searchInput').value;
                const genre = document.getElementById('genreFilter').value;
                
                let filteredMovies = filterMoviesBySearch(searchTerm);
                filteredMovies = filterMoviesByGenre(genre).filter(movie => 
                    filteredMovies.includes(movie)
                );
                
                const sortedMovies = sortMoviesByRating(filteredMovies, sortAscending);
                displayMovies(sortedMovies);
            });
            
            // Genre filter change event
            document.getElementById('genreFilter').addEventListener('change', () => {
                const searchTerm = document.getElementById('searchInput').value;
                const genre = document.getElementById('genreFilter').value;
                
                let filteredMovies = filterMoviesBySearch(searchTerm);
                filteredMovies = filterMoviesByGenre(genre).filter(movie => 
                    filteredMovies.includes(movie)
                );
                
                displayMovies(filteredMovies);
            });
            
            // Search input event (search as you type)
            document.getElementById('searchInput').addEventListener('input', () => {
                const searchTerm = document.getElementById('searchInput').value;
                const genre = document.getElementById('genreFilter').value;
                
                let filteredMovies = filterMoviesBySearch(searchTerm);
                filteredMovies = filterMoviesByGenre(genre).filter(movie => 
                    filteredMovies.includes(movie)
                );
                
                displayMovies(filteredMovies);
            });
        });
    