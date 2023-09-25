window.menu = 0;

$(document).ready(() => {
    while (window.menu < 2) {

        $(".ss-menu").delay(100).ssMenu();

        window.menu++;
    };
});
