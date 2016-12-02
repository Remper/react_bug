///<reference path="../node_modules/@types/node/index.d.ts"/>
"use strict";
require('core-js/client/shim');
require('reflect-metadata');
require('ts-helpers');
require('zone.js/dist/zone');
if (process.env.ENV === 'build') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=vendor.js.map