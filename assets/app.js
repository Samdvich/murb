/* Table of Contents:
    1. Init
        1.1 main (background)
    2. Functions
        2.1 logo
        2.2 background
        2.3 backgroundToggle*/
/*main*/
background("on"); /*matching background to the user time + respecting motion*/
/*logo*/
function logo(id, content) {
    if (id.textContent !== content) {
        id.textContent = content;
        id.style.color = "darkcyan";
        document.getElementById(id.id).title = '';
    }
    else {
        id.textContent = id.id;
        id.style.color = "gray";
        document.getElementById(id.id).title = 'click me';
    }
}
/*background*/
function background(state) {
    var time = new Date();
    var hour = time.getHours();
    if (hour < 6 || hour > 18) {
        var background = ["url(assets/background-night.gif)", "darkgray"];
    }
    else {
        var background = ["url(assets/background-day.gif)", "white"];
    }
    if (state == "off" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        console.log(state);
        document.body.style.backgroundColor = background[1];
        document.body.style.backgroundImage = "url(#)";
    }
    else if (state == "on") {
        console.log(state);
        document.body.style.backgroundImage = background[0];
        document.body.style.backgroundColor = "";
    }
}
/*backgroundToggle*/
function backgroundToggle() {
    if (document.body.style.backgroundColor == "") {
        background("off");
    }
    else {
        background("on");
    }
}
