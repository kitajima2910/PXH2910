window.menu = 0;

$(document).ready(() => {
    while (window.menu < 1) {

        let menu = $(".menu")[0];
        let mouseX = 0
        let mouseY = 0

        $(document).on("mousemove", (e) => {
            mouseX = e.pageX
            mouseY = e.pageY
        });

        const showMenu = (x, y) => {
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
            $(".menu").first().addClass("menu-show");
        }

        const hideMenu = () => {
            $(".menu").first().removeClass("menu-show");
        }

        const onContextMenu = (e) => {
            e.preventDefault();
            showMenu(e.pageX, e.pageY);
            $(document).on("mousedown", onMouseDown);
        }

        const onMouseDown = (e) => {

            let dataLink = $(e.target).attr("DLHome");

            switch (dataLink) {
                case "DLHome": window.location.href = "https://kitajima2910.github.io/PXH2910/"; break;
            }

            hideMenu();
            $(document).off("mousedown", onMouseDown);
        }

        $(document).on("contextmenu", onContextMenu);

        $(document.body).on("keydown", (e) => {
            if (e.code == "KeyE") {
                showMenu(mouseX, mouseY);
                $(document).on("mousedown", onMouseDown);
            }
        });

        window.menu++;
    };
});
