function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var body = document.body;
    var menuIcon = document.getElementById("menuIcon");
    var backIcon = document.getElementById("backIcon");
    
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        body.classList.add("no-scroll");
        menuIcon.style.display = "none";
        backIcon.style.display = "block";
    } else {
        navbar.className = "navbar";
        body.classList.remove("no-scroll");
        menuIcon.style.display = "block";
        backIcon.style.display = "none";
    }
}

function setActive(element) {
    var links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('status');
    });
    element.classList.add('active');
    element.setAttribute('status', 'active');
}