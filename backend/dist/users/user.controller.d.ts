import { UsersService } from "./user.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): void;
    getUserById(id: string): void;
    createUser(): void;
    updateUser(id: string): void;
    deleteUser(id: string): void;
}
