-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ordersId" INTEGER;

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
