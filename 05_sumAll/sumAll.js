const sumAll = function(startNum,endNum) {

let sum   = 0;

if(typeof(endNum) === "number" && typeof(startNum) === "number"){
if (startNum < 0 || endNum < 0 ){

    return "ERROR"
}else{
    
    if(endNum > startNum){

        for(let i = 0; i<= endNum; i++){

            sum += i;
        }
        return sum
    }
    else if (startNum > endNum){

        for(let i = 0; i<= startNum; i++){

            sum += i;
        }
        return sum
    }
}
}else{

    return "ERROR"
}
};

// Do not edit below this line
module.exports = sumAll;
