"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
new bullmq_1.Worker("scrape", async (job) => {
    console.log("Scraping job:", job.data);
    return { success: true };
}, {
    connection: {
        host: "localhost",
        port: 6379,
    },
});
//# sourceMappingURL=scrape.processor.js.map