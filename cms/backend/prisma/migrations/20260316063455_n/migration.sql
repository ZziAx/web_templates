-- AlterTable
ALTER TABLE "PageElement" ADD COLUMN     "pageDataId" INTEGER;

-- CreateTable
CREATE TABLE "PageData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "pageBuilderId" INTEGER,

    CONSTRAINT "PageData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PageElement" ADD CONSTRAINT "PageElement_pageDataId_fkey" FOREIGN KEY ("pageDataId") REFERENCES "PageData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageData" ADD CONSTRAINT "PageData_pageBuilderId_fkey" FOREIGN KEY ("pageBuilderId") REFERENCES "PageBuilder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
