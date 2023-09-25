import * as common from "./common.js";

window.render = 0;

$(document).ready(function () {

    while (window.render < 1) {

        common.loadJSHeader([
            // menu.component.html
            "components/menu/js/jquery.ss.menu.js",
            
            // htmlcssjs.component.html
            "components/games/htmlcssjs/js/data.js"
        ]);

        common.loadCSSHeader([
            // about.component.html
            "components/about/css/main.css",

            // menu.component.html
            "components/menu/css/main.css",

            // htmlcssjs.component.html
            "components/games/htmlcssjs/css/main.css"
        ]);

        // Get about.component.html
        common.getComponent({
            component: {
                html: "components/about/about.component.html",
                selector: ".component-about"
            },
            js: "components/about/js/main.js"
        });

        // Get menu.component.html
        common.getComponent({
            component: {
                html: "components/menu/menu.component.html",
                selector: ".component-menu"
            },
            js: "components/menu/js/main.js"
        });


        // Route HTML CSS JS Component
        function routeHTMLCSSJSComponent() {

            // Get htmlcssjs.component.html
            common.getComponent({
                component: {
                    html: "components/games/htmlcssjs/htmlcssjs.component.html",
                    selector: ".component-content"
                },
                js: "components/games/htmlcssjs/js/main.js"
            });

        };

        // Init routes
        const initRoutes = {
            "Service": { func: false, process: "pages/service.page.html" },
            "HTML5-CSS-JS": { func: true, process: routeHTMLCSSJSComponent },
            "Contact": { func: false, process: "pages/contact.page.html" },
        };

        common.setRoute({
            selectorParent: ".ss-menu",
            initRoutes: initRoutes,
            pageDefault: { func: true, process: routeHTMLCSSJSComponent }
        }, 700);

        // Delay render
        common.delayRender([
            ".component-menu"
        ], 1000);

        window.render++;
    }



});
