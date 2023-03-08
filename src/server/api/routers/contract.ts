import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const contractRouter = createTRPCRouter({
  // Test Route for checking connection
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Is It me ${input.text}`,
      };
    }),

  // Count All Contracts
  count: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.contract.count();
  }),

  // Find All Contracts
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.contract.findMany({
      orderBy: [
        {
          expiry: "asc",
        },
      ],
      where: {
        OR: [
          {
            status: "ACTIVE",
          },
          { status: "INREVIEW" },
        ],
      },
      include: {
        operator: true,
      },
    });
  }),
});
