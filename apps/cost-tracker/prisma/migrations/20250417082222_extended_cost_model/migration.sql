/*
  Warnings:

  - Added the required column `amount` to the `Cost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Cost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cost" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "date" DATE NOT NULL;
