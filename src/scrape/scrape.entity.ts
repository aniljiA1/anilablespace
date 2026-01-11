export class ScrapeJob {
  id: string;
  url: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  createdAt: Date;
  finishedAt?: Date;
}
