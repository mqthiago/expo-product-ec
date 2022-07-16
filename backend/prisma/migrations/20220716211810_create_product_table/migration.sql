-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
