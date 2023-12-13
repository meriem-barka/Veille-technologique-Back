// app.module.ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CardModule } from "./cards/card.module"; // Importez le module de cartes

@Module({
  imports: [CardModule], // Ajoutez le module de cartes ici
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
