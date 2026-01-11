import { Injectable } from "@nestjs/common";
import { Navigation } from "./navigation.entity";
import { CreateNavigationDto } from "./navigation.dto";
import { randomUUID } from "crypto";

@Injectable()
export class NavigationService {
  private items: Navigation[] = [];

  create(dto: CreateNavigationDto) {
    const nav: Navigation = {
      id: randomUUID(),
      ...dto,
    };
    this.items.push(nav);
    return nav;
  }

  findAll() {
    return this.items;
  }
}
