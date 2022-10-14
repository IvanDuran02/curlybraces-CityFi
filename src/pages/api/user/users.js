import prisma from "../../../../prisma/client";

//GET api/user/users
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const users = await prisma.user.findMany();
      res.status(201).json({ users });
    }
    res.status(201).json({ users });
  } catch (err) {
    res.status(405).json({ err });
  }
}
