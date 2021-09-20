// Only change code below this line 

function randomRangeNumber(minNumber, maxNumber) {

   result =  Math.floor(Math.random() * (maxNumber - minNumber +1))+minNumber;
    return result;
}

randomRangeNumber(1,15);
console.log(result);


// Only change code above this line 

module.exports = randomRangeNumber;