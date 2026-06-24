// תרגיל 1
function myname(name){
    const object = {name}
    return object
}
console.log(myname("david"))

// תרגיל 2
function nameObject(name){
    return {
        name,
        greet(){
            return `hey i am ${this.name}`
        }
    }
    
}
const person=nameObject("david")
console.log(person.greet())

// תרגיל 3
function createObject(name){
    return {name}
}
const object1 = createObject("david")
const object2 = createObject("Avi")
object1.name = "Dani"
console.log(object1.name,object2.name)

// תרגיל 4
function addAge(name,age){
    return {name,age}

}
console.log(addAge("david",28))

// תרגיל 5
function userObject(name,password,age){
    return {
        name,
        password,
        age,
        user () {
            if (this.age > 18){
                return true
            }
            return false
  }
 }
}
const userObj = userObject("david","324645126",28)
console.log(userObj.user())

//תרגיל 6, תרגיל 7
function outer(){
    let counter = 0
     return function inner(){
        counter ++
        return counter
    }
    
}
const count = outer()
console.log(count())
console.log(count())
console.log(count())

// תרגיל 8
function paramCount(counter){
    return function inner(){
         counter ++
         return counter        
    }
}
const result =paramCount(10)
console.log(result())
console.log(result())
console.log(result())

//10,תרגיל 9
function Count(counter){
    function inner(){
         counter ++
         return counter        
    }
     function decrese(){
         counter --
         return counter        
    }
    function current(){
        return counter
    }
    return {
        inner,
        decrese,
        current
    }
    
}
const obj =Count(10)
console.log(obj.inner())
console.log(obj.inner())
console.log(obj.decrese())
console.log(obj.decrese())
obj.inner()
obj.inner()
console.log(obj.current())

// תרגיל 11
function Factory(){
    let counter = 0
    function increment(){
        counter ++
        return {counter}
    }
    return increment 
}
const facto = Factory()
console.log(facto())

// 13,תרגיל 12
function count1(){
    let count = 0
    function addCount(){
        count++
        return count
    }
    function toZerro(){
        count = 0
        return count
    }
    return {
        addCount,
        toZerro
    }
}
const clous = count1()
console.log(clous.addCount())
console.log(clous.toZerro())

// תרגיל 14
function state(){
    let count1 = 0
    let count2 = 0
    function addCount1(){
        count1++
        return count1
    }
    function addCount2(){
        count2++
        return count2
    }
    return {
        addCount1,
        addCount2
    }
}
const counters = state()
console.log(counters.addCount1())
console.log(counters.addCount1())
console.log(counters.addCount2())

//18,17,16,תרגיל 15
function factory(name,price,stock = 0){
    if (price <=0){
        throw new Error("price can not be negative")
    }
    const object = {name,price,stock}
    function available(){
        if (object.stock > 0){
            console.log(true)
        }
        else{
            console.log(false)
        }
        return object
    }
    return available
}
const factor =factory("telephon",120,240) 
console.log(factor()) 

// תרגיל 16










