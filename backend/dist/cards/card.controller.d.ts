import { CardService } from "./card.service";
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getAllCards(): void;
    getCardById(id: string): void;
    createCard(): void;
    updateCard(id: string): void;
    deleteCard(id: string): void;
}
