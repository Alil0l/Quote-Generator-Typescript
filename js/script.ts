type ApiObject = {
  text: string;
  author: string;
};
var quoteHolder = document.querySelector(".quote");
var author = document.querySelector(".author");
var btn = document.getElementById("generateQuote");
var faIcon = document.querySelector(".fa-wand-magic-sparkles");
var prevIndex: number;
var index: number;
var quotes: ApiObject[];

// Fetching the Quote With IIFE from FREECODECAMP API
(function randomQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => (quotes = data));
})();

btn!.addEventListener("click", () => newQuote());

// Generating a new quote with each click
function newQuote() {
  index = Math.floor(Math.random() * quotes.length - 1);
  //   If the random number was -1 then get 0 instead
  if (index < 0) index = 0;
  // Make sure we haven't generated the same quote before
  if (index === prevIndex) {
    // Check if we reached the end of the array or not
    if (index < quotes.length - 2) index++;
    else index--;
  }
  prevIndex = index;
  quoteHolder!.textContent = quotes[index].text;
  author!.textContent = quotes[index].author;
  faIcon!.classList.add("fa-shake");
  setTimeout(() => {
    faIcon!.classList.remove("fa-shake");
  }, 200);
}
