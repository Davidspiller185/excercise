// // תרגיל 1
// function getName(name){
//     return  ` hello ${name}`
// }
// console.log(getName("david"))

// // תרגיל 2
// function getNumber(num1,num2){
//     return num1 + num2
// }

// console.log(getNumber(5,7))

// // תרגיל 3
// function numberBool(number){
//     if (number %2 ==0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// // תרגיל 4
// function getArray(array){
//     return array[0]
// }

// // תרגיל 5
// function getString(str){
//     return str.toUpperCase()
// }

// // תרגיל 6

// let x =5
// function test(){
//     let x = 10
//     console.log(x)
// }
// test()
// console.log(x) 

// // תרגיל 7

// let y = 5
// function test(){
//     y =10
// }
// test()
// console.log(y)
    
// // תרגיל 8
// let x =1
// function a(){
//     console.log(x)
// }
// function b(){
//     let x = 2
//     a()
// }
// b()

// // תרגיל 9
// function a(){
//     let x = 10

// }
// function b(){
//     a()
//     console.log(x)
// }
// b()

// תרגיל 10
// function a(){
//     let count = 0

// function add(){
//     count++
//     console.log(count)
// }
// return add 
// }
// inner=a()
// inner()
// inner()

// // תרגיל 11
// function getArray(array){
//     sum_number = 0
//     for (num of array){
//         sum_number += num

//     }
//     return sum_number
// }

// console.log(getArray([1,2,3]))

// תרגיל 12

// function getNumber(number){
//     return number **2
// }
// function calc(){
//     let result =getNumber(5)
//     console.log(result)
// }
// calc()

// תרגיל 13

// let x= 10
// function test(x){
//     return x *2
// }
// console.log(test(5))

// תרגיל 14
// function getAraay(array){
//     lstEven = []
//     for (num of array){
//         if (num % 2 == 0){
//             lstEven.push(num)

//         }
//     }
//     return lstEven
// }
// console.log(getAraay([1,2,3,4,5,6]))

// // תרגיל 15

// let total = 0
// function addTotal(num){
//     total += num
// }

// function reset(){
//     total = 0
// }
// addTotal(5)
// addTotal(10)
// reset()
// console.log(total)

// תרגיל 1
// function getNumber(number){
//     return number * 3
// }
// console.log(getNumber(5))

// תרגיל 2
// function getString(str){
//     return str.length
// }

// console.log(getString("david"))

// תרגיל 3
// function getNumber(num){
//     return num > 0 ? "חיובי" : num === 0 ? "אפס" : "שלילי"
// }
// console.log(getNumber(5))

// תרגיל 4
// function numbers(num1,num2){
//     console.log(Math.max(num1,num2))
// }
// numbers(5,7)

// // תרגיל 5
// function getArray(array){
//     return array.length
// }
// console.log(getArray([1,2,3]))


// const len = arr => arr.length

// console.log(len([1 ,2,3,4,4]))

// // תרגיל 6
// let a = 3
// function test(){
//     a =7
// }
// test()
// console.log(a)

// // תרגיל 7
// function test(){
//     let a = 5
// }
// test()
// console.log(a) // שגיאה כי זה משתנה שמוכר רקבבלוק הפונקצייה

// תרגיל 8

let x =10
function change(){
    let x = 20
}
console.log(x)

// תרגיל 9
let num = 1
function first(){
    num++
}
function second(){
    num = num +2
}
first()
second()
console.log(num)

// תרגיל 10
// let message = "hi javascript"
// function print(){
//     console.log(message)
// }

// function outer(){
//     let message = "hi javascript"
//     return inner

// function inner(){
//     console.log(message)
// }
// }
// get_inner=outer()
// get_inner()

// תרגיל 11
function getArray(array){
    return Math.min(...array)
}
console.log(getArray([1,2,3,4,5]))

// תרגיל 12
function getTowNumber(number1, number2){
    if (number1%number2 == 0){

    }  
}

// תרגיל 13
function getArray(array){
    return array.join()
}
console.log(getArray(["1","2","3"]))

// תרגיל 14
let x = 5
function test(x){
    x = x +10
    return x
}
let result =test(x)
console.log(x)
console.log(result)



