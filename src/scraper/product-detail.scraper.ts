import { createCrawler } from "./crawlee.browser";

export async function scrapeProductDetail(url: string) {
  let product: any = null;

  const crawler = createCrawler(async ({ page }) => {
    product = {
      title: await page.textContent("h1"),
      description: await page.textContent(".description"),
      price: Number((await page.textContent(".price"))?.replace(/\D/g, "")),
    };
  });

  await crawler.run([url]);
  return product;
}
