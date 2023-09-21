import * as common from "./common.js";

$(document).ready(() => {
    
    // Get about.component.html
    common.getComponent({
        css: "components/about/css/main.css",
        component: {
            html: "components/about/about.component.html",
            selector: ".component-about"
        },
        js: "components/about/js/main.js"
    });

    // Get note.component.html
    common.getComponent({
        css: "components/note/css/main.css",
        component: {
            html: "components/note/note.component.html",
            selector: ".component-note"
        },
        js: "components/note/js/main.js"
    });

    // Get menu.component.html
    common.getComponent({
        css: "components/menu/css/main.css",
        component: {
            html: "components/menu/menu.component.html",
            selector: ".component-menu"
        },
        imports: [
            "components/menu/js/jquery.ss.menu.js"
        ],
        js: "components/menu/js/main.js"
    });

    // Get htmlcssjs.component.html
    common.getComponent({
        css: "components/games/htmlcssjs/css/main.css",
        component: {
            html: "components/games/htmlcssjs/htmlcssjs.component.html",
            selector: ".component-htmlcssjs"
        },
        imports: [
            "components/games/htmlcssjs/js/data.js"
        ],
        js: "components/games/htmlcssjs/js/main.js"
    });
});
