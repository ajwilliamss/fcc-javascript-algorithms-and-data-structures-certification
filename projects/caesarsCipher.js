const rot13 = (str) => {
  // Store the alphabet in a string (all uppercase)
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Create a variable to store the answer
  let answer = "";

  // Iterate over str with for loop
  for (let i = 0; i < str.length; i++) {
    // Get the index position of each letter in the alphabet string
    // console.log(alphabet.indexOf(str[i]));

    // A -> M and non-alphabetic characters
    if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
      // Store letter in answer
      answer += alphabet[alphabet.indexOf(str[i]) + 13];
    } else if (alphabet.indexOf(str[i]) >= 13) {
      // N -> Z
      answer += alphabet[alphabet.indexOf(str[i]) - 13];
    } else {
      // Display spaces
      answer += str[i];
    }
  }
  return answer;
};

console.log(rot13("SERR PBQR PNZC"));
