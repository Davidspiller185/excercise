// תרגיל 1

for (let i=1;i<11;i++){
    console.log(i)

}

// תרגיל 2

for (let i=10;i>0;i--){
    console.log(i)
}

// תרגיל 3
// in - סוכם אינקסים או מפתחות of - סוכם ערכים עצמם
const number = [1,2,3,4,5]
let sum_number=0
for ( let num of number){
    sum_number+=num
}

console.log(sum_number)

// תרגיל 4 


const names=["דנה", "יוסי", "מיכל", "רון"]
for (let name of names){
    console.log(name)
}

// תרגיל 5

const number = [2,3,8,11,14,17,20]
for (let num of number){
    if (num %2 === 0){
        console.log(num)
    }
}

// תרגיל 6 

const numbers = [3,99,12,45,78]
let max_number = numbers[0]
for (let num of numbers){
    if (num >max_number){
        max_number = num
    }

}
console.log(max_number)

// תרגיל 7

const word = "javascript"

for (let char of word){
    console.log(char)
}

// תרגיל 8

const numbers = [1,2,3,4]
for (let num of numbers){
    console.log(num * 2)
}

// תרגיל 9

let number =1
while (number <=10){
    console.log(number)
    number+=1
}

// תרגיל 10
const prompt =require("prompt-sync")()
let input = ""
while (input !== "stop"){
    input = prompt(" Enter word ")
}

// שאלה 11

const promot =require("prompt-sync")()
let input = Number(promot("Enter number"))
let sum_number =0
while (input !== 0){
    sum_number+=input
    input = Number(promot("Enter number"))
}
console.log(sum_number)
//שאלה 12
const secret = 7
const prompt = require("prompt-sync")()
let input = Number(prompt("enter number"))
while(input !== secret){
    input = Number(prompt("enter number"))
}

// שאלה 13

let x =1
while (x < 20){
    console.log(x)
    x+=1
}

//שאלה 14
let password = ""
const prompt = require("prompt-sync")()
password = prompt("Enter a password")
while (password !== "1234"){
    password = prompt("Enter a password")
}


// תרגיל 15

let count = 0
do {
    console.log(count)
}while (count > 0){
    count+=1
    console.log(count)
}

//תרגיל 16
let choice
const prompt = require("prompt-sync")()
choice = prompt("to enter press: 1, to exit press:exit")
while (choice !== "exit"){
    choice = prompt("to enter press: 1, to exit press:exit")
}

// תרגיל 17

const numbers = [1,3,7,9,15,2]
for (let num of numbers){
    if (num > 10){
        break
    }
    console.log(num)
}

// תרגיל 18
const numbers = [5,-1,8,-3,10]
for (let num of numbers){
    if (num <=0){
        continue
    }
    console.log(num)
}

//>תרגיל 19

const ages = [12,15,18,21,25]
for (let num of ages){
    if (num >=18){
        console.log(`the number is:${num}`)
        break
    }
}

//תרגיל 20
const arr = [10,20,30,40,50]
for (num of arr){
    console.log(num)
}

// תרגיל 21
const numbers = [1,2,3,4,5,6]
let total =0
for (num of numbers){
    if (num %2 === 0){
        total +=num
    }
}
console.log(total)

//תרגיל 22
const target = 25;
const numbers = [10, 15, 20, 25, 30];
let flag = false
for (num of numbers){
    if (num === target){
        flag = true
        console.log("found target")
    }
}
if (!flag){
    console.log("not found target")
}

// תרגיל 23
const word = "hello world"
for (let char of word){
    console.log(char.toUpperCase())
}

// תרגיל 24
const numbers = [2, 4, 6, 8, 10, 12,13]
for (const num of numbers){
    if (num >8 && num %2 === 0){
        break
    }
    else{
        console.log(num)
    }
}


// תרגיל 1
const age = 20
if (age>=18){
    console.log("מבוגר")
}
else{
    console.log("קטין")
}

// תרגיל 2
const number = 7
if (number % 2 === 0){
    console.log("even")
}
else{
    console.log("not even")
}

// תרגיל 3
const isLoggedIn = true
if (isLoggedIn){
    console.log("ברוך הבא")
}
else{
    console.log("אנא התחבר")
}

// תרגיל 4
const num = -5
if (num >0){
    console.log("חיובי")
}
else if (num === 0){
    console.log("אפס")
}
else{
    console.log("שלילי")
}






