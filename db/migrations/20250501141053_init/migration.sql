/*
  Warnings:

  - The `consent` column on the `NewsletterSubscriber` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "NewsletterSubscriber" DROP COLUMN "consent",
ADD COLUMN     "consent" BOOLEAN NOT NULL DEFAULT false;
