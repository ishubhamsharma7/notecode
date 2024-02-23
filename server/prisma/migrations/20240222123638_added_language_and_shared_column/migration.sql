/*
  Warnings:

  - Added the required column `languageId` to the `Editor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Editor" ADD COLUMN     "languageId" INTEGER NOT NULL,
ADD COLUMN     "shared" BOOLEAN NOT NULL DEFAULT false;
