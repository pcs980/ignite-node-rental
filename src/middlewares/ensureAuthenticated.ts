import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";
import { PUBLIC_KEY } from "../shared/constants";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const auth = request.headers.authorization;
  console.log(auth);

  if (!auth) {
    return response.status(403).send('Token missing');
  }

  const [, token] = auth.split(' ');
  console.log(token);

  try {
    const { sub: id } = verify(token, 'PUBLIC_KEY') as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user) {
      response.status(403).send('User not found');
    }
  } catch (error) {
    return response.status(401).send('Invalid authorization');
  }

  next();
}
