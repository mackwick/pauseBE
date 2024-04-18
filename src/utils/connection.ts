import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var _db: PrismaClient | undefined;
}

//checks to see if a connection already exists and if it doesn't, it creates a new one
if (!global._db) {
  global._db = new PrismaClient();
}

db = global._db;

export { db };
