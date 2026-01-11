import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./product.dto";
import { Product } from "./product.entity";
import { randomUUID } from "crypto";

@Injectable()
export class ProductService {
  private products: Product[] = [];

  create(dto: CreateProductDto) {
    const product: Product = {
      id: randomUUID(),
      ...dto,
    };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }
}
