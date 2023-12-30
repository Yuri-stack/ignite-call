-- CreateTable
CREATE TABLE "tb_users_time_intervals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "week_day" INTEGER NOT NULL,
    "time_start_in_minutes" INTEGER NOT NULL,
    "time_end_in_minutes" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "tb_users_time_intervals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
