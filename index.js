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
const audio = document.getElementById("audio");
let originalSrc;
let originalAbt;

myButton.addEventListener("click", function () {
  audio.play();
  originalAbt = abt.src;
  originalSrc = myImg.src;
  // Store the original source
  myImg.src = "images/rickroll.gif"; // Change the source to the new image
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