import type { Request, Response } from 'express';
import * as UserService from "../services/user.service.ts";
import type { CreateUser, UpdateUser } from '../types/user.type.ts';

export async function getAllUsers(_request: Request, response: Response): Promise<void> {
  const users = await UserService.findAllUsers();

  response.status(200).json(users);
}

export async function getUserById(request: Request, response: Response): Promise<void> {
  const id = Number(request.params.id);
  const user = await UserService.findUserById(id);

  response.status(200).json(user);
}

export async function CreateUser(request: Request, response: Response): Promise<void> {
  const { name, email, password } = request.body as CreateUser;

  const user = await UserService.insertUser({ name, email, password });
  response.status(200).json(user);
}

export async function UpdateUser(request: Request, response: Response): Promise<void> {
  const id = Number(request.params.id);
  const { name, email, password } = request.body as UpdateUser;

  const user = await UserService.modifyUser(id, { name, email, password });

  response.status(200).json(user);

}

export async function deleteUser(request: Request, response: Response): Promise<void> {
  const id = Number(request.params.id); // (+request.params.id) subtitui Number.

  await UserService.removeUser(id);

  response.status(204).send();
}