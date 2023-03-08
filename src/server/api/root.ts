import { createTRPCRouter } from "./trpc";
import { operatorRouter } from "./routers/operator";
import { userRouter } from "./routers/user";
import { contractRouter } from "./routers/contract";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  operator: operatorRouter,
  user: userRouter,
  contract: contractRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
