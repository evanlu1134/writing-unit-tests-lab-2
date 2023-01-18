function octalToDecimal(str) {
  return str.split("").reduce((prev, curr, i) => {
    return prev + Math.pow(8, str.length - 1 - i) * curr
  }, 0)
}

function anagram(str,arr) {
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

function triangle(s1,s2,s3) {
  const triangleType = [s1,s2,s3]
  return triangleType.reduce((a,b) => a + b,0) !== 180 || triangleType.some(n => n === 0) ? "invalid" : triangleType.every(n => n < 90) ? "acute" : triangleType.some(n => n > 90) ? "obtuse" : "right"
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
