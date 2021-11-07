import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    try {
      const newUser = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(newUser);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
