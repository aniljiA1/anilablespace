import { Controller, Post, Body } from "@nestjs/common";
import { ScrapeService } from "./scrape.service";

@Controller("scrape")
export class ScrapeController {
  constructor(private readonly service: ScrapeService) {}

  @Post()
  scrape(@Body("url") url: string) {
    return this.service.start(url);
  }
}
