-- CreateTable
CREATE TABLE "Cost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Cost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
