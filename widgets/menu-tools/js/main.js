let menu = document.querySelector('.menu');
let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX
    mouseY = e.pageY
});

function showMenu(x, y) {
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('menu-show');
}

function hideMenu() {
    menu.classList.remove('menu-show');
}

function onContextMenu(e) {
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('mousedown', onMouseDown, false);
}

function onMouseDown(e) {

    let dataLink = e.target.getAttribute("DLHome");

    switch (dataLink) {
        case "DLHome": window.location.href = "https://kitajima2910.github.io/PXH2910/"; break;
    }

    hideMenu();
    document.removeEventListener('mousedown', onMouseDown);
}

document.addEventListener('contextmenu', onContextMenu, false);

document.body.addEventListener("keydown", (e) => {

    if (e.code == "KeyE") {
        showMenu(mouseX, mouseY);
        document.addEventListener('mousedown', onMouseDown, false);
    }

}, false);
