const apiurl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const postermovie = document.getElementById("posterofmovie")
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getmovie(apiurl);

async function getmovie(url){
     main.innerHTML = "";
const res = await fetch(url);
const respodata = await res.json();
const poster = respodata.results.forEach(movie =>{
    
    const div = document.createElement('div')
    div.classList.add("container")
    div.innerHTML = `
   
    <div class="poster">
    <img src="${IMGPATH + movie.poster_path}" alt="${movie.overview}" class="images">
    </div>
    <div class="movie_info">
        <div class="title">
            <h3>${movie.title}</h3>
        </div>
        <div class="rating">
            <span>${movie.vote_average}</span>
        </div>
        
    </div>

    `

    main.appendChild(div)
});

}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getmovie(SEARCHAPI + searchTerm);

        search.value = "";
    }
});