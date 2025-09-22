/*
  Warnings:

  - You are about to drop the `Theme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Theme" DROP CONSTRAINT "Theme_userId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "hasPortfolio" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "public"."Theme";
