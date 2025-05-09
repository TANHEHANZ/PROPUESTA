-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'ALERTADO';

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "latitud" TEXT NOT NULL,
    "longitud" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Violentometro" (
    "id" TEXT NOT NULL,
    "question" JSONB NOT NULL,

    CONSTRAINT "Violentometro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
