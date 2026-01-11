import { createCrawler } from "./crawlee.browser";

export async function scrapeCategories(url: string) {
  const categories: any[] = [];

  const crawler = createCrawler(async ({ page }) => {
    const data = await page.$$eval(".category", (els) =>
      els.map((e) => ({
        name: e.textContent?.trim(),
        slug: e.getAttribute("data-slug"),
      }))
    );
    categories.push(...data);
  });

  await crawler.run([url]);
  return categories;
}
