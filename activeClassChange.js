/***********************************
 * if i've gotta be honest here... *
 * this script only exists because *
 * i'm too lazy to figure out why  *
 * jquery isn't doing what i want  *
 * it to. that's literally it lol. *
 * i have not figured it out yet.  *
 ***********************************/

//these functions are inefficient as hell but they don't work yet and i want them to

function goToHome() {
    document.getElementById("home").classList.add("active")
    document.getElementById("cats").classList.remove("active");
    document.getElementById("extras").classList.remove("active");
    document.getElementById("about").classList.remove("active");
}
function goToCats() {
    document.getElementById("home").classList.remove("active")
    document.getElementById("cats").classList.add("active");
    document.getElementById("extras").classList.remove("active");
    document.getElementById("about").classList.remove("active");
}
function goToExtras() {
    document.getElementById("home").classList.remove("active")
    document.getElementById("cats").classList.remove("active");
    document.getElementById("extras").classList.add("active");
    document.getElementById("about").classList.remove("active");
}
function goToAbout() {
    document.getElementById("home").classList.remove("active")
    document.getElementById("cats").classList.remove("active");
    document.getElementById("extras").classList.remove("active");
    document.getElementById("about").classList.add("active");
}