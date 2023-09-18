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
        js: "components/menu/js/main.js"
    });

});
