import { SecretWordService, SecretNumberService } from './../services/SecretMessageService';
import { Controller, Get, PathParams, UseBefore } from "@tsed/common";
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { Returns, Description } from '@tsed/swagger';

@Controller("/secretMessage")
@UseBefore(AuthMiddleware)
export class SecretMessageController {
  constructor(
    private readonly secretWordService: SecretWordService,
    private readonly secretNumberService: SecretNumberService
  ) { }

  @Get("/word")
  @Description("Get secret word.")
  @Returns(401, { description: "Unauthorized" })
  getSecretWord() {
    return { secretMessage: this.secretWordService.getSecretWord() };
  }

  @Get("/number/:id")
  @Description("Get secret number.")
  @Returns(401, { description: "Unauthorized" })
  getSecretNumber(@PathParams('id') id: number) {
    return { secretMessage: this.secretNumberService.getSecretNumber(id) }
  }
}
