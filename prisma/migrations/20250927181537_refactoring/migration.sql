/*
  Warnings:

  - You are about to drop the column `browser` on the `IvacCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `IvacCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `deviceId` on the `IvacCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `deviceType` on the `IvacCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `IvacCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `os` on the `IvacCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `IvacCustomer` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "DeviceList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deviceId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "ivacCustomerId" INTEGER,
    "deviceType" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "browser" TEXT,
    "os" TEXT,
    "country" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DeviceList_ivacCustomerId_fkey" FOREIGN KEY ("ivacCustomerId") REFERENCES "IvacCustomer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

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
    "userId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "IvacCustomer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_IvacCustomer" ("address", "createdAt", "email", "id", "mobile", "name", "status", "updatedAt") SELECT "address", "createdAt", "email", "id", "mobile", "name", "status", "updatedAt" FROM "IvacCustomer";
DROP TABLE "IvacCustomer";
ALTER TABLE "new_IvacCustomer" RENAME TO "IvacCustomer";
CREATE UNIQUE INDEX "IvacCustomer_email_key" ON "IvacCustomer"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "DeviceList_deviceId_key" ON "DeviceList"("deviceId");
