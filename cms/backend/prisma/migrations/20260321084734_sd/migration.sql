/*
  Warnings:

  - You are about to drop the column `visible` on the `Admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `Admin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "visible",
ADD COLUMN     "password" TEXT  NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "username" SET NOT NULL;

-- CreateIndex
-- CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");
