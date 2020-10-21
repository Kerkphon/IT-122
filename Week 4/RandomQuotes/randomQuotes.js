//simple randome quote generator
//create a list of 5 quotes from anywhere you like
//There must be a function that selects randome quotes from the list to be printed to the console
//Create a program to log a random quote to the console

//Create a list of quotes
var quotes = [
    "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    "Nobody realizes that some people expend tremendous energy merely to be normal.",
    "All the things I really like to do are either immoral, illegal or fattening.",
    "War is God’s way of teaching Americans geography.",
    "The average dog is a nicer person than the average person"
    
];

//Generate a random number between 0 and the number of quotes
var rand =Math.floor(Math.random() * quotes.length);

//Create function that accepts a quote and prints it to the console
function printQuotes(q){
    console.log(q)
}
