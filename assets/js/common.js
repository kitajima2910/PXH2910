

/**
 * Get component
 * 
 * @param {Object} data 
 */
export const getComponent = (data = { component: { html, selector }, css, imports, js }, delay = 100) => {

    // Add file css to tag head
    $.get(`${data.css}`, (css) => {
        if (data.js !== "") {
            $("head").append(`<link rel="stylesheet" href="${data.css}">`);
        }
    });

    setTimeout(() => {
        // Add file html to tag selector
        $.get(`${data.component.html}`, (html) => {
            $(`${data.component.selector}`).html(html);
        });
    }, delay - 50);

    setTimeout(() => {
        // Add file js to tag body
        
        if (data.imports !== undefined) {
            for (let element of data.imports) {
                $.get(`${data.imports}`, (js) => {
                    $("head").append(`<script defer src="${element}"></script>`);
                });
            }
        }

        // Delay
        setTimeout(() => { }, 10);

        $.get(`${data.js}`, (js) => {
            if (data.js !== "") {
                $("body").append(`<script defer src="${data.js}"></script>`);
            }
        });
    }, delay);
};
