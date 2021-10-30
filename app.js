
/********************GENERATING NUMBERS***************************/

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
console.log(bingoNumbers[2]);

/********************GENERATING CARD( I run out of time, missing code)***************/


// let cardNumbers=[];

// for (let i=1; i<=75;i++){
    
//     cardNumbers.push(i);
    
// }
// console.log(cardNumbers)

// function callRow(min,max,cols){

//     for(let i=0; i<bingoNumbers.length;i++){
//         if(bingoNumbers[i]>min && bingoNumbers[i]<max){
            
//         }
//     }
// }
// callRow(1,15,5);
// callRow(16,30,5);
// callRow(31,45,5);
// callRow(46,60,5);
// callRow(61,75,5);