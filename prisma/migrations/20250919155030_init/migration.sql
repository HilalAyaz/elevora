-- CreateTable
CREATE TABLE "public"."Theme" (
    "id" TEXT NOT NULL,
    "primary" TEXT NOT NULL DEFAULT '#008F73',
    "secondary" TEXT NOT NULL DEFAULT '#26B1A3',
    "background" TEXT NOT NULL DEFAULT '#DFF5F0',
    "foreground" TEXT NOT NULL DEFAULT '#171717',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Theme_userId_key" ON "public"."Theme"("userId");

-- AddForeignKey
ALTER TABLE "public"."Theme" ADD CONSTRAINT "Theme_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
