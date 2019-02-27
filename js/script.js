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
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/",
    tag: "Mindfulness"
  },
  {
    quote: "When we get too caught up in the busyness of the world, we lose connection with one another -- and ourselves.",
    source: "Jack Kornfield",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/",
    tag: "Mindfulness"
  },
  {
    quote: "Let go of your mind and then be mindful. Close your ears and listen!",
    source: "Jalauddin Rumi",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/",
    tag: "Mindfulness"
  },
  {
    quote: "Look at other people and ask yourself if you are really seeing them or just your thoughts about them.",
    source: "Jon Kabat-Zinn",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/",
    tag: "Mindfulness"
  },
  {
    quote: "When I'm hungry, I eat what I love. When I'm bored, I do something I love. When I'm lonely, I connect with someone I love. When I feel sad, I remember that I am loved.",
    source: "Michelle May",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/",
    tag: "Mindfulness"
  },
  {
    quote: "The things that matter most in our lives are not fantastic or grand. They are moments when we touch one another.",
    source: "Jack Kornfield",
    citation: "https://www.developgoodhabits.com/mindfulness-quotes/",
    tag: "Mindfulness"
  },
  {
    quote: "The first step toward your success is the one 'you' take, not someone else.",
    source: "Ricky DeFazio",
    year: 2018,
    tag: "Motivation"
  },
  {
    quote: "The usefulness of having a goal isn't it's eventual attainment, but rather the actions it manifests.",
    source: "Ricky DeFazio",
    year: 2018,
    tag: "Motivation"
  }
];

/*
  Chooses a random object from quotes array.
*/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*
  Shows new quote every 20 seconds.
*/

const autoChangeQuote = window.setInterval(printQuote, 20000);

/*
  1. Stores random quote object in a variable. 
  2. Builds necessary html used to display chosen information on web page.
  3. Targets specific html ID to use as location for displaying information on web page.
  4. Calls function to change color of background.
*/

function printQuote() {
  const callQuote = getRandomQuote();
  let html = `
  <p id="quote">${callQuote.quote}</p>
  <p class="source"><strong>${callQuote.source}</strong>`;
  if (callQuote.hasOwnProperty("citation")){
    html += `<span class="citation">${callQuote.citation}</span>`;
  }
  if (callQuote.hasOwnProperty("year")) {
    html += `<span class="year">${callQuote.year}</span>`;
  }
  if (callQuote.hasOwnProperty("tag")) {
    html += `<p class="tag">Tag: <strong>${callQuote.tag}</strong>`
  }
  html += '</p>';
  document.getElementById("quote-box").innerHTML = html;
  changeColor(); 
}

/*
  Changes color to a random preset of colors.
*/

const changeColor = () => {
  const colors = ["blue", "yellow", "green", "purple", "red", "turquoise", "orange"];
  let colorPicker = Math.floor(Math.random() * colors.length);
  document.getElementById("quote").style.color = colors[colorPicker];
}

/*
  Creates button used to cycle random quotes.
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);