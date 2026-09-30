-- CreateEnum
CREATE TYPE "OrderState" AS ENUM ('CANCELED', 'PROCCESSED', 'WAITING', 'DELIVERED');

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "state" "OrderState" NOT NULL DEFAULT 'WAITING';
