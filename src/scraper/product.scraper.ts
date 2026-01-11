import { createCrawler } from "./crawlee.browser";

export async function scrapeProducts(url: string) {
  const products: any[] = [];

  const crawler = createCrawler(async ({ page }) => {
    const data = await page.$$eval(".product-card", (els) =>
      els.map((e) => ({
        name: e.querySelector(".title")?.textContent,
        price: Number(
          e.querySelector(".price")?.textContent?.replace(/\D/g, "")
        ),
        link: e.querySelector("a")?.href,
      }))
    );
    products.push(...data);
  });

  await crawler.run([url]);
  return products;
}
