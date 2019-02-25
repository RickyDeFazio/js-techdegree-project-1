/*
  Project 1 - Random Quote Generator
*/

/*
  Created array of quote objects containing: quote, source, citation, and year. 
*/

const quotes = [
  {
    quote: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
    source: "Dalai Lama",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/"
  },
  {
    quote: "When we get too caught up in the busyness of the world, we lose connection with one another -- and ourselves.",
    source: "Jack Kornfield",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/"
  },
  {
    quote: "Let go of your mind and then be mindful. Close your ears and listen!",
    source: "Jalauddin Rumi",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/"
  },
  {
    quote: "Look at other people and ask yourself if you are really seeing them or just your thoughts about them.",
    source: "Jon Kabat-Zinn",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/"
  },
  {
    quote: "When I'm hungry, I eat what I love. When I'm bored, I do something I love. When I'm lonely, I connect with someone I love. When I feel sad, I remember that I am loved.",
    source: "Michelle May",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/"
  },
  {
    quote: "The things that matter most in our lives are not fantastic or grand. They are moments when we touch one another.",
    source: "Jack Kornfield",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/"
  },
  {
    quote: "The first step toward your success is the one 'you' take, not someone else.",
    source: "Ricky DeFazio",
    year: 2018
  },
  {
    quote: "The usefulness of having a goal isn't it's eventual attainment, but rather the actions it manifests.",
    source: "Ricky DeFazio",
    year: 2018
  }
];

/*
  Chooses a random object from quotes array.
*/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*
  1. Stores random quote object in a variable. 
  2. Builds necessary html used to display chosen information on web page.
  3. Targets specific html ID to use as location for displaying information on web page.
*/

function printQuote() {
  const callQuote = getRandomQuote();
  let html = '';
  html += '<p class="quote">' + callQuote.quote + '</p>';
  html += '<p class="source">' + callQuote.source;
  if (callQuote.hasOwnProperty("citation")){
    html += '<span class="citation">' + callQuote.citation + '</span>';
  }
  if (callQuote.hasOwnProperty("year")) {
    html += '<span class="year">' + callQuote.year + '</span>';
  }
  html += '</p>';
  return document.getElementById("quote-box").innerHTML = html;
}

/*
  Creates button used to cycle random quotes.
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);