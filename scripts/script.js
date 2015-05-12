$(document).ready(function(){
  console.log('pedro')

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
  } //getClickInArray


//Event listener  for the function getClickInArray
  $('.slot').on("click", getClickInArray);
  /*********************************************/
  
/*Function to alternate the player
*********************************************/
  function alterPlayer () {
    console.log('hello lauren');
    if(lastMove === 'X') {
      lastMove = 'O';
    }
    else {
      lastMove = 'X';
    }
  } //alterPlayer
/**********************************************/

  /*function to check proof win
  // ****************************************/
  function checkWin () {
    $.each(answers, function(index, element) {
      if(game === element){
        alert('win');
      }
      else {
        alert('draw');
      }
      
      // console.log(index, element);
    });
    } //checkWin 


}) //document. ready

