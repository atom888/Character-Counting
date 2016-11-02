//Lighthouse Labs W1D3 exercise - Character Counting //

function countLetters(str) {
  var characters = str.split(" ").join(""); // taking string and removing spaces and joining character together.
  var freq = {}; // creating open object
    for (var i = 0; i < characters.length; i+= 1) { // running through the character string
      var letter = characters.charAt(i); // storing each character as a key
      if (freq[letter]) { //
        freq[letter] ++;
      } else {
        freq[letter] = 1;
      }
    }
    return freq;
}

console.log(countLetters("lighthouse in the house"));