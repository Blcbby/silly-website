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
        window.location.pathname = "/silly-website/bad.png";
        alert("have fun!")
    }
    console.log(cookieClicks)
    cookieClicks++;
}

var nCount = 0;

function nothingIsHere() {
    if (nCount == 0) {
        $(".nothing").append("<h1>I SWEAR</h1>");
    } else if (nCount == 1) {
        $(".nothing").append("<h1>STOP CLICKING</h1>");
    } else if (nCount == 2) {
        $(".nothing").append("<h1>YOU ARE NOT GETTING ANYWHERE</h1>");
    } else if (nCount == 3) {
        $(".nothing").append("<h1>WHY ARE YOU LIKE THIS</h1>");
    } else if (nCount == 4) {
        $(".nothing").append("<h1>STOP</h1>");
    } else if (nCount == 5) {
        $(".nothing").append("<h1>WHY ARE YOU NOT STOPPING</h1>");
    } else if (nCount > 5) {
        $(".nothing").append("<h1>AAAAAAAAAAAAAAAAA</h1>");
    } else {
        void(0);
    }
    if (nCount == 25) {
        $(".nothing").text("");
        $(".nothing").append("<h1>I LITERALLY TOLD YOU</h1>");
        nCount = -32767;
    }
    nCount++;
}

function ninthImage() {
    $(".cats").append("<img src='silly-website/catimages/angry.png'>");
}