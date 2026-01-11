"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeProducts = scrapeProducts;
const crawlee_browser_1 = require("./crawlee.browser");
async function scrapeProducts(url) {
    const products = [];
    const crawler = (0, crawlee_browser_1.createCrawler)(async ({ page }) => {
        const data = await page.$$eval(".product-card", (els) => els.map((e) => ({
            name: e.querySelector(".title")?.textContent,
            price: Number(e.querySelector(".price")?.textContent?.replace(/\D/g, "")),
            link: e.querySelector("a")?.href,
        })));
        products.push(...data);
    });
    await crawler.run([url]);
    return products;
}
//# sourceMappingURL=product.scraper.js.map