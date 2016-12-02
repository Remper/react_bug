"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_bug_1 = require('./app/app.bug');
if (process.env.ENV === 'build') {
    core_1.enableProdMode();
}
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_bug_1.Bug);
}
exports.main = main;
if (document.readyState === 'complete') {
    main();
}
else {
    document.addEventListener('DOMContentLoaded', main);
}
//# sourceMappingURL=main.js.map