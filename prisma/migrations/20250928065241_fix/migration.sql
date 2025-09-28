/*
  Warnings:

  - Made the column `userId` on table `IvacCustomer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_IvacCustomer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "address" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "IvacCustomer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_IvacCustomer" ("address", "createdAt", "email", "id", "mobile", "name", "status", "updatedAt", "userId") SELECT "address", "createdAt", "email", "id", "mobile", "name", "status", "updatedAt", "userId" FROM "IvacCustomer";
DROP TABLE "IvacCustomer";
ALTER TABLE "new_IvacCustomer" RENAME TO "IvacCustomer";
CREATE UNIQUE INDEX "IvacCustomer_email_key" ON "IvacCustomer"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
