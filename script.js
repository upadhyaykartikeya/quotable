const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.breakingbadquotes.xyz/v1/quotes/5";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
}

getquote(api_url);