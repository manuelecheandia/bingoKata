
//Creating an array to store the 75 numbers of the Bingo
let bingoNumbers = [];


//Generating 75 unique randmon numbers
while(bingoNumbers.length < 75){
    var numbers = Math.floor(Math.random() * 75) + 1;
    if(bingoNumbers.indexOf(numbers) === -1){
        bingoNumbers.push(numbers);
    } 
}

//Then we have the array with the random numbers from 1 to 75
console.log(bingoNumbers);

//We could call just one number through its index
console.log(bingoNumbers[1]);

