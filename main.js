function reveal() {
    const element = document.getElementById("secret");
    element.style.display = "block";
    
    const button = document.getElementById("hide-btn");
    button.style.display = "none";
}