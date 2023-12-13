// auth.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() user: any) {
    return this.authService.register(user);
  }

  @Post("login")
  async login(@Body() credentials: any) {
    return this.authService.login(credentials);
  }
}
