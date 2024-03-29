import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ email, name }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }
    const newUser = this.usersRepository.create({ name, email });

    return newUser;
  }
}

export { CreateUserUseCase };
