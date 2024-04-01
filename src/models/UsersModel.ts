import prisma from "../database/prisma";
import { User } from "../types/Users";

class UsersModel {
  async getByEmail(email: string) {
    return prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
  async create({
    first_name,
    last_name,
    email,
    cellphone,
    password,
    master,
    support,
  }: User) {
    return prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
        cellphone,
        password,
        master,
        support,
      },
    });
  }
}

export default UsersModel;
