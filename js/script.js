/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Array of quote objects
let quotes = [
  {
    quote: 'A man knows when he is growing old because he begins to look like his father.',
    source: 'Gabriel García Márquez'
  },
  {
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    source: 'Robert Louis Stevenson'
  },
  {
    quote: 'The best time to plant a tree was forty years ago. The second best time is today. Don’t waste even one minute of your day.',
    source: 'Robin Sharma',
    citation: 'The Monk Who Sold His Ferrari',
    year: '1999'
  },
  {
    quote: 'Kindness is the language which the deaf can hear and the blind can see.',
    source: 'Mark Twain'
  },
  {
    quote: 'You cannot always control what goes on outside. But you can always control what goes on inside.',
    source: 'Dr. Wayne Dyer',
    citation: 'Manifest Your Destiny',
    year: '1998'
  },
  {
    quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    source: 'Maya Angelou'
  }
];

/***
 * `getRandomQuote` function
***/

//Function creates a random number and returns a random quote from the 'quotes' array
function getRandomQuote() {
  //Random number between zero and last index in the 'quotes' array
  const randomNumber = Math.floor(Math.random() * quotes.length);

  //Random object from 'quotes' array 
  let randomQuoteObject = quotes[randomNumber];
  return randomQuoteObject;
}

/***
 * `printQuote` function
***/

//Function assembles HTML string using random quote object and respective(existing) quote properties
function printQuote() {
  let randomQuote = getRandomQuote();

  //Create HTML string with quote and source properties
  let htmlString = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;

  //Concatenate existing citation property 
  if (randomQuote.citation) {
    htmlString += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  //Concatenate existing year property
  if (randomQuote.year) {
    htmlString += "<span class='year'>" + randomQuote.year + "</span>";
  }

  //Close HTML string
  htmlString += "</p>";

  //Set innerHTML of 'quote-box' equal to final HTML string
  document.getElementById('quote-box').innerHTML = htmlString;

  //Final code test
  console.log(randomQuote); //random quote object
  console.log(randomQuote.source); //source property of the random quote object
  console.log(randomQuote.year); //year property of the random quote object
  console.log(htmlString); //complete HTML string
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);