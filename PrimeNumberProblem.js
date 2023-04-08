//PrimeNumberProblem

//create an empty array to contain all the legal floors
var legalFloors = [];
//create an array of floors 1-68
const floors = [];

for (var i = 0; i < 68; i++){
    //populate the array
    floors[i] = i + 1;
}

//for each floor in the array
//test if it is legal
floors.forEach(isItLegal);

function isItLegal(floorNumber){
    //set a flag
    var legalFloor = true;
    
    //test if it is a prime number
    if( isPrime(floorNumber) ){
        legalFloor = false;
        return;
    } 

    //test if a digit of the floor is prime
    //if the floor has two digits
    if(floorNumber >= 10){
        //convert the number to a string and explode it
        var stringFloor = floorNumber.toString();
        var digits = [];

        //for each digit 
        for(var i = 0; i < stringFloor.length;i++){
            //add it to the array as an integer
            digits.push(+stringFloor.charAt(i));
            //test if the digit is prime
            if( isPrime(digits[i]) ){
                //switch the flag
                legalFloor = false;
                break;
            }
        }

    }


    //if the legalFloor flag is still true add it to the array
    if(legalFloor){
        legalFloors.push(floorNumber);
    }
}

function isPrime(floorNumber){
    //set a flag 
    var prime = true;

    //loop from 2 to 1 less than the given floor
    for (var i = 2; i < floorNumber; i++){
        if(floorNumber % i == 0){
            prime = false;
            break;
        }
    }

    return prime;
}

//print out the legal floors
console.log("There are " +legalFloors.length+" legal floors");
console.log("They are as follows: "); 
console.log(legalFloors);