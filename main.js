let apiQuotes = []
let currentQuote = document.getElementById('quote');
let currentAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new_quote');
const tweetButton = document.getElementById('twitter');
const loader = document.getElementById('loader');
const quoteContainer = document.getElementById('quote_container');

// Show loading
function loading () {
  loader.style.display = 'block';
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete () {
  loader.style.display = 'none';
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Set quote, Hide loader
  setQuote();
  checkQuoteLength();
  complete();
}

function setQuote() {

  currentQuote.innerText = quote.text;
  // check for null
  quote.author ?
  currentAuthor.innerText = quote.author :
  currentAuthor.innerText = 'Unknown';
}

// Check quote length
function checkQuoteLength() {
  quote.text.length > 50 ?
  currentQuote.classList.add('long_quote') :
  currentQuote.classList.remove('long_quote');
}


// Get Quotes from API
async function getQuotes () {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    
  }
}

// Tweet Quote
function tweetQuote () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${currentQuote.textContent} - ${currentAuthor}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteButton.addEventListener('click', getQuotes);
tweetButton.addEventListener('click', tweetQuote);