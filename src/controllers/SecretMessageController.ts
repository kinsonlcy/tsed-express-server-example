import { SecretWordService, SecretNumberService } from './../services/SecretMessageService';
import { Controller, Get, PathParams } from "@tsed/common";

@Controller("/secretMessage")
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
