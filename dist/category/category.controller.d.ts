import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./category.dto";
export declare class CategoryController {
    private readonly service;
    constructor(service: CategoryService);
    create(dto: CreateCategoryDto): import("./category.entity").Category;
    findAll(): import("./category.entity").Category[];
}
