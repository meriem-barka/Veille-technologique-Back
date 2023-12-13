// users.controller.ts
import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller("user") // Définissez la route de base pour ce contrôleur
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    // Implémentez la récupération de tous les utilisateurs
  }

  @Get(":id")
  getUserById(@Param("id") id: string) {
    // Implémentez la récupération d'un utilisateur par ID
  }

  @Post()
  createUser() {
    // Implémentez la création d'un nouvel utilisateur
  }

  @Put(":id")
  updateUser(@Param("id") id: string) {
    // Implémentez la mise à jour d'un utilisateur par ID
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    // Implémentez la suppression d'un utilisateur par ID
  }
}
