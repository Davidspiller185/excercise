

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

