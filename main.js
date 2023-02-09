// console.log(document.getElementByID("announce").innerHTML);

var toilet = document.querySelector("#toilet");
var loo = document.getElementById("loo");


// draggable element code from https://www.youtube.com/watch?v=TUrpsc04Ufw

toilet.addEventListener("mousedown", () => {
    toilet.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseup", () => {
        toilet.removeEventListener("mousemove", updatePosition);
    });
});

function updatePosition(e) {
    toilet.style.setProperty("left", `${e.x - 200}px`);
    toilet.style.setProperty("top", `${e.y - 450}px`);
}

// var a = document.querySelector("#hyper");
// a.onclick = function() {
//     // console.log("clicked");
//     var img = document.createElement("img");
//     img.src = "/assets/GoldenSpiralLogarithmic_color_in.gif";
//     img.width = 600 + "px";
//     // img.height = height;
//     // img.alt = alt; 

//     document.body.appendChild(img);
//     return false;
// }

// var spiral = document.querySelector("#spiral");
// spiral.onclick = goSpiral();

function goSpiral() {
    console.log("goSpiral activated");

    var src = "/assets/GoldenSpiralLogarithmic_color_in.gif";
    reveal(src, 400, 0, 0, "golden spiral");
    
}

function reveal(src, width, xPos, yPos, alt) {
    console.log("reveal activated");

    var img = document.createElement("img");
    img.src = src;
    img.width = width + "px";
    img.style.position = "absolute";
    img.style.left = xPos + "px";
    img.style.top = yPos + "px";
    img.alt = alt;
    img.style.zIndex = "3";

    document.body.appendChild(img);
    return false;
}


// function test() {
//     alert("whoa");
// }