import { Service } from "@tsed/common";

@Service()
export class SecretWordService {
    private readonly secretWord: string = "hello";
    getSecretWord(): string {
        return this.secretWord;
    }
}

@Service()
export class SecretNumberService {
    private readonly secretNumber: number = 123;
    getSecretNumber(id: number): number {
        return this.secretNumber + id;
    }
}
