import { Controller, Get, PathParams } from "@tsed/common";

@Controller("/secretMessage")
export class SecretMessageController {
  @Get("/word")
  getSecretWord() {
    return { secretMessage: 'hello' };
  }

  @Get("/number/:id")
  getSecretNumber(@PathParams('id') id: number) {
    return { secretMessage: 123 + id }
  }
}
