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