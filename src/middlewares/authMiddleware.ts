import { HeaderParams, Middleware } from '@tsed/common';
import { Unauthorized } from "@tsed/exceptions";

@Middleware()
export class AuthMiddleware {
    use(@HeaderParams("x-token") token: string): void {
        if (token !== 'abcdef') {
            throw new Unauthorized("Unauthorized. Invalid token.")
        }
    }
}
