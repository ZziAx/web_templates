-- CreateTable
CREATE TABLE "PageElement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "args" JSONB NOT NULL,
    "pageBuilderId" INTEGER,

    CONSTRAINT "PageElement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageBuilder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "PageBuilder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PageElement" ADD CONSTRAINT "PageElement_pageBuilderId_fkey" FOREIGN KEY ("pageBuilderId") REFERENCES "PageBuilder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
