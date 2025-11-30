function toogle menu(){
    const navLinks = document.getElementByid('navLinks');

    if(navLinks.style.display === "block"){
        navLinks.style.display = "none"; }
        else {
            navLinks.style.display = "block";
        }

    }