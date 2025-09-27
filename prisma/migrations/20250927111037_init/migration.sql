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
    "deviceId" TEXT,
    "deviceType" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "browser" TEXT,
    "os" TEXT,
    "country" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_IvacCustomer" ("address", "browser", "country", "createdAt", "deviceId", "deviceType", "email", "id", "ipAddress", "mobile", "name", "os", "status", "updatedAt", "userAgent") SELECT "address", "browser", "country", "createdAt", "deviceId", "deviceType", "email", "id", "ipAddress", "mobile", "name", "os", "status", "updatedAt", "userAgent" FROM "IvacCustomer";
DROP TABLE "IvacCustomer";
ALTER TABLE "new_IvacCustomer" RENAME TO "IvacCustomer";
CREATE UNIQUE INDEX "IvacCustomer_email_key" ON "IvacCustomer"("email");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "image" TEXT DEFAULT '/person.svg',
    "mobile" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("address", "createdAt", "email", "id", "image", "mobile", "name", "password", "role", "updatedAt") SELECT "address", "createdAt", "email", "id", "image", "mobile", "name", "password", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
