/**
 * This function reterns an array containing the numbers from 1 to N, where N is the parametered value
 * and certain values are replaced if conditions are met
 * @param {integer} n The number of elements in the array
 * @returns 
 */
function fizzbuzz(n){
    let array = [...Array(n+1).keys()].slice(1)
    for(let i = 0; i < array.length; i++){
      if(array[i] % 5 === 0 && array[i] % 3 === 0){
        array[i] = "FizzBuzz"
      } else if(array[i] % 5 === 0){
        array[i] = "Buzz"
      } else if(array[i] % 3 === 0){
        array[i] = "Fizz"
      }
    }
    return array
  }