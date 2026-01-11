import { Controller, Get } from "@nestjs/common";

@Controller("view-history")
export class ViewHistoryController {
  @Get()
  findAll() {
    return {
      message: "View history endpoint",
    };
  }
}
