import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  private turnUserAdminUseCase: TurnUserAdminUseCase;
  constructor(turnUserAdminUseCase: TurnUserAdminUseCase) {
    this.turnUserAdminUseCase = turnUserAdminUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(user);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
