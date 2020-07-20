// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 *
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
};
console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *    Counter1 will actually track the increased count across multiple calls. Counter 2 will always start with a count of 0 & will always return a count of 1.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *    Counter 1 uses a closure because it has a function (counter()) inside a function (counterMaker()) & the inner function pulls a variable ffrom the outer function.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 *    Counter 1 would be prefered when we want to keep track of something happening outside of the counter. It will continue adding each time it's invoked.
 *    Counter 2 would be preferred when we want to keep track of something inside the function & want to then reset the count to 0 after it's been invoked.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();


// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning()

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3)
}
console.log("test inning:", inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/
// function game(sport){
//   let score = 0;
//   return function win(){
//     score ++; // taking the score and incrimenting by 1
//     return `Your ${sport} game score is ${score}`;
//   }
// }



function finalScore(varInning, numInnings){
  homeScore = 0;
  awayScore = 0;
  for (i = 0 ; i < numInnings ; i++) {
    homeScore = homeScore + varInning();
  }
  for (i = 0 ; i < numInnings ; i++) {
    awayScore = awayScore + varInning();
  }
  return { "Home": homeScore, "Away": awayScore}

}
console.log(finalScore(inning, 9));

/* Task 4:

Create a function called `scoreboard` that accepts the following parameters:

(1) Callback function `getInningScore`??????????
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


function finalScore2(varInning, numInnings){
  let finalScoreboard = [];
  let homeScoreCounter = 0;
  let awayScoreCounter = 0;
  for (i = 0 ; i < numInnings ; i++) {
    let homeScore = 0;
    let awayScore = 0;
    homeScore = varInning();
    awayScore = varInning();
    finalScoreboard.push (`Inning ${i + 1}: ${awayScore} away - ${homeScore} home`);
    homeScoreCounter = homeScoreCounter + homeScore;
    awayScoreCounter = awayScoreCounter + awayScore;
  }
  finalScoreboard.push(`Final Score: ${awayScoreCounter} away - ${homeScoreCounter} home`)
  return finalScoreboard
}
console.log("Task4 Solution1: ", finalScore2(inning, 9));

//below was me trying to create a getInningScore(), but I kept running into the problem of needing variables that only existed outside of the function, but would only be available when it was invoked inside the for loop. This would work when I did that exact thing, but it would be a otherwise weird chunk of code that couldn't work on it's own. Kinda the opposite of a Higher Order function that needs a callback to function, it'd be a callbackfunction that needs a Higher Order Function to work. Which just feels weird. I'll include it for the purposes of showing it works, but it just feels wrong... It would be used in place of lines 147 & 148. pointlessly. If the variables are defined in the function, they'll reset everytime.

// function getInningScore () {
//   homeScoreCounter = homeScoreCounter + varInning();
//   awayScoreCounter = awayScoreCounter + varInning();
//   }
