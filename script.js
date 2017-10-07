//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi', // It's supposed to be "Gandhi."
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

var i = 0;
var oldestYear = speechesArray[0].year;
var newestYear = speechesArray[0].year;

while(i < speechesArray.length){
  console.log("This speech is written by " + speechesArray[i].author);
  i++;
};        


for (i = 0; i < speechesArray.length; i++) {
  if (speechesArray[i].year < oldestYear) {
    oldestYear = speechesArray[i].year;
  } else if (speechesArray[i].year > newestYear) {
    newestYear = speechesArray[i].year;
  }; 
};

/* In this case, regarding the window prompt functionality, there is no requirement to use the console.log within the while loop. I think you should maybe reconsider whether you want your console.log functions executing from within the loop. Note that code that follows the loop will still execute once the loop is finished - the `break` statement should only break us out of the while loop and not the entire click event. Consider setting some default variables before the loop runs, and then when you run your loop and your condition is met within that loop, set those variables again. After the loop has ran, try running another conditional check and execute either the correct log statement or the error warning statement. 

Try for loop outside of function / add variables / ??

*/

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  for (i = 0; i < speechesArray.length; i++) {
      if (favoriteSpeechPrompt === speechesArray[i].author) { 
          console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge + " during this speech.");
      }
  };
});


/* if (favoriteSpeechPrompt !== speechesArray.author) {
  console.log("Did you spell the author's name correctly?"); 
}; */


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
   console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);
   if (speechesArray[0].year <= oldestYear) {
      console.log("This is the oldest speech on the page.");
   } else if (speechesArray[0].year >= newestYear) {
      console.log("This is the most recent speech on the page.");
   };
}); 

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

   if (speechesArray[1].year <= oldestYear) {
      console.log("This is the oldest speech on the page.");
   } else if (speechesArray[1].year >= newestYear) {
      console.log("This is the most recent speech on the page.");
   };
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

   if (speechesArray[2].year <= oldestYear) {
      console.log("This is the oldest speech on the page.");
   } else if (speechesArray[2].year >= newestYear) {
      console.log("This is the most recent speech on the page.");
   };
});
