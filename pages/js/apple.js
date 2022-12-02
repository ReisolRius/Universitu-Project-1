let apdiv = document.querySelector("#apple-div");
let apple = document.querySelector("#apple");

apdiv.addEventListener('mouseover', AppleUp, false);
apdiv.addEventListener('mouseout', AppleDown, false);


function AppleUp() {
    apple.src="../../img/Apple_logo_black.png";
}

function AppleDown() {
    apple.src="../../img/Apple_logo.svg";
}
