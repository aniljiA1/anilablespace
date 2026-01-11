"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCrawler = createCrawler;
const crawlee_1 = require("crawlee");
function createCrawler(handler) {
    return new crawlee_1.PlaywrightCrawler({
        maxConcurrency: 5,
        launchContext: {
            launchOptions: {
                headless: true,
            },
        },
        requestHandler: handler,
    });
}
//# sourceMappingURL=crawlee.browser.js.map