import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { NavigationModule } from "./navigation/navigation.module";
import { ScrapeModule } from "./scrape/scrape.module";
import { HealthController } from "./health/health.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    ProductModule,
    NavigationModule,
    ScrapeModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
