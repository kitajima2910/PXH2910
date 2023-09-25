window.menu = 0;

$(document).ready(() => {
    while (window.menu < 2) {

        $(".ss-menu").ssMenu();

        window.menu++;
    };
});
