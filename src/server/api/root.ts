import { createTRPCRouter } from "./trpc";
import { operatorRouter } from "./routers/operator";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
    operator: operatorRouter,
    user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
