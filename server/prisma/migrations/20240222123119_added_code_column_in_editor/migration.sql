/*
  Warnings:

  - Added the required column `codeData` to the `Editor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Editor" ADD COLUMN     "codeData" TEXT NOT NULL;
