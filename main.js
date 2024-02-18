let heading = document.getElementById("heading");
let author = document.getElementById("author");
let button = document.getElementById("button");
const url = "https://api.quotable.io/random";

button.addEventListener("click", getQuote);

function getQuote() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      var numberofstring = item.content.length;
      if (numberofstring <= 150) {
        heading.innerHTML = `" ${item.content} "`;
        author.innerText = `- ${item.author}`;
      } else {
        heading.innerHTML = "Warning...! Try Again.";
        author.innerText = "";
      }
    });
}
