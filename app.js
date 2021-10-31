
/********************GENERATING NUMBERS***************************/


//variable to store the numbers
const bingoNumbers = [];

//the max paremeter means the maximum quantity of numbers we want to generate
function generateNumbers(max){
    
    while(bingoNumbers.length < max){

        let numbers = Math.floor(Math.random() * max) + 1;

        if(bingoNumbers.indexOf(numbers) === -1){
            bingoNumbers.push(numbers);
        } 
    }
    console.log(bingoNumbers);

}

//we call the function with 75 numbers as asked
generateNumbers(75);


/********************CALLING THE NUMBERS ONE BY ONE***************************/


//Then we need to be calling one by one of the elements of the bingoNumbers array

var indexOfNumber = 0; //to slice the first index of the array
var numberOfNextIndex=1; //just to slice one element

function callNumber(){

    var numberCalled = bingoNumbers.slice(indexOfNumber,numberOfNextIndex);

    console.log(numberCalled);

    indexOfNumber++
    numberOfNextIndex++

}

callNumber(); //Will call the first element of bingoNumbers array
callNumber(); //Will call the second element of bingoNumbers array, and so on. Each time you call "callNumber" function.
callNumber();




/********************GENERATING CARD***************/


  let cardNumbers=[];

  for (let i=1; i<=bingoNumbers.length;i++){
    
      cardNumbers.push(i);
 
  }
 console.log(cardNumbers)

 function callRow(min,max,cols){

    let bingoWord = ["B","I","N","G","O"]
    console.log(bingoWord)
     for(let i=0; i<cardNumbers.length;i++){
         if(cardNumbers[i]>min && cardNumbers[i]<max){
            console.log(cardNumbers);
         }
     }
 }
 callRow(1,15,5);
