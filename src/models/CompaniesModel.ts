import prisma from "../database/prisma";
import { Company } from "../types/Companies";

class CompaniesModel {
  async create({
    name,
    fantasyName,
    cnpj,
    email,
    cellphone,
    logo,
    colors,
    address,
  }: Company) {
    try {
      return prisma.companies.create({
        data: {
          name,
          fantasy_name: fantasyName,
          cnpj,
          email,
          cellphone,
          logo,
          primary_color: colors.primaryColor,
          secondary_color: colors.secondaryColor,
          street: address.street,
          number: Number(address.number),
          complement: address.complement,
          neighborhood: address.neighborhood,
          city: address.city,
          state: address.state,
        },
      });
    } catch (error) {
      console.log("erro");
      console.log(error);
    }
  }
  async getById(id: string) {
    return prisma.companies.findUnique({
      where: {
        id,
      },
    });
  }
  async getAll() {
    return prisma.companies.findMany();
  }
  async update({
    id,
    name,
    fantasyName,
    cnpj,
    email,
    cellphone,
    logo,
    colors,
    address,
  }: Company) {
    return prisma.companies.update({
      where: {
        id,
      },
      data: {
        name,
        fantasy_name: fantasyName,
        cnpj,
        email,
        cellphone,
        logo,
        primary_color: colors.primaryColor,
        secondary_color: colors.secondaryColor,
        street: address.street,
        number: Number(address.number),
        complement: address.complement,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
      },
    });
  }
  async delete(id: string) {
    return prisma.companies.delete({
      where: {
        id,
      },
    });
  }
}

export default new CompaniesModel();
