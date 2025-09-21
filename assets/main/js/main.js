function reveal() {
    const element = document.getElementById("secret");
    element.style.display = "block";
    
    const button = document.getElementById("hide-btn");
    button.style.display = "none";
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

      if (!cookies["unique-counted"] || cookies["unique-counted"] === "false") {
        document.getElementById("footer-placeholder").innerHTML += '<a class="counter" href="https://hits.sh/hrishiky.github.io/static/misc/stats/index.html/"><img src="https://hits.sh/hrishiky.github.io/static/misc/stats/index.html.svg"/></a>';
        document.cookie = "unique-counted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      }
    });
}
