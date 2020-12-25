import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

describe("example test with Prisma Client", () => {
  beforeAll(async () => {
    // await prisma.word.deleteMany({});
    // await prisma.comment.deleteMany({});
    // await prisma.post.deleteMany({});
    // await prisma.user.deleteMany({});
  });
  afterAll(async () => {
    await prisma.$disconnect();
  });
  test("test query", async () => {
    const data = await prisma.word.findMany({ take: 1, select: { id: true } });
    expect(data).toBeTruthy();
  });
});
