-- AlterTable
ALTER TABLE "Logs" ADD COLUMN     "productId" INTEGER;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
