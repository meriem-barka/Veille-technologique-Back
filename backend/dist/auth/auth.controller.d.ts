import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(user: any): Promise<void>;
    login(credentials: any): Promise<void>;
}
