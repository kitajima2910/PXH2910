/**
 * 
 * Set Routes
 * 
 * @param {Object} data 
 * @param {Number} delay 
 */
export function setRoute(data = { selectorParent, initRoutes, pageDefault: { func: false, process } }, delay = 300) {

    setTimeout(function () {

        let dataLS = sessionStorage.getItem("route");

        if (dataLS !== null) {
            $(data.selectorParent).ready(function () {
                const dataObj = data.initRoutes[dataLS];
                if (dataObj.func) {
                    dataObj.process();
                } else {
                    $.get(dataObj.process, (html) => {
                        $(".component-content").html(html);
                    });
                }
            });
        } else {
            if (data?.pageDefault) {
                if (data.pageDefault.func) {
                    data.pageDefault.process();
                } else {
                    $.get(data.pageDefault.process, (html) => {
                        $(".component-content").html(html);
                    });
                }
            }
        }

        $(data.selectorParent).on("click", "a", function (e) {
            e.preventDefault();

            const dataHref = $(this).attr("data-href");
            const dataObj = data.initRoutes[dataHref];

            sessionStorage.setItem("route", dataHref);
            
            if (dataObj.func) {
                dataObj.process();
            } else {
                $.get(dataObj.process, (html) => {
                    $(".component-content").html(html);
                });
            }
        });

    }, delay);
}

/**
 * 
 * Get Component
 * 
 * @param {Object} data 
 * @param {Number} delay 
 */
export function getComponent(data = { component: { html, selector }, css, imports, js }, delay = 100) {

    // Add file css to tag head
    $.get(`${data.css}`, function (css) {
        if (data.js !== "") {
            $("head").append(`<link rel="stylesheet" href="${data.css}">`);
        }
    });

    setTimeout(function () {
        // Add file html to tag selector
        $.get(`${data.component.html}`, function (html) {
            $(`${data.component.selector}`).html(html);
        });
    }, delay - 70);

    setTimeout(function () {
        // Add file js to tag body

        if (data.imports !== undefined) {
            for (let element of data.imports) {
                $.get(`${data.imports}`, function (js) {
                    $("head").append(`<script defer src="${element}"></script>`);
                });
            }
        }

        // Delay
        setTimeout(function () { }, 30);

        $.get(`${data.js}`, function (js) {
            if (data.js !== "") {
                $("body").append(`<script defer src="${data.js}"></script>`);
            }
        });
    }, delay);
};
