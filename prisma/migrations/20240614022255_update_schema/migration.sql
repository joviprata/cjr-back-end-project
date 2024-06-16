/*
  Warnings:

  - You are about to drop the column `reviewID` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `teacherID` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `reviewID` on the `teachers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_reviewID_fkey";

-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_reviewID_fkey";

-- DropIndex
DROP INDEX "disciplines_reviewID_key";

-- DropIndex
DROP INDEX "teachers_reviewID_key";

-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "reviewID",
DROP COLUMN "teacherID";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "reviewID";

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_disciplineID_fkey" FOREIGN KEY ("disciplineID") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
