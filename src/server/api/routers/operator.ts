
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const operatorRouter = createTRPCRouter({
  // Test Route for checking connection
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Is It me ${input.text}`,
      };
    }),
    // Create An Operator
  create: protectedProcedure
  .input(z.object({ name: z.string(),logo: z.string(),        
    website: z.string(),     
    public_email: z.string(),
    public_phone: z.string() }))
  .mutation(async ({ input,ctx }) => {
    const operator = await ctx.prisma.operator.create({
      data: {
        name:input.name,       
        logo:input.logo,        
        website:input.website,     
        public_email:input.public_email,
        public_phone:input.public_phone,
      },
    })
    console.log("TRPC Operator", operator)
    return operator;
  }),
  // Count All Operators
  count: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.operator.count();
  }),
  // Find All Operators
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.operator.findMany({
      orderBy: [
        {
          name: 'asc',
        },
      ],
      // select: {
      //   id: true,
      //   name: true,
      // },
    });
  }),
  // Find the Operator
  // Update the Operator

  
});