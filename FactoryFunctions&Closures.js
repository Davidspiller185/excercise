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


// תרגיל 19
function multiplier(num1){
    return function double(num2){
        return num1 * num2
    }
    
}
const muliObject = multiplier(2)
console.log(muliObject(10))

// תרגיל 20
function getSrting(str){
    let prefix = "hello "
    return function (){
        prefix = prefix + str
        return prefix
    }

}
const get = getSrting("dana")
console.log(get())

// 23,22,תרגיל 21
function saveMessage(){
    let counter = 1
    let arr
    if (counter === 1){
            arr = []
    }
     function addMessage(message){
        arr.push(message)
        counter ++
        return `add message ${message}`
        
    }
    function returnMessage(){
        return arr
    }
    function deleteMessage(index){
        let flage = false
        for (let i =0; i<arr.length; i++){
            if (i === index){
                flage = true
                arr.splice(index,1)
                return "deleted message"
            }
        }
        if (!flage){
            return "index not in arr"

        }

    }
    return {
        addMessage,
        returnMessage,
        deleteMessage
    }

}
let objMessage = saveMessage()
console.log(objMessage.addMessage("my name is david"))
console.log(objMessage.addMessage("my name is Avi"))
console.log(objMessage.returnMessage())
console.log(objMessage.deleteMessage(1))
console.log(objMessage.returnMessage())

// תרגיל 24
function userFactory(name){
    let counter = 0
    return  function login(){
        counter ++
        return {name,counter}
    }

}
const userFactor = userFactory("david")
console.log(userFactor())
console.log(userFactor())

// תרגיל 25
function roles(){
    const arrRoles = []
    let object = {"roles":arrRoles}
    function add (roles){
        arrRoles.push(roles)
        object.roles = arrRoles
        return object
    }
    function remove(roles){
        let flage =false
        for (let i = 0; i<object.roles.length; i++){
            if (object.roles[i] === roles){
                flage = true
                object.roles.splice(i,1)
            } 
        }
        if (!flage){
            return "ca nor remove, roles not exciste "
        }
        return object
    }
    function chechAdd(roles){
        for (let i = 0; i<object.roles.length; i++){
            if (object.roles[i] === roles){
                return true
    }
    return false
} }
    return {
        add,
        remove,
        chechAdd
    }
}
const role = roles()
console.log(role.add("write"))
console.log(role.add("read"))
console.log(role.remove("write"))
console.log(role.chechAdd("read"))












