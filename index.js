// Mobile Nav
var side = document.getElementById("sidenav");
function openmenu() {
  side.style.right = "0";
}
function closemenu() {
  side.style.right = "-260px";
}

// Rickroll
const abt = document.getElementById("abt");
const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

let originalSrc;
let originalAbt;

myButton.addEventListener("click", function () {
  const audio = document.getElementById("audio");
  audio.play();
  originalAbt = abt.src;
  originalSrc = myImg.src;
  // Store the original source
  myImg.src = "./images/RickAst.gif"; // Change the source to the new image
  abt.src =
    "https://steamuserimages-a.akamaihd.net/ugc/53244775122741846/B36FD8A0C7F32658A2958B94BCCE075B09AF5E59/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
  setTimeout(function () {
    myImg.src = originalSrc; // Restore the original source after 11 seconds
    abt.src = originalAbt;
  }, 11000);
});

//download apk
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    window.open(
      "https://github.com/adrian-100/portfollio/releases/download/html/_Aj_Portfolio_17497207.apk",
      "_blank"
    );
  });



$(function () {
  //bg color selector
  $(".color").click(function () {
    var color = $(this).attr("data-value");
    $("body").css("background-color", color);
  });

  //add color picker if supported
  if (Modernizr.inputtypes.color) {
    $(".picker").css("display", 'inline-block');
    var c = document.getElementById('colorpicker');
    c.addEventListener('change', function (e) {
      //d.innerHTML = c.value;
      var color = c.value;
      $("body").css("background-color", color);
    }, false);
  }
});
function pickColor() {
  $("#colorpicker").click();
}


// back to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}