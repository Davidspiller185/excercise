

// תרגיל 2
const word = ["hello","world"]
word.map((item,index) => word[index] = item.toUpperCase())
console.log(word)



// תרגיל 4
const arr1 = [1,2,3,4,5,6]
const arrfilter = arr1.filter(num =>num%2 == 0)
console.log(arrfilter)

// תרגיל 8
const prices =[20,30,40,120,150,250]
const pricesFilter = prices.filter(num => num>100)
const pricesMap = pricesFilter.map(num => num * 1.1)
console.log(pricesMap)

// תרגיל 10
const arr2 = [20,40,60]
const dubble = arr2.reduce((acc,current) => acc * current, 1)
console.log(dubble)

// תרגיל 12
const arrAge = [22,34,50,23,40]
const total = arrAge.reduce((acc,curent) => acc + curent,0)
console.log(total/arrAge.length)

//תרגיל 25
const arr3 = [30,40,50]
const arrSort = arr3.sort((a,b) => b-a)
console.log(arrSort)

// תרגיל 29
const arr4 = [20,34,56,80,90]
arr4.splice(1,2)
console.log(arr4)

// תרגיל 32
const arr5 = [[1,2,3,4,5]]
const arrFlat = arr5.flat()
console.log(arrFlat)

// תרגיל 36
const chain = [1,2,3,4,5,6]
const evens = chain.filter(num => num %2 === 0).map(num => num *2).reduce((acc,curent) => acc+curent,0)
console.log(evens)

// תרגיל 38
const item = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }]
const itemReduse =item.reduce((acc,curent) => {
const type = curent.type
if (!(acc[item.type])){
    acc[type] =[]
} acc[type].push(curent)
  return acc

},{})
console.log(itemReduse)

// תרגיל 39
 
const newArr = []
function chekDuble(aray){
    for (const num of aray){
        if (newArr.includes(num)){ 
         return "you have duble number"
        }
       else{
         newArr.push(num)
}
    }
    return "you have not duble number"
}
console.log(chekDuble([1,2,2,3,4,4,5,6]))

// תרגיל 41
const products = [

  { name: "Laptop", price: 800, inStock: true,  category: "tech"    },

  { name: "Phone",  price: 400, inStock: false, category: "tech"    },

  { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" },

  { name: "Laptop",  price: 120,  inStock: true,  category: "tech" }

];
const result = products.filter(prod => prod.inStock === true && prod.price >100).sort((a,b) => a.price - b.price ).map(prod =>prod.name).join()
console.log(result)
