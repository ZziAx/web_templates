/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `PageBuilder` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uri]` on the table `PageBuilder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `PageBuilder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PageBuilder" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PageBuilder_name_key" ON "PageBuilder"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PageBuilder_uri_key" ON "PageBuilder"("uri");
