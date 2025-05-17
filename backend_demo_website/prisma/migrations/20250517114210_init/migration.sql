-- CreateTable
CREATE TABLE "InputText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InputText_pkey" PRIMARY KEY ("id")
);
