function octalToDecimal(str) {
  return str.split("").reduce((prev, curr, i) => {
    return prev + Math.pow(8, str.length - 1 - i) * curr
  }, 0)
}

function anagram(str) {
  const result = []
  const cloneStr = str.split("").sort().join("")
  for (let eles of arr) {
    if (cloneStr.length === eles.length) {
      const sort = eles.split("").sort().join("")
      console.log(sort)
      if (cloneStr === sort) result.push(eles)
    }
  }
  return result
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
