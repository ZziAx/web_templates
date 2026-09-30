/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Made the column `password` on table `Admin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "password" SET DEFAULT 's';

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");
