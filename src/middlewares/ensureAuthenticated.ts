import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";
import { PUBLIC_KEY } from "../shared/constants";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const auth = request.headers.authorization;
  console.log(auth);

  if (!auth) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = auth.split(' ');

  try {
    const { sub: id } = verify(token, PUBLIC_KEY) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 401);
    }

    request.user = {
      id: user.id,
    };
  } catch (error) {
    throw new AppError('Invalid authorization', 401);
  }


  next();
}
