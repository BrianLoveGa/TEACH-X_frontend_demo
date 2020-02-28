console.log("test");

///// show  comments for a standard

let first = document.getElementById("item1");
first.addEventListener("click", showStuff());

function showStuff() {
  let commentsOne = document.getElementById("hide1");
  commentsOne.style.display = block;
}
