/**
 * 
 * Set Routes
 * 
 * @param {Object} data 
 * @param {Number} delay 
 */
export function setRoute(data = { selectorParent, initRoutes, pageDefault: { func: false, process } }, delay = 500) {

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
export function getComponent(data = { component: { html, selector }, css, imports, js }, delay = 500) {

    // Add file css to tag head
    if (data.css != undefined) {
        $.get(`${data.css}`, function (css) {
            if (data.js !== "") {
                $("head").append(`<link rel="stylesheet" href="${data.css}">`);
            }
        });
    }

    // Add file sub-js to tag head
    if (data.imports !== undefined) {
        for (let element of data.imports) {
            $.get(`${data.imports}`, function (js) {
                $("head").append(`<script defer src="${element}"></script>`);
            });
        }
    }

    // Add file html to tag selector
    $.get(`${data.component.html}`, function (html) {
        $(`${data.component.selector}`).html(html);
    });

    // Add file js to tag body
    $.get(`${data.js}`, function (js) {
        if (data.js !== "") {
            $("body").delay(delay).append(`<script defer src="${data.js}"></script>`);
        }
    });
};

/**
 * 
 * Load JS header
 * 
 * @param {Array} data 
 */
export function loadJSHeader(data = []) {
    for (let element of data) {
        $.get(`${element}`, function (js) {
            $("head").append(`<script defer src="${element}"></script>`);
        });
    }
}

/**
 * 
 * Load CSS header
 * 
 * @param {Array} data 
 */
export function loadCSSHeader(data = []) {
    for (let element of data) {
        $.get(`${element}`, function (css) {
            $("head").append(`<link rel="stylesheet" href="${element}">`);
        });
    }
}

/**
 * 
 * Load HTML header
 * 
 * @param {Array} data 
 */
export function loadHTMLBody(data = []) {
    for (let element of data) {
        $.get(`${element[0]}`, function (html) {
            $(`${element[1]}`).html(html);
        });
    }
}

/**
 * 
 * Delay render
 * 
 * @param {Array} data 
 */
export function delayRender(data = [], delay = 500) {
    setTimeout(function () {
        for (let element of data) {
            $(element).css("display", "block");
        }
    }, delay)
}