"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeCategories = scrapeCategories;
const crawlee_browser_1 = require("./crawlee.browser");
async function scrapeCategories(url) {
    const categories = [];
    const crawler = (0, crawlee_browser_1.createCrawler)(async ({ page }) => {
        const data = await page.$$eval(".category", (els) => els.map((e) => ({
            name: e.textContent?.trim(),
            slug: e.getAttribute("data-slug"),
        })));
        categories.push(...data);
    });
    await crawler.run([url]);
    return categories;
}
//# sourceMappingURL=category.scraper.js.map