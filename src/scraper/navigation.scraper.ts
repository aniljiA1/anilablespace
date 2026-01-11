import { createCrawler } from "./crawlee.browser";

export async function scrapeNavigation(url: string) {
  const results: any[] = [];

  const crawler = createCrawler(async ({ page }) => {
    const links = await page.$$eval("nav a", (els) =>
      els.map((e) => ({
        title: e.textContent?.trim(),
        href: e.getAttribute("href"),
      }))
    );
    results.push(...links);
  });

  await crawler.run([url]);
  return results;
}
