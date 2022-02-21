let apiQuotes = []
let currentQuote = document.getElementById('quote');
let currentAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new_quote');

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  setQuote();
}

function setQuote() {
  currentQuote.innerText = quote.text;
  currentAuthor.innerText = quote.author;
}
// Get Quotes from API
async function getQuotes () {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    
  }
}

// Event listeners
newQuoteButton.addEventListener('click', getQuotes);