-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fullname" TEXT;
Update "User" SET "fullname" = 'Faizan Ahmed' WHERE "username" = 'faizan123';