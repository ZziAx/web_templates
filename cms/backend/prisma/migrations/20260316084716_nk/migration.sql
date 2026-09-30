/*
  Warnings:

  - You are about to drop the column `pageDataId` on the `PageElement` table. All the data in the column will be lost.
  - Added the required column `pageElementId` to the `PageData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PageElement" DROP CONSTRAINT "PageElement_pageDataId_fkey";

-- AlterTable
ALTER TABLE "PageData" ADD COLUMN     "pageElementId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PageElement" DROP COLUMN "pageDataId";

-- AddForeignKey
ALTER TABLE "PageData" ADD CONSTRAINT "PageData_pageElementId_fkey" FOREIGN KEY ("pageElementId") REFERENCES "PageElement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
