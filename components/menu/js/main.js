window.menu = 0;

$(document).ready(function () {
    while (window.menu < 1) {

        $(".ss-menu").ssMenu();

        window.menu++;
    };
});
