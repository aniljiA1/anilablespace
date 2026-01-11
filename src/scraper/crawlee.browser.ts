import { PlaywrightCrawler } from "crawlee";

export function createCrawler(handler: (context: any) => Promise<void>) {
  return new PlaywrightCrawler({
    maxConcurrency: 5,
    launchContext: {
      launchOptions: {
        headless: true,
      },
    },
    requestHandler: handler,
  });
}
