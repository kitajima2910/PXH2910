window.about = 0;

$(document).ready(function () {
    while (window.about < 1) {

        function processRender() {
            // console.log("about");
        }

        try {
            processRender();
        } catch (error) {
            processRender();
        }

        window.about++;
        console.clear();
    };
});