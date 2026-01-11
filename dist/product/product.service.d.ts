import { CreateProductDto } from "./product.dto";
import { Product } from "./product.entity";
export declare class ProductService {
    private products;
    create(dto: CreateProductDto): Product;
    findAll(): Product[];
}
