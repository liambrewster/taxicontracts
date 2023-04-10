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

  // Create A Contract
  create: protectedProcedure
    .input(
      z.object({
        internalId: z.string(),
        status: z
          .literal("DRAFT")
          .or(z.literal("PENDING"))
          .or(z.literal("ACTIVE")),
        pickup: z.string(),
        destination: z.string(),
        collections: z.number(),
        distance: z.number(),
        vehicleSize: z.number(),
        timings: z.string(),
        days: z.string(),
        journeytype: z
          .literal("REGULAR")
          .or(z.literal("SINGLE"))
          .or(z.literal("RETURN")),
        expiry: z.date(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const operator = await ctx.prisma.contract.create({
        data: {
          internalId: input.internalId,
          operatorId: ctx.session.user.operatorId,
          userId: ctx.session.user.id,
          status: input.status,
          pickup: input.pickup,
          destination: input.destination,
          collections: input.collections,
          distance: input.distance,
          vehicleSize: input.vehicleSize,
          timings: input.timings,
          days: input.days,
          journeytype: input.journeytype,
          expiry: input.expiry,
        },
      });
      return operator;
    }),
});
