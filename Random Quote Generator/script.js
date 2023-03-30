const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateQuote = document.getElementById("generate-quote");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2192cadbf0msh2ab94c1eeb914e5p1d72bejsn8ae101a0ce21",
    "X-RapidAPI-Host": "quotable-api-motivational-funny-and-movie-quotes.p.rapidapi.com",
  },
};

async function quoteGenerator() {
  const response = await fetch("https://quotable-api-motivational-funny-and-movie-quotes.p.rapidapi.com/motivational_quotes", options)
  var data = await response.json();
  console.log(data);
  quote.innerText = data.quote;
  author.innerText = "Author:  " + data.author;
}

generateQuote.addEventListener("click", () => {
  quoteGenerator();
});


