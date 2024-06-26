import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../database/prisma";

interface JwtPayload {
  id: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: {
        title: "Não autorizado.",
        description: "Por favor, faça login para continuar.",
      },
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = verify(token, process.env.JWT_KEY ?? "") as JwtPayload;

    const user = await prisma.users.findUnique({
      where: { id },
    });

    if (user) {
      return next();
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: {
        title: "Não autorizado.",
        description: "Usuário não autorizado.",
      },
    });
  }
};
