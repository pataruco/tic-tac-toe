$(document).ready(function(){
  console.log('pedro')

  /*Variables
  *************************************/

  var game = [null, null, null, null, null, null, null, null, null];
  var equix = 'X';
  var cero = 'O';
  var answers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var lastMove = 'X'
  


// function to add an X or 0 in each slot
/***************************************/

  function getClickInArray(e) {
    // console.log(e.currentTarget.id);
    console.log(game);
    var inputArray = (e.currentTarget.id);
    // checkWin();
    return game[inputArray] = equix;

    

  } //getClickInArray

//Event listener  for the function getClickInArray
  $('.slot').on("click", getClickInArray);
  /******************************************/

/*













  // /*function to check proof win
  // // ****************************************/
  // function checkWin () {
  //   $.each(answers, function(index, element) {
  //     if(game === element){
  //       alert('win');
  //     }
  //     else {
  //       alert('draw');
  //     }
      
  //     // console.log(index, element);
  //   });
  //   } //checkWin 


  


  





}) //document. ready

// r1: ([0], [1], [2]);
// r2: ([3], [4], [5]);
// r3: ([6], [7], [8]);
// r4: ([0], [3], [6]);
// r5: ([1], [4], [7]);
// r6: ([2], [5], [8]);
// r7: ([0], [4], [8]);
// r8: ([2], [4], [6]);