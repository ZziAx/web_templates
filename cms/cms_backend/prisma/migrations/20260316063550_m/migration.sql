/*
  Warnings:

  - You are about to drop the column `pageBuilderId` on the `PageElement` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PageElement" DROP CONSTRAINT "PageElement_pageBuilderId_fkey";

-- AlterTable
ALTER TABLE "PageElement" DROP COLUMN "pageBuilderId";
