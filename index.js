function findAllPermutations(string){
  solution = []
  array = string.split('')

  for (let letter of array){
    array = array.filter(el => el !== letter)
    let index = 0
    while (index < array.length){
      let i = array.length
      array.splice(index, 0, letter)
      if (!solution.includes(array.join(''))){
        while(i >= 0){
          let first = array.shift()
          array.push(first)
          solution.push(array.join(''))
          i -= 1
        }
      }
      array = array.filter(el => el !== letter)
      index +=1
    }
    array.push(letter)
  }
  return solution
}
