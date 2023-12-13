import { ListService } from "./list.service";
export declare class ListController {
    private readonly listService;
    constructor(listService: ListService);
    getAllLists(): void;
    getListById(id: string): void;
    createList(): void;
    updateList(id: string): void;
    deleteList(id: string): void;
}
