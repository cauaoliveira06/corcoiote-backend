import users from "../mocks/user.mock.ts";
import type { User } from "../types/user.type.ts";

export function findAllUsers():User[]{
  return users;
}
