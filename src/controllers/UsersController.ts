import UsersModel from "../models/UsersModel";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import bcryptjs, { hash } from "bcryptjs";

class UsersController {
  async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      const user = await UsersModel.getByEmail(email);
      if (!user) {
        return response.status(401).json({
          message: {
            title: "Usuário não encontrado!",
            description: "Peça que seu gestor crie uma conta para você.",
          },
        });
      } else {
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
          return response.status(401).json({
            message: {
              title: "Senha incorreta!",
              description: "Tente novamente.",
            },
          });
        } else {
          const token = sign(
            {
              id: user.id,
              email: user.email,
              master: user.master,
              support: user.support,
            },
            process.env.JWT_SECRET as string,
            {
              expiresIn: "5d",
            }
          );

          return response.status(200).json({
            message: {
              title: "Login efetuado com sucesso!",
              description: "Bem-vindo!",
            },
            user: {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              cellphone: user.cellphone,
              master: user.master,
              support: user.support,
              avatar: user.avatar,
              created_at: user.created_at,
              updated_at: user.updated_at,
              token: token,
            },
          });
        }
      }
    } catch (error: any) {
      console.error(
        "Erro ao fazer login. UsersController linha 64.",
        error.message
      );
      return response.status(400).json({
        message: {
          title: "Erro!",
          description: "Algum erro inesperado ocorreu.",
        },
      });
    }
  }

  async createUser(request: Request, response: Response) {
    try {
      const {
        first_name,
        last_name,
        email,
        cellphone,
        password,
        master = false,
        support = false,
      } = request.body;

      const user = await UsersModel.getByEmail(email);

      if (user) {
        return response.status(400).json({
          message: {
            title: "E-mail já cadastrado!",
            description: "Escolha outro e-mail para continuar.",
          },
        });
      } else {
        const passwordHash = await hash(password, 16);
        const user = await UsersModel.create({
          first_name,
          last_name,
          email,
          cellphone,
          password: passwordHash,
          master,
          support,
        });
        return response.status(201).json({
          user,
          message: {
            title: "Usuário criado com sucesso!",
            description: "Conta disponível para login.",
          },
        });
      }
    } catch (error: any) {
      console.error(
        "Erro ao criar usuário. UserController linha 60.",
        error.message
      );
      return response.status(400).json({
        message: {
          title: "Erro!",
          description: "Algum erro inesperado ocorreu.",
        },
      });
    }
  }
}

export default UsersController;
