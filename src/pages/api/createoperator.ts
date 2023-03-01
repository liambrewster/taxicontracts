import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { userId,name,logo,website,public_email,public_phone } = req.body;


    // const { data: session } = useSession();

    if (!userId || !name) {
      return res.status(401).send({message:"Missing Data, Check and Try Again"});
    }
try {
    const operator = await prisma.operator.create({
        data: {
          name,       
          logo,        
          website,     
          public_email,
          public_phone,
        },
      })
      .then(async (operator) => {
          console.log("Operator",operator);
          await prisma.user.update({
              where: {
                id: userId,
              },
              data: {
                  operatorId: operator.id,
              },
            })
            return 
      });
  
      const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            operatorId: true,
          },
        })
  
      return res.status(200).send({
        user:user});
} catch (error) {
    return res.status(500).send({message:error});
}
}