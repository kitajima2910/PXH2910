/**
 * Get component
 * 
 * @param {Object} data 
 */
export const getComponent = (data = { component: { html, selector }, css, js }) => {

    // Add file css to tag head
    $.get(`${data.css}`, (css) => {
        if(data.js !== "") {
            $("head").append(`<link rel="stylesheet" href="${data.css}">`);
        }
    });

    // Add file html to tag selector
    $.get(`${data.component.html}`, (html) => {
        $(`${data.component.selector}`).html(html);
    });

    // Add file js to tag body
    $.get(`${data.js}`, (js) => {
        if(data.js !== "") {
            $("body").append(`<script type="module" src="${data.js}"></script>`);
        }
    });

};
