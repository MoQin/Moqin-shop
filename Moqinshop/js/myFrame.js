// Initialize your app
var myApp = new Framework7();

 var $$ = Dom7;
 
    $$('.open-left-panel0').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left0');
    });
 
    $$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    });
 
    $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });