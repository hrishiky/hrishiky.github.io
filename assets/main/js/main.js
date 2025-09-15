function reveal() {
    const element = document.getElementById("secret");
    element.style.display = "block";
    
    const button = document.getElementById("hide-btn");
    button.style.display = "none";
}

function fillPlaceholders() {
    fetch('/includes/nav.html')
    .then(res => res.text())
    .then(data => document.getElementById('nav-placeholder').innerHTML = data);

  fetch('/includes/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data);
}