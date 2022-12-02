let cas = document.querySelector("#case"); 
let strike = document.querySelector("#down");
let moreHead = document.querySelector("#absolute");

let menuButton = document.querySelector("#lines");
let menu = document.querySelector("#menu");
let menuTeker = false;

let strike1 = document.querySelector("#up");
let cas1 = document.querySelector("#case1");
let moreHead1 = document.querySelector("#absolute1");
let moreHeadTreker = false;

cas.addEventListener('mouseover', Up, false); 
cas.addEventListener('mouseout', Down, false);


menuButton.addEventListener('click', MenuControl, false);

moreHead.addEventListener('mouseover', Stop, false);
moreHead.addEventListener('mouseout', Start, false);

cas1.addEventListener('click', MoreMenu, false);

function Up() {
    console.log(1);
    strike.style.transform = 'rotate(310deg)';
    strike.style.borderTop = '2px solid #3C82F4';
    strike.style.borderRight = '2px solid #3C82F4';
    moreHead.style.display = 'block';
    setTimeout(SlowUp, 1);
}

function SlowUp() {
    moreHead.style.opacity = '1';
}

function Down() {
    strike.style.transform = 'rotate(135deg)';
    strike.style.borderTop = '2px solid #707070';
    strike.style.borderRight = '2px solid #707070';
    moreHead.style.display = 'none';
    moreHead.style.opacity = '0';
}

function MenuControl() {
    if (menuTeker == false) {
        menu.style.height = '282px';
        strike1.style.transform = 'rotate(310deg)';
        strike1.style.borderTop = '2px solid #707070';
        strike1.style.borderRight = '2px solid #707070';
        menuTeker = true;
    }
    else {
        menu.style.height = '0px';
        menuTeker = false;
        moreHeadTreker = false;
    }
}

function Stop() {
    strike.style.transform = 'rotate(310deg)';
    strike.style.borderTop = '2px solid #3C82F4';
    strike.style.borderRight = '2px solid #3C82F4';
    moreHead.style.display = 'block';
    moreHead.style.opacity = '1';
}

function Start() {
    strike.style.transform = 'rotate(135deg)';
    strike.style.borderTop = '2px solid #707070';
    strike.style.borderRight = '2px solid #707070';
    moreHead.style.display = 'none';
    moreHead.style.opacity = '0';
}

function Stop1() {
    moreHead1.style.height = '100px'
}

function MoreMenu(){
    if(moreHeadTreker == false) {
        moreHead1.style.height = '200px';
        menu.style.height = '472px';
        strike1.style.transform = 'rotate(135deg)'
        strike1.style.borderTop = '2px solid #3C82F4';
        strike1.style.borderRight = '2px solid #3C82F4';
        moreHeadTreker = true;
    }
    else {
        moreHead1.style.height = '0px';
        menu.style.height = '282px';
        strike1.style.transform = 'rotate(310deg)';
        strike1.style.borderTop = '2px solid #707070';
        strike1.style.borderRight = '2px solid #707070';
        moreHeadTreker = false;
    }
}