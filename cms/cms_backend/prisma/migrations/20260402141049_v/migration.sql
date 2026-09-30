/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `PageElement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PageElement_type_key" ON "PageElement"("type");
