import { SecretWordService, SecretNumberService } from './../services/SecretMessageService';
import { Controller, Get, PathParams, UseBefore } from "@tsed/common";
import { AuthMiddleware } from '../middlewares/authMiddleware';

@Controller("/secretMessage")
@UseBefore(AuthMiddleware)
export class SecretMessageController {
  constructor(
    private readonly secretWordService: SecretWordService,
    private readonly secretNumberService: SecretNumberService
  ) { }

  @Get("/word")
  getSecretWord() {
    return { secretMessage: this.secretWordService.getSecretWord() };
  }

  @Get("/number/:id")
  getSecretNumber(@PathParams('id') id: number) {
    return { secretMessage: this.secretNumberService.getSecretNumber(id) }
  }
}
