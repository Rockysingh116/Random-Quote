// const quotes = [
//     { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
//     { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
//     { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
//     { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
//     { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
// ];

// Creating function to get random quote

fetch('Quote.json')
.then(response => response.json())
.then(Quote => {
    function generateRandomQuote(){
    const randomIndex = Math.floor(Math.random() * Quote.length);
    const randomQuote = Quote[randomIndex];

    // Display the quote and author name
document.getElementById('quote').innerHTML = `"${randomQuote.quote}"`;
document.getElementById('author').innerHTML = `--${randomQuote.author}`;
}
generateRandomQuote();

document.getElementById('btn').addEventListener('click', generateRandomQuote);
})
.catch(Error => console.error('Error:', Error));
