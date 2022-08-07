let input=document.querySelector(".form-control");
let movieData=document.querySelector(".movieData");

function getMovieData(){
    let movieName=input.value.toLowerCase();
    const API='https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=1'
    fetch(API).then(res=>res.json()).
    then(movie=>{
         console.log(movie);
         for(let i=0;i<movie.results.length;i++){
            let datamovie=movie.results[i].title.toLowerCase()
        if(datamovie.includes(movieName)){
            movieData.innerHTML=`<center><h1>${movie.results[i].title}</h1></center><br>
            <center><img src="https://image.tmdb.org/t/p/original${movie.results[i].backdrop_path}"  alt="" width="370vh" height="200vh"/></center><br>
             <p>
             <b>Plot</b>: ${movie.results[i].overview}<br><br>
             <b>Release Date: </b>${movie.results[i].release_date}<br>
             <br><b>Ratings: </b>${movie.results[i].vote_average}</p>
            `
        }else{
            movieData.innerHTML=`<center><h1>Movie not found</h1></center>`
        }
        
    }

    })
}