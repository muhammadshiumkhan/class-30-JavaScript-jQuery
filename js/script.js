/* js ex */
// ex1
function contentChange() {
  document.getElementById('cc').innerHTML =
    "Hello";
}

// ex2
function showDate() {
  document.getElementById('sd').innerHTML =
    Date();
}

// ex3
function showDateTime() {
  document.getElementById('sdt').innerHTML =
    Date();
}


// bulb on/off
function bulbon() {
  document.getElementById('img').src = "images/on.gif";
}
function bulboff() {
  document.getElementById('img').src = "images/off.gif";
}

// ex4
function changeCSS() {
  document.getElementById('css').style.color =
    "red";
}

// ex5
function textShow() {
  document.getElementById('sh').style.display =
    "block";
}

// ex6
let number1, number2, result;

number1 = 5;
number2 = 2;
result = number1 + number2
function showResult() {
  document.getElementById('sr').innerHTML =
    result;
}

// ex7
// JQ

$(document).ready(function () {

  $('#sa').click(function () {
    alert("Welcome to SS");
  });

  // ex8

  $('#show').click(function () {
    $('h3').show();
  });
  $('#hide').click(function () {
    $('h3').hide();
  });
  $('#togg').click(function () {
    $('h3').toggle();
  });

  // ex9

  $('#fi').click(function () {
    $('h3').fadeIn();
  });
  $('#fo').click(function () {
    $('h3').fadeOut();
  });
  $('#ft').click(function () {
    $('h3').fadeToggle();
  });

  // ex10
  $('.ques').click(function () {
    $('.answ').slideToggle(330);
  });




});

