import { CreateCategoryDto } from "./category.dto";
import { Category } from "./category.entity";
export declare class CategoryService {
    private categories;
    create(dto: CreateCategoryDto): Category;
    findAll(): Category[];
}
