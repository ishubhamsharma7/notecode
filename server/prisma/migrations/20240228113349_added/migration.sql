-- AlterTable
ALTER TABLE "Editor" ADD COLUMN     "linkExpired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shareLink" TEXT;
