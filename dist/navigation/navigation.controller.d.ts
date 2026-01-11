import { NavigationService } from "./navigation.service";
import { CreateNavigationDto } from "./navigation.dto";
export declare class NavigationController {
    private readonly service;
    constructor(service: NavigationService);
    create(dto: CreateNavigationDto): import("./navigation.entity").Navigation;
    findAll(): import("./navigation.entity").Navigation[];
}
