import { Worker } from "bullmq";

new Worker(
  "scrape",
  async (job) => {
    console.log("Scraping job:", job.data);
    return { success: true };
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
