// list.controller.ts
import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { ListService } from "./list.service";

@Controller("list") // Définissez la route de base pour ce contrôleur
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getAllLists() {
    // Implémentez la récupération de toutes les listes
  }

  @Get(":id")
  getListById(@Param("id") id: string) {
    // Implémentez la récupération d'une liste par ID
  }

  @Post()
  createList() {
    // Implémentez la création d'une nouvelle liste
  }

  @Put(":id")
  updateList(@Param("id") id: string) {
    // Implémentez la mise à jour d'une liste par ID
  }

  @Delete(":id")
  deleteList(@Param("id") id: string) {
    // Implémentez la suppression d'une liste par ID
  }
}
