// WELCOME MESSAGE:

// function displayWelcomeMessage() {
//     let userName = prompt("Enter Your Name");
//     alert(`Welcome ${userName}`);
// }

// displayWelcomeMessage();


// *********************************************************************************


// QUOTE GENERATOR:

function generateQuote() {
    const quotes = [
      "Tim Cook",
      "Albert Einstein",
      "Steve Jobs",
      "Alan Turing",
      "Albert Einstein",
      "Alan Kay",
      "Steve Jobs 01",
      "Steve Jobs 02",
      " George Bernard Shaw",
      " Jimmy Johnson",
      "Sundar Pichai",
      "John F. Kennedy",
      "Steve Jobs",
      "Albert Einstein",
      "William Gibson",
      "Marissa Mayer",
      "Elon Musk",
    ];
  
    let randomNumber = Math.floor(((Math.random()) * quotes.length));
    alert(quotes[randomNumber]);
  }
  
  generateQuote();



// ************************************************************************************************



// RANDOM NUMBER GENERATOR:

// function  generateRandomNumber() {
//     let randomNumber = Math.floor(((Math.random()) * 101));
//     alert(randomNumber);
// }

// generateRandomNumber();