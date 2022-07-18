const repeatString = function(word, time) {

    let msg ="";

    if (time < 0){

            return "ERROR";
        }
        
    else{
        for (let i = 0; i < time; i++){

            msg += word;
        }

    return  msg;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
