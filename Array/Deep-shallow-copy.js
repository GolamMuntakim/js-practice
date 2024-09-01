// const fruit = ['Mango', 'Apple', 'Orange']
// const myFruit = fruit
// myFruit.push('Dates')
// console.log(myFruit)

const evenNumber = [0,2,4,6,8]
evenNumber.some((num,i)=>{
console.log(num,i)
})
const result = evenNumber.some((num,i)=>{
return num % 2 === i
})
console.log(result)

