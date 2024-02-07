for(let i = 0; i < 10; i++) {
  console.log(i)
}

let array = ['a', 'i', 'e', 'o', 'u']

for(let i = 0; i < array.length; i++) {
  if (array[i] === 'i') {
    continue
  }
  if (array[i] === 'o'){
    break
  }
  console.log(array[i])
}