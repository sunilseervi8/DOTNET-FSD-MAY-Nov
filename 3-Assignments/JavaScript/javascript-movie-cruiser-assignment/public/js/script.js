

var moviesListDataa = [];
var favouriteData = []



async function getMovies() {
    console.log("hi");
    
	try {
        const response = await fetch('http://localhost:3000/movies');
        const movies = await response.json();
        console.log(movies);
        

		moviesListDataa = movies;

        const moviesList = document.getElementById('moviesList');
        moviesList.innerHTML = ''; 
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.innerHTML=`
            <h3>${movie.title}</h3>
            <img src="${movie.posterPath}" style="height: 300px; width: 300px;"/>
            `
          

            moviesList.appendChild(li);
            li.classList.add('movie-item');

            const favbtn=document.createElement('button');
            favbtn.textContent="Add to Favourites";
            moviesList.appendChild(favbtn);
            favbtn.addEventListener('click',()=>{
                addFavourite(movie.id);
            })
        });

        return movies;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }

}

async function getFavourites() {
	try {
        const response = await fetch('http://localhost:3000/favourites');
        const favourites = await response.json();
        favouriteData = favourites;

        const favouritesList = document.getElementById('favouritesList');
        favouritesList.innerHTML = ''; 

        favourites.forEach(favourite => {
            const li = document.createElement('li');
            li.innerHTML=`<h3>${favourite.title}</h3>
            <img src="${favourite.posterPath}" style="height: 300px; width: 300px;"/>
            `

            const delbtn=document.createElement('button');
            delbtn.textContent="Remove from Favourites";
            favouritesList.appendChild(li);
            favouritesList.appendChild(delbtn);
            delbtn.addEventListener('click',()=>{
                removeFavourite(favourite.id);
            })
        });

        return favourites;
    } catch (error) {
        console.error('Error fetching favourites:', error);
        throw error;
    }

}

async function addFavourite(movieId) {
	try {
        // Fetch the list of movies and favourites
        
        const favourites = favouriteData;
		const movies = moviesListDataa;


        // Find the movie to be added by its ID
        const movie = movies.find(m => m.id === movieId);
        if (!movie) {
            throw new Error('Movie not found');
        }

        // Check if the movie is already in the favourites list
        const isAlreadyFavourite = favourites.some(fav => fav.id === movieId);
        if (isAlreadyFavourite) {
            throw new Error('Movie is already added to favourites');
        }

        // Add the movie to the favourites
        const response = await fetch('http://localhost:3000/favourites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        });

        const newFavourite = await response.json();

        // Update the DOM with the new favourite movie
        const favouritesList = document.getElementById('favouritesList');
        const li = document.createElement('li');
        li.textContent = newFavourite.title;
        favouritesList.appendChild(li);

        // getFavourites();
        favouriteData.push(newFavourite);

        return favouriteData;
    } catch (error) {
        console.error('Error adding favourite:', error.message);
        throw error;
    }

}

async function removeFavourite(movieId) {
    console.log("delete function entered");
    
    try{
        const response=await fetch(`http://Localhost:3000/favourites/${movieId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
    }catch(error){
        console.error('Error removing favourite:', error.message);
        
    }
}



module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


