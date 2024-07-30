import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

// next js uses hot reload and db initializes lot more time so to avoid that error 
export  const db = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db