import { PrismaClient } from "@prisma/client";

class db {
  public prisma: PrismaClient;
  private static instance: db;
  private constructor() {
    this.prisma = new PrismaClient();
  }

  // eslint-disable-next-line
  public static getInstance = () => {
    if (!db.instance) {
      db.instance = new db();
    }
    return db.instance;
  };
}

export default db;
