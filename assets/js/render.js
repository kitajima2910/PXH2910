import * as common from "./common.js";

$(document).ready(function () {

    // Get about.component.html
    common.getComponent({
        css: "components/about/css/main.css",
        component: {
            html: "components/about/about.component.html",
            selector: ".component-about"
        },
        js: "components/about/js/main.js"
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


    // Use for routes
    function routeHTMLCSSJSComponent() {

        // Get htmlcssjs.component.html
        common.getComponent({
            css: "components/games/htmlcssjs/css/main.css",
            component: {
                html: "components/games/htmlcssjs/htmlcssjs.component.html",
                selector: ".component-content"
            },
            imports: [
                "components/games/htmlcssjs/js/data.js"
            ],
            js: "components/games/htmlcssjs/js/main.js"
        });

    };

    // Setup routes
    const initRoutes = {
        "Service": { func: false, process: "pages/service.page.html" },
        "HTML5-CSS-JS": { func: true, process: routeHTMLCSSJSComponent },
        "Contact": { func: false, process: "pages/contact.page.html" },
    };

    common.setRoute({
        selectorParent: ".ss-menu",
        initRoutes: initRoutes,
        pageDefault: { func: true, process: routeHTMLCSSJSComponent }
    }, 500);

});
