const remote = require('electron').remote;
document.getElementById("min-btn").addEventListener("click", function(e) {
    var window = remote.getCurrentWindow();
    window.minimize();
    console.log("min");
});

document.getElementById("close-btn").addEventListener("click", function(e) {
    var window = remote.getCurrentWindow();
    console.log("cls");
    window.close();
});

// var shell = require('electron').shell;
// //open links externally by default
// $(document).on('click', 'a[href^="http"]', function(event) {
//     event.preventDefault();
//     shell.openExternal(this.href);
// });
