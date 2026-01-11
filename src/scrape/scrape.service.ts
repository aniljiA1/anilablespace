import { Injectable } from "@nestjs/common";
import { scrapeQueue } from "./scrape.queue";

@Injectable()
export class ScrapeService {
  async start(url: string) {
    return scrapeQueue.add("scrape-job", { url });
  }
}
