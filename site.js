console.log("test");

///// show  comments for a standard
let commentsOne = document.getElementById("hide1");
let commentsTwo = document.getElementById("hide2");
let commentsThree = document.getElementById("hide3");
let commentsFour = document.getElementById("hide4");
let commentsFive = document.getElementById("hide5");

let first = document.getElementById("item1");
first.addEventListener("click", showStuff);

function showStuff() {
  commentsOne.style.display = "block";
}

function closeIt1() {
  commentsOne.style.display = "none";
}

let second = document.getElementById("item2");
second.addEventListener("click", showStuff2);

function showStuff2() {
  commentsTwo.style.display = "block";
}

function closeit2() {
  commentsTwo.style.display = "none";
}

let third = document.getElementById("item3");
third.addEventListener("click", showStuff3);

function showStuff3{
  commentsThree.style.display = 'block'
}

function closeIt3(){
  commentsThree.style.display = 'none'
}

let four = document.getElementById("item4");
four.addEventListener("click", showStuff4);

function showStuff4() {
  commentsFour.style.display = "block";
}

function closeIt4() {
  commentsFour.style.display = "none";
}
Í