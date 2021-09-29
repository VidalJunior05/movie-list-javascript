fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
    method: 'GET'
})
.then(response => response.json())
.then(function(json){
    var container = document.querySelector('.container');

   //console.log(json);
   json.results.map(function(val){
        container.innerHTML+=`
        <div  class="titleMovie"><span class="titles">Movie title: </span>`+val.title+`
            <div class="button">View more</div>
            <div class="description"><span class="titles">Description title: </span>`+val.overview+`</div>
            <div class="popularity"><span class="titles">Movie popularity: </span>`+val.popularity+`</div>
            <hr>
        </div>`;
   })

   var description  = document.querySelectorAll('.description');
   var button = document.querySelectorAll('.button');

  for(let i = 0; i < description.length ; i++){
    button[i].addEventListener('click', ()=>{
       if(description[i].style.display = 'none'){
            description[i].style.display = 'block';
       }else{
            description.style.display = 'none';
       }    
    });
  }
})  