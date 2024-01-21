-- CreateTable
CREATE TABLE "tb_schedulings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "observations" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "tb_schedulings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
