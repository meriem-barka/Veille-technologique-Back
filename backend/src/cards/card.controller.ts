// card.controller.ts
import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { CardService } from "./card.service";

@Controller("card") // Définissez la route de base pour ce contrôleur
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getAllCards() {
    // Implémentez la récupération de toutes les cartes
  }

  @Get(":id")
  getCardById(@Param("id") id: string) {
    // Implémentez la récupération d'une carte par ID
  }

  @Post()
  createCard() {
    // Implémentez la création d'une nouvelle carte
  }

  @Put(":id")
  updateCard(@Param("id") id: string) {
    // Implémentez la mise à jour d'une carte par ID
  }

  @Delete(":id")
  deleteCard(@Param("id") id: string) {
    // Implémentez la suppression d'une carte par ID
  }
}
