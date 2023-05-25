function test() {
    if (window.location.pathname === "/index.html") {
        document.getElementById("home").classList.add("current");
    } else if (window.location.pathname === "/cats.html") {
        document.getElementById("cats").classList.add("current");
    } else if (window.location.pathname === "/extras.html") {
        document.getElementById("extras").classList.add("current");
    } else if (window.location.pathname === "/about.html") {
        document.getElementById("about").classList.add("current");
    } else {
        void(0);
    }
}
setTimeout(test, 0)

var cookieClicks = 0;

function yummyNummy() {
    if (cookieClicks == 0) {
        alert("cookie!");
        alert("that's it.");
    } else if (cookieClicks == 1) {
        alert("why did you click it again?");
        alert("please stop.");
    } else if (cookieClicks == 2) {
        alert("please.");
    } else if (cookieClicks == 3) {
        alert("i am asking you nicely.");
    } else if (cookieClicks == 4) {
        alert("if you do not stop, i will have to get...");
        alert("nasty...")
    } else if (cookieClicks == 5) {
        alert("alright, you asked for it...");
        window.location.pathname = "/bad.png";
    }
    console.log(cookieClicks)
    cookieClicks++;
}