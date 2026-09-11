import { Router } from 'express';
import * as UserController from '../controllers/user.controller.ts';

const routerUsers = Router();

routerUsers.get('/', UserController.getAllUsers);
routerUsers.get('/:id', UserController.getUserById);
routerUsers.post('/', UserController.CreateUser);
routerUsers.put('/:id', UserController.UpdateUser);

export default routerUsers;