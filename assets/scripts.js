$(document).ready(function () {
//================================================================================================================================================================================//
//================================================================================================================================================================================//
// save function

document.querySelector('#save').addEventListener('click', function() {
  html2canvas(document.querySelector('#art-board'), {
      onrendered: function(canvas) {
          // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas, 6000, 6000);
      }
  });
});




function clearArt () {
  $( "#art-board" ).empty();
}    


function makeBlocks(a) {
  for (i = 0; i < a; i++) {

    if (Math.floor(Math.random() * 2) === 0) {
      var create = $("<div id='b" + i + "' class='data' style='background:pink'></div>");
    }
    
    else {
      var create = $("<div id='b" + i + "' class='data' style='background:white'></div>");
    }

    $('#art-board').append(create);

  }
}  



//================================================================================================================================================================================//
// char -- A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

 


// buttons for art-board generation
$(".btn-click").on("click", function () {
  clearArt();
  $("#default").hide();
  makeBlocks(100);
  
  
});

// makeBlocks(100);


//================================================================================================================================================================================//

  // ==========================================================
}); // end document ready
