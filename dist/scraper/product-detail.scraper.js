"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeProductDetail = scrapeProductDetail;
const crawlee_browser_1 = require("./crawlee.browser");
async function scrapeProductDetail(url) {
    let product = null;
    const crawler = (0, crawlee_browser_1.createCrawler)(async ({ page }) => {
        product = {
            title: await page.textContent("h1"),
            description: await page.textContent(".description"),
            price: Number((await page.textContent(".price"))?.replace(/\D/g, "")),
        };
    });
    await crawler.run([url]);
    return product;
}
//# sourceMappingURL=product-detail.scraper.js.map