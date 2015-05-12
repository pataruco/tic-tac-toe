$(document).ready(function(){
  console.log('pedro')

  var game = [null, null, null, null, null, null, null, null, null];
  var equix = 'X';
  var cero = 'O';


// function to add an X or 0 in each slot
/***************************************/

  function getClickInArray(e) {
    // console.log(e.currentTarget.id);
    // console.log(game);
    var inputArray = (e.currentTarget.id);
    return game[inputArray] = equix;
     // console.log(game);

  } //getClickInArray

//Event listener  for the function getClickInArray
  $('.slot').on("click", getClickInArray);


  






}) //document. ready