window.menu = 0;

$(document).ready(function () {
    while (window.menu < 1) {

        function processRender() {
            $(".ss-menu").ssMenu();
        }

        try {
            processRender();
        } catch (error) {
            processRender();
        }

        window.menu++;
        console.clear();
    };
});
