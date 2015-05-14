$(document).ready(function(){
  // console.log('pedro')
/*********************************************
  Variables
*********************************************/
  var game = [null, null, null, null, null, null, null, null, null];
  var answers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var lastMove = 'X';
  var counter_X = 0;
  var counter_O = 0;
/*********************************************
  Event Listeners
**********************************************/
  $('.slot').on('click', inputBoard); //<-- Put an X or O inside the board
  $('.slot').on("click", getClickInArray); //<-- Get a input in an array
  $('.clear').on('click', clearGame); //<-- Clear the board and the array
/*********************************************
  Function to add an X or 0 in each slot
**********************************************/
  function getClickInArray(e) {
    $(e.currentTarget).off('click', getClickInArray);
    // console.log(e.currentTarget.id);
    // console.log(lastMove);
    var inputArray = (e.currentTarget.id);//<--- relate the click with the id 
    // checkWin();
    game[inputArray] = lastMove;//<--- insert the value in the game array
    console.log(game);
    alterPlayer(); //<--- alternate players
    console.log("O" + checkWin("O"));
    console.log("X" + checkWin("X"));
    showWinner(); //<--- Show winner (if we have one)
    showDraw(); //<--- Show draw (if we have one)
  } //getClickInArray
/*********************************************
  Function to alternate the player
**********************************************/
  function alterPlayer () {
    if(lastMove === 'X') {
      lastMove = 'O';
      $('.name').text('O');
    }
    else {
      lastMove = 'X';
      $('.name').text('X');
    }
  } //alterPlayer
/*********************************************
  Function to check proof win 
**********************************************/
  function checkWin (winnerPlayer) {
   return answers.some(function(element, index) {
    // console.log(">>>>>>"+element);
      // debugger
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
/*********************************************
  Function to show a winner
**********************************************/
  function showWinner () {
    // console.log('hello lauren');
    if (checkWin("O")) {
      counter_O ++;
      counterO(); 
      popWinnerO();
    }
    else if (checkWin("X")) {
      counter_X ++;
      counterX(); 
      popWinnerX();
    }
  }//showWinner
/*********************************************
  Function to show a draw
**********************************************/
   function showDraw () {
      // console.log('hello lauren');
      var result = game.filter(function(move){
        return move;
      });
      if(game.length === result.length){
        popDraw();
        }
      }//// showDraw
/*********************************************
  Function to clear the array, board, player, winner & draw
**********************************************/
  function clearGame () {
    game = [null, null, null, null, null, null, null, null, null];
    lastMove = 'X';
    $('.slot').text('');
    $('.name').text(lastMove);
    $('.slot').on('click', inputBoard); 
    $('.slot').on("click", getClickInArray);
    $('.win').css("visibility", "hidden");
    $('.draw').css("visibility", "hidden");
  }//clearGame
/*********************************************
  Function to put the input on the board
**********************************************/
  function inputBoard (e) {
    $(e.currentTarget).off('click', inputBoard);
    $(e.currentTarget).text(lastMove);
  }//inputBoard 
/*********************************************
  Function to pop up a winner O
**********************************************/
  function popWinnerO () {
    $('.winner').text('O');
    $('.win').css("visibility", "visible");
  }
/*********************************************
  Function to pop up a winner X
**********************************************/
  function popWinnerX () {
    $('.winner').text('X');
    $('.win').css("visibility", "visible");
  }
/*********************************************
  Function to pop up a draw
**********************************************/
  function popDraw () {
    $('.draw').css("visibility", "visible");
  }
/*********************************************
  Functions to show points
**********************************************/
  function counterX () {
    $('.player_x').text(counter_X);    
  }
  function counterO () {
    $('.player_o').text(counter_O);
  }



}) //document. ready


