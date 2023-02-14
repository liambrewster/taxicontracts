/*
  Warnings:

  - A unique constraint covering the columns `[contractId,email]` on the table `Bid` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bid_contractId_email_key" ON "Bid"("contractId", "email");
