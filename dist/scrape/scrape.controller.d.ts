import { ScrapeService } from "./scrape.service";
export declare class ScrapeController {
    private readonly service;
    constructor(service: ScrapeService);
    scrape(url: string): Promise<import("bullmq").Job<any, any, string>>;
}
