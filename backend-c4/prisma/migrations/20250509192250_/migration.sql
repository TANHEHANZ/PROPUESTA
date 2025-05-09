/*
  Warnings:

  - The values [ACTIVE,INACTIVE,BLOCKED,DELETED,SUSPENDED,PENDING,APPROVED,REJECTED] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "TipoDenuncia" AS ENUM ('PSICOLOGICA', 'FISICA', 'FAMILIAR', 'SEXUAL');

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('ACTIVO', 'INACTIVO', 'BLOQUEADO', 'ELIMINADO', 'SUSPENDIDO', 'PENDIENTE', 'APROBADO', 'RECHAZADO', 'ALERTADO', 'EN_REVISION', 'CONTESTADO');
ALTER TABLE "Alert" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TABLE "Alert" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TABLE "Denuncia" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Alert" ALTER COLUMN "status" SET DEFAULT 'PENDIENTE';
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'INACTIVO';
COMMIT;

-- AlterTable
ALTER TABLE "Alert" ALTER COLUMN "status" SET DEFAULT 'PENDIENTE';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'INACTIVO';

-- CreateTable
CREATE TABLE "Denuncia" (
    "id" TEXT NOT NULL,
    "tipo_denuncia" "TipoDenuncia" NOT NULL,
    "nombre_denunciante" TEXT NOT NULL,
    "nombre_denunciado" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "n_denuncia" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "recursos" TEXT[],
    "status" "Status" NOT NULL DEFAULT 'EN_REVISION',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Denuncia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Denuncia" ADD CONSTRAINT "Denuncia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
