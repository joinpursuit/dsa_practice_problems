function subsets(arr, output = [[]]) {
  console.log(output)
  if (arr.length === 0) {
    return output
  } else {
    let add = arr.shift() // 1
    let added = output.map(function(el){
      return el.concat(add)
    }) // [[1]]
    return subsets(arr, output.concat(added))
  }
}
// console.log(subsets([1, 2]))
console.log(subsets([1, 2, 3, 4]))
// console.log(subsets([1, 2, 3, 4]))
// console.log(subsets([1, 2, 3, 4, 5]))
