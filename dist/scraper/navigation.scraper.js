"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeNavigation = scrapeNavigation;
const crawlee_browser_1 = require("./crawlee.browser");
async function scrapeNavigation(url) {
    const results = [];
    const crawler = (0, crawlee_browser_1.createCrawler)(async ({ page }) => {
        const links = await page.$$eval("nav a", (els) => els.map((e) => ({
            title: e.textContent?.trim(),
            href: e.getAttribute("href"),
        })));
        results.push(...links);
    });
    await crawler.run([url]);
    return results;
}
//# sourceMappingURL=navigation.scraper.js.map