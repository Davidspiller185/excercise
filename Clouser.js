// תרגיל 1
function createLogger(){
    const word = "Hello"
    return function hello(){
        console.log(word)
    }
}const inner = createLogger()
inner()
inner()

// תרגיל 2

function createGreeting(name){
    const myName = name
    return function consoleName(){
        console.log(`Hello ${myName}`)
    }
}
const result = createGreeting("david")
result()

// תרגיל 3
function creatrCounter(){
    let count = 0
    return function increment(){
        count +=1
        console.log(count)
    }
}
const calc = creatrCounter()
calc()
calc()
calc()

// תרגיל 4
//"יודפס 10 כיוון שהפונקצייה החיצונית החזירה את הפונקצייה הפנימית ובהפעלת הפונקצייה הפנימית היא זוכרת את משתנה הסביבה  "

// תרגיל 5
function createMultiplier(x){
    return function (number) {
        console.log(number * x)
    }
}
const double = createMultiplier(2)
double(5)

// תרגיל 6
function createAdder(x){
    return function (number) {
        console.log(number + x)

    }
}
const add5 = createAdder(5);

add5(3)

// תרגיל 7
function createSecret(){
    let secret = 4
    function getSecret(){
        return secret
    }
    function setSecret(num){
        secret = num
        return getSecret()
    }
    return {getSecret,setSecret}
}
const outer = createSecret()
console.log(outer.getSecret())
console.log(outer.setSecret(5))

//תרגיל 8
function add(a,b){
    return a + b
}
function once(fn){
    let counter = 0
    return function (){
        counter += 1
        if (counter === 1){
         return fn(5,7)
    }
}
}
const cal = once(add)
console.log(cal())
console.log(cal())
console.log(cal())

// 12 תרגיל 
function createStack(){
    let arr = []
    return {
    push: function(num){
        arr.push(num)
    },
    pop: function(){
        arr.pop()
    },
    peek: function(){
        return arr[arr.length -1]
    }
    }
}
const stack = createStack()
stack.push(5)
stack.push(6)
stack.push(7)
stack.pop()
console.log(stack.peek())

// תרגיל 13
function  createIdGenerator(){
    let id = 0
    return function (){
        id ++
        return id
    }
}
const gen = createIdGenerator()
console.log(gen())
console.log(gen())

// תרגיל 15
function createBankAccount(initialBalance){
    let balance = initialBalance
    function deposit(amount){
        balance += amount
        
    }
    function withdraw(amount){
        balance -= amount
    }   
    function getBalance(){
        return balance

    }
    return {deposit,withdraw,getBalance}
}
const acount = createBankAccount(100)
acount.deposit(100)
acount.withdraw(50)
console.log(acount.getBalance())

