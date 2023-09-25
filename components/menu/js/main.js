window.menu = 0;

$(document).ready(() => {
    while (window.menu < 2) {

        try {
            $(".ss-menu").delay(10).ssMenu();
        } catch (error) {
            
        }
        
        window.menu++;
    };
});
