import { Navigation } from "./navigation.entity";
import { CreateNavigationDto } from "./navigation.dto";
export declare class NavigationService {
    private items;
    create(dto: CreateNavigationDto): Navigation;
    findAll(): Navigation[];
}
