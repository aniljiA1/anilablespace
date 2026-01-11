import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./category.dto";
import { Category } from "./category.entity";
import { randomUUID } from "crypto";

@Injectable()
export class CategoryService {
  private categories: Category[] = [];

  create(dto: CreateCategoryDto) {
    const category: Category = {
      id: randomUUID(),
      name: dto.name,
      slug: dto.slug,
      createdAt: new Date(),
    };

    this.categories.push(category);
    return category;
  }

  findAll() {
    return this.categories;
  }
}
