document.querySelector("#generate").addEventListener("click", () => {
    generate();
});

generate=()=>{

    console.log("Hello");
var quotes = {
 "Walt Disney.": '"All our dreams can come true, if we have the courage to pursue them"',
 "Mark Twain": '"The secret of getting ahead is getting started."',
 "Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
 "Babe Ruth" : '"It’s hard to beat a person who never gives up."',
 "Leah Busque" : '"I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours."',
 "Michele Ruiz" : '"If people are doubting how far you can go, go so far that you can’t hear them anymore"',
 "Joss Whedon" : '"Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE."', 
 "Arianna Huffington" : '"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success."',
 "John D. Rockefeller": "Don’t be afraid to give up the good to go for the great.",
 "Ray Croc": '"Nothing in the world can take place of persistence. Talent wont, genious wont, Education wont, but only persistence."'
};

// var authors = Object.keys(quotes);

// var author = authors[Math.floor(Math.random()* authors.length)];

  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  var quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;

};

