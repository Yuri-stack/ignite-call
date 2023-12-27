/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `tb_users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tb_users" ADD COLUMN "avatar_url" TEXT;
ALTER TABLE "tb_users" ADD COLUMN "email" TEXT;

-- CreateTable
CREATE TABLE "tb_accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "tb_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "tb_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_accounts_provider_provider_account_id_key" ON "tb_accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "tb_sessions_session_token_key" ON "tb_sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");
