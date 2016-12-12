function fact(n) {
  if (n <= 1) {
    return 1
  }
  return n * fact(n - 1)
}

function recursiveMultiply(a, b) {
  if (b === 0) {
    return 1
  } else {
    return a * recursiveMultiply(a, b - 1)
  }
}

function sumNat(n) {
  if (n === 0) {
    return 0
  } else {
    return n + sumNat(n - 1)
  }
}

function gcd(a, b, n = b) {
  if (b > a) {
    return gcd(b, a)
  } else {
    if (a % n === 0 && b % n === 0) {
      return n
    } else {
      return gcd(a, b, b - 1)
    }
  }
}

function reverseString(str, num = str.split(' ').length) {
  if (num === 0) {
    return ""
  } else {
    var words = str.split(' ')
    var word = words.pop()
    return word + " " + reverseString(words.join(" "), num - 1)
  }
}
