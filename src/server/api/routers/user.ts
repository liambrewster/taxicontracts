import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // Test Route for checking connection
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Is It me ${input.text}`,
      };
    }),

  // Find User By ID
  // Find User By Operator
  // Find All Users
  // Count All Users
  count: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.count();
  }),
  // Update User By ID

  // Add Operator to a User
  addOperator: protectedProcedure
    .input(
      z.object({
        operatorId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const updateUser = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          operatorId: input.operatorId,
        },
      });
      return updateUser;
    }),

  // Delete User
});
