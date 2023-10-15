// //Bloqueio de caracteres input
document.getElementById("entrada1").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0)
      return false;
  };
//  //Bloqueio de caracteres input
document.getElementById("entrada2").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0)
      return false;
  };


// script random numbers


function generateNumber() {
   
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const winner = document.querySelector(".number-win")
    winner.innerHTML = result

}