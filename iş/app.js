const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let title = card.innerText.toLowerCase();

if(title.includes(filter)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

}

console.log("FLIX TV Hazır");
