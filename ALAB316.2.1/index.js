//====================
//    FIRST METHOD
//====================
// const app = document.getElementById("app");
// const gameBox=document.createElement('table');
// const randomNum  = Math.trunc(Math.random()*100+1);

// console.log(randomNum);



// let guess
// console.log(guess);
// let output = '';


// // setTimeout(() => {
// // console.log("This is a filler message");
// // }, 1500);
// window.alert("Welcome please type a number between 1-100");

// do{
//     guess = parseInt(window.prompt("Pick a number between 1-100"));
//     if(randomNum === guess){
//         output = 'WINNER WINNER CHICKEN DINNER'
//     } else{
//         output = `WOP WOP THE RANDOM NUMBER WAS ${randomNum}`
//     }
//     window.alert(output);
// } while(randomNum !== guess);


//====================
//   SECOND METHOD
//====================

const randomNum = Math.floor(Math.random()*100+1); //generates random number 
let isOver = false; //flag that checks whether game is over
let attempt = 10; //number of attempts

console.log(randomNum);

//guess function that collects user input and determines whether the number is equal to the random number
const guessNumber = (randomNum) => {
    let guess = parseInt(window.prompt("Please guess a number between 1 and 100"));
    //if guess is not a number
    if(isNaN(guess)){
        window.alert("Guess is not a valid number please try again");
        return false;
    }
    if(guess !== randomNum){
        if(guess < randomNum){
            attempt--;
            window.alert(`Number is higher than your guess. Please try again. You have ${attempt} attempts left...`);
        } else{
            attempt--;
            window.alert(`Number is lower than your guess. Please try again. You have ${attempt} attempts left...`);
        }
        return false;
    } else{
        window.alert(`WINNER WINNER CHICKEN DINNER you guessed it in ${attempt} attempts!!`);
        return true;
    }
};

/* Game will end under either of these conditions:
  > If the player has no more attempts to guess
  > If the player guesses the number correctly
*/
while(!isOver){
    if(attempt <= 0){
        window.alert(`WOP WOP the random number is ${randomNum}. Game over bud.`);
        isOver = true;
    } else{
        isOver = guessNumber(randomNum);
    }
}