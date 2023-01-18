function octalToDecimal(str) {
  return str.split("").reduce((prev, curr, i) => {
    return prev + Math.pow(8, str.length - 1 - i) * curr
  }, 0)
}

function anagram() {
  //Write code here
}

function triangle() {
  //Write code here
}

function fridayThe13ths() {
  //Write code here
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
