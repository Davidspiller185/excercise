// תרגיל 1
const numbers = [1,2,3]
console.log(numbers)

// תרגיל 2
const fruits = ["apple","banana","cherry"]
console.log(fruits[0],fruits[2])

// תרגיל 3
fruits[1] = "mango"
console.log(fruits)

// תרגיל 4
fruits.push("orange")

// תרגיל 5

const result =fruits.pop()
console.log(fruits)

// תרגיל 6

fruits.unshift("kiwi")
console.log(fruits)

// תרגיל 7
fruits.shift()
console.log(fruits)

// תרגיל 8
const arr = ["a","b","c","d"]
arr.splice(1,1)
console.log(arr)

// תרגיל 9
const arr1 = ["a","b","c","d"]
arr1.splice(1,0,"x")
console.log(arr1)

// תרגיל 10
arr.splice(2,1,"y")
console.log(arr)

// תרגיל 11
const arr3 = [1,2,3,4]
console.log(arr3.length)
console.log(arr3[3])

//תרגיל 12 
const arr4 = [1,"david",true]
for (const item of arr4){
    console.log(item)
}

// תרגיל 13
const nums = [10,20,30]
for (const num of nums){
    console.log(num)
}

// תרגיל 14
const arr5 = [15,10,5]
sum_numbers = 0
for (const num of arr5){
    sum_numbers+=num
}
console.log(sum_numbers)

// תרגיל 15
const arr6 = [1,12,8,3]
for (const num of arr6){
    if (num > 5){
        console.log(num)
    }
}


//תרגיל 16
const person = {
    name: "david spiller",
    age:28
}
console.log(person)

// תרגיל 17
const person1 = {
    name: "Dan",
    age:25
}
console.log(person1.name,person1.age)
console.log(person1["name"],person1["age"])

// תרגיל 18
const city = "jerusalem"
Object.assign(person1,{city})
person1["age"] = 30
console.log(person1)

// תרגיל 19
delete person1.age
console.log(person1.age in person1)

// תרגיל 20

const student = {
    name:"yael",
    grades: [90,80,100]
}
console.log(student.grades[0])
student.grades.push(85)
student.grades.splice(1,1)
console.log(student.grades)

// תרגיל 21
const product = {
    name:"Laptop",
    price:3500,
    inStock:true
}
for (const key in product){
    console.log(`${key}:${product[key]}`)
}

// תרגיל 22
const user = {
    username:"admin",
    role:"manager",
    active:true
}
arayKey=Object.keys(user)
arrayValue=Object.values(user)
console.log(arayKey)
console.log(arrayValue)
for (const item of arayKey){
    console.log(`${item} = ${user[item]}`)
}

// תרגיל 23
const order = {
    id:101,
    customer:{
        name:"Roi"
    },
    address:{
        city:"Tel Aviv",
        zip:"12345"
    }
}
console.log(order.address.city)
order.address.zip = "123456"
order.customer["phone"] = "0546535150"
delete order.address.city
console.log(order)

