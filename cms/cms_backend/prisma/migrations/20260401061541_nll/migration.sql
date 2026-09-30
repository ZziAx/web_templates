-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "ordersId" INTEGER;

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
