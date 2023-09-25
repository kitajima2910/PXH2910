window.menu = 0;

$(document).ready(() => {
    while (window.menu < 1) {

        $(".ss-menu").delay(100).ssMenu();

        window.menu++;
    };
});
