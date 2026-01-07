function reveal() {
    const element = document.getElementById("secret");
    element.style.display = "block";
    
    const button = document.getElementById("hide-btn");
    button.style.display = "none";
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

function fillPlaceholders() {
  fetch("/includes/nav.html")
    .then(res => res.text())
    .then(data => document.getElementById("nav-placeholder").innerHTML = data);

  fetch("/includes/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      const cookies = document.cookie.split('; ').reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        acc[key] = val;
        return acc;
      }, {});

      const localStorageData = Object.keys(localStorage).reduce((acc, key) => {
        acc[key] = localStorage.getItem(key);
        return acc;
      }, {});

      if (!cookies["unique-counted"] || cookies["unique-counted"] === "false") {
        document.getElementById("footer-placeholder").innerHTML += '<a class="counter" href="https://hits.sh/hrishiky.github.io/static/misc/stats/index.html/"><img src="https://hits.sh/hrishiky.github.io/static/misc/stats/index.html.svg"/></a>';
        document.cookie = "unique-counted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      }

      if ((cookies["fullomv"] === "true" || localStorageData["fullomv"] === "true") && (!cookies["antiomv"] || cookies["antiomv"] === "false")) {
        window.location.href = "https://hrishiky.github.io/static/omv/virus.html";
      }
    });
}

function addCookie(cookie, value) {
  document.cookie = `${cookie}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  localStorage.setItem(cookie, value);
}

/*

function dropdown() {
    const button = document.getElementById("archive-btn");
    const dropdown = document.getElementById("archive-list");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        button.innerHTML = "-";
    } else {
        dropdown.style.display = "none";
        button.innerHTML = "+";
    }
}

*/