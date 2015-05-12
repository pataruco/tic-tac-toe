$(document).ready(function(){
  console.log('pedro')

  var game = ["", "", "", "", "", "", "", "", ""];
  var equix = 'X';
  var cero = 'O';

// function to add an X or 0 in each slot


  function getClickInArray(e) {
    console.log(e.currentTarget.id);

  } //getClickInArray

//Event listener  for the function getClickInArray
  $('.slot').on("click", getClickInArray);


  






}) //document. ready