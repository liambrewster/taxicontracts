/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OpPlan" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MANAGER', 'ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PENDING', 'ACTIVE', 'INREVIEW', 'CLOSED', 'COMPLETE', 'DELETED');

-- CreateEnum
CREATE TYPE "JourneyType" AS ENUM ('REGULAR', 'SINGLE', 'RETURN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "operatorId" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "Operator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "public_email" TEXT,
    "public_phone" TEXT,
    "plan" "OpPlan" NOT NULL DEFAULT 'BASIC',

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "internalId" TEXT NOT NULL,
    "operatorId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "pickup" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "collections" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "vehicleSize" INTEGER NOT NULL DEFAULT 4,
    "timings" TEXT NOT NULL,
    "days" TEXT NOT NULL,
    "journeytype" "JourneyType" NOT NULL DEFAULT 'REGULAR',
    "submitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bid" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "submitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "licensingAuthority" TEXT NOT NULL,
    "bidAmount" INTEGER NOT NULL,
    "winningBid" BOOLEAN,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Operator_name_key" ON "Operator"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
