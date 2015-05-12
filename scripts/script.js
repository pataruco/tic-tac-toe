$(document).ready(function(){
  // console.log('pedro')

  /*Variables
  *************************************/
  var game = [null, null, null, null, null, null, null, null, null];
  var answers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var lastMove = 'X';
  
// function to add an X or 0 in each slot
/***************************************/
  function getClickInArray(e) {
    // console.log(e.currentTarget.id);
    // console.log(lastMove);
    var inputArray = (e.currentTarget.id);
    // checkWin();
    game[inputArray] = lastMove;
    console.log(game);
    alterPlayer();
    console.log("O" + checkWin("O"));
    console.log("X" + checkWin("X"));
    showWinner();

  } //getClickInArray


//Event listener  for the function getClickInArray
  $('.slot').on("click", getClickInArray);
  /*********************************************/
  
/*Function to alternate the player
*********************************************/
  function alterPlayer () {
    // console.log('hello lauren');
    if(lastMove === 'X') {
      lastMove = 'O';
    }
    else {
      lastMove = 'X';
    }
  } //alterPlayer
/**********************************************/

/*function to check proof win
****************************************/
  function checkWin (winnerPlayer) {
   return answers.some(function(element, index) {
    // console.log(">>>>>>"+element);
      return element.every(function(value, position){
        // console.log("______");
        // console.log(game[value]);
        // console.log(winnerPlayer);
        // console.log((winnerPlayer === game[value]));
        // console.log('array'+game);
        return (winnerPlayer === game[value]);

      });//elements.every
    });//answers.some
  }//checkWin 
  /*****************************************/
  /*function to show a winner
  ******************************************/
  function showWinner () {
    // console.log('hello lauren');
    if (checkWin("O")) {
      console.log('ploayer 0 wins');
      alert('Player O wins');
    }
    else if (checkWin("X")) {
      console.log('ploayer X wins')
      alert('Player X wins');
    }
  }//showWinner



}) //document. ready

