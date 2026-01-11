import { ProductService } from "./product.service";
import { CreateProductDto } from "./product.dto";
export declare class ProductController {
    private readonly service;
    constructor(service: ProductService);
    create(dto: CreateProductDto): import("./product.entity").Product;
    findAll(): import("./product.entity").Product[];
}
