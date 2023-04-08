//Sword Circle

//a variable to track the sword position
var swordPosition = 0;
//variable to track the kill target
var killTarget = 0;

//populate an array of people with numbers from 1-100
var people = [];
for (var i = 0; i < 100; i++ ){
    //account for 0 index
    people[i] = i + 1;
}

//while the lenth of the array is greater than one
while (people.length > 1){
    //if the sword position has reached the end of the array 
    if(swordPosition >= people.length){
        //reset it to the begining
        swordPosition = 0;
    }

    //given the sword position find the index of the next person in the sequence 
    killTarget = people.indexOf(people[swordPosition + 1]);

    //if the killTarget is higher than the length of the array
    //indexOf will return -1
    if (killTarget == -1){
        killTarget = 0;
    }

    //remove the kill target from the array
    people.splice( killTarget , 1 ) //second paramater denotes only removing 1 item

    //update sword postion to the new adjacent person
    swordPosition +=  1;
}
    
//print the value of the last survivor
console.log("All the killing is done, the final survivor is: #" + people[0]);