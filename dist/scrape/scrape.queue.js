"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeQueue = void 0;
const bullmq_1 = require("bullmq");
exports.scrapeQueue = new bullmq_1.Queue("scrape", {
    connection: {
        host: "localhost",
        port: 6379,
    },
});
//# sourceMappingURL=scrape.queue.js.map