const getEven = require("./math2")
function addNumberToEven(a,b){
    if (getEven(a)){
        return a + b
    }
    else{
    return a -b
    }
}
module.exports = addNumberToEven