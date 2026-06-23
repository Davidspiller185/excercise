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

// שאלה 13

let x =1
while (x < 20){
    console.log(x)
    x+=1
}

// תרגיל 15

let count = 0
do {
    console.log(count)
}while (count > 0){
    count+=1
    console.log(count)
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
// תרגיל 23
const word = "hello world"
for (let char of word){
    console.log(char.toUpperCase())
}







