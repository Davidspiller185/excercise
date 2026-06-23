

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