//simple randome quote generator
//create a list of 5 quotes from anywhere you like
//There must be a function that selects randome quotes from the list to be printed to the console
//Create a program to log a random quote to the console

//Create a list of quotes
var quotes = [
  "Better to remain silent and be thought a fool than to speak out and remove all doubt.",

  "If I were two-faced, would I be wearing this one?",

  "The best thing about the future is that it comes one day at a time.",

  "The only mystery in life is why the kamikaze pilots wore helmets.",

  "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
];

//Create function that accepts a quote and prints it to the console
function newQuote(arr) {
  let rand = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[rand];
};
 
function addQuote() {
  let addInput = quotes;
  let add = document.getElementById("userinput").value;
  if( add ==="" ){
      alert("Please add a quote! :c");
  }
  else{
  addInput.push(add);
  document.getElementById("userinput").value = "";
  };
};
