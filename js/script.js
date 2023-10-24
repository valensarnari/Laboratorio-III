function menuDesplegable() {
    var x = document.getElementById("menu-bar");
    
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}