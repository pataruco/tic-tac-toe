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

// r1: ([0], [1], [2]);
// r2: ([3], [4], [5]);
// r3: ([6], [7], [8]);
// r4: ([0], [3], [6]);
// r5: ([1], [4], [7]);
// r6: ([2], [5], [8]);
// r7: ([0], [4], [8]);
// r8: ([2], [4], [6]);