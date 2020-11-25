import { NextApiRequest, NextApiResponse } from "next";

import db from "prisma";
const prisma = db.getInstance().prisma;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "GET") {
    return handleGET(res);
  } else if (req.method === "POST") {
    return handlePOST(req, res);
  } else {
    return res.status(500).json({
      error: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};

async function handleGET(res: NextApiResponse) {
  let result;
  try {
    result = await prisma.word.findMany({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }

  return res.status(200).json(result);
}

// - [ ] fetch definition after create, then update
// - [x] handle collision
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.body;

  let result;
  try {
    result = await prisma.word.create({
      data: { title, definition: "test definition" },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res
        .status(422)
        .json({ code: 422, message: "Error: Word already exists" });
    } else {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  return res.status(201).json(result);
}
