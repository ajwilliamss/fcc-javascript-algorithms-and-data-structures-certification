const palindrome = (str) => {
  // Remove all non-alphanumeric characters and set to lower case
  str = str.replace(/\W|_/g, "").toLowerCase();

  // Reverse the string
  let strReverse = str.split("").reverse().join("");

  // Check if the string is equal to the reversed string
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("&_%Eye#&%*%$_"));
