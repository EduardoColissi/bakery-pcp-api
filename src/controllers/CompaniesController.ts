import CompaniesModel from "../models/CompaniesModel";
import { Request, Response } from "express";
import { Company } from "../types/Companies";
import { companyValidator } from "../utils/validators/companyValidator";

class CompaniesController {
  async createCompany(request: Request, response: Response) {
    try {
      const {
        name,
        fantasyName,
        cnpj,
        email,
        cellphone,
        logo,
        address,
        colors,
      }: Company = request.body;

      const errors = companyValidator({
        name,
        fantasyName,
        cnpj,
        email,
        cellphone,
        address,
        colors,
      });

      if (errors.length > 0) {
        return response.status(400).json({
          message: {
            type: "warning",
            description: "Preencha os campos obrigatórios.",
          },
          errors,
        });
      }

      const company = await CompaniesModel.create({
        name,
        fantasyName,
        cnpj,
        email,
        cellphone,
        logo,
        colors,
        address,
      });

      return response.status(201).json({
        message: {
          type: "success",
          description: "Empresa criada!",
        },
        company,
      });
    } catch (error) {
      return response.status(400).json({
        message: {
          type: "error",
          description: "Erro ao criar empresa!",
        },
      });
    }
  }
  getAllCompanies(request: Request, response: Response) {
    try {
      const companies = CompaniesModel.getAll();
      return response.status(200).json(companies);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: {
          type: "error",
          description: "Erro ao buscar empresas!",
        },
      });
    }
  }
}

export default CompaniesController;
