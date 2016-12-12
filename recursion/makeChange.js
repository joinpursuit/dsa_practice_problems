var usCoins = [25, 10, 5, 1]

function makeChange(amt, coins) {
  if (coins.length === 1 || amt === 0) {
    return 1
  } else if (coins.every(function(coin){return coin > amt})) {
    return 0
  }
  else {
    if (amt >= coins[0]) {
      var funcs = []
      for (var i = 0; i < coins.length; i++) {
        funcs.push(makeChange(amt - coins[i], coins.slice(i, coins.length)))
      }
      return funcs.reduce(function(a, b){return a + b})
    } else {
      return makeChange(amt, coins.slice(1, coins.length))
    }
  }
}


console.log(makeChange(30, usCoins))
