import { Controller, Get, Post, Body } from "@nestjs/common";
import { NavigationService } from "./navigation.service";
import { CreateNavigationDto } from "./navigation.dto";

@Controller("navigation")
export class NavigationController {
  constructor(private readonly service: NavigationService) {}

  @Post()
  create(@Body() dto: CreateNavigationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
