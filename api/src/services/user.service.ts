import prisma from "../lib/prisma.ts";
import type { User, CreateUser, UpdateUser } from "../types/user.type.ts";

// busca TODOS os usuários no banco, do mais novo para o mais antigo.
export async function findAllUsers(): Promise<User[]> {
  return await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
}

// busca UM usuário pelo id. Se não existir, lança um erro.
export async function findUserById(id: number): Promise<User> {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) throw new Error(`Usuário de id ${id} não encontrado.`);

  return user;
}

//cria um usuário. O id e o createdAt sao gerados pelo próprio banco.
export async function insertUser(data: CreateUser): Promise<User> {
  return await prisma.user.create({ data });
}

// Atualiza um usuário. Primeiro confere se ele existe.
export async function modifyUser(id: number, data: UpdateUser): Promise<User> {
  await findUserById(id);

  return await prisma.user.update({
    where: { id },
    data,
  });
}

// Remove um usuário. Primeiro confere se ele existe.
export async function removeUser(id: number): Promise<void> {
  await findUserById(id);

  await prisma.user.delete({ where: { id } });
}