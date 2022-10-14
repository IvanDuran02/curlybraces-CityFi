import prisma from "../../../../prisma/client";

//GET api/report/reports
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const reports = await prisma.report.findMany();
      res.status(201).json({ reports });
    }
    res.status(201).json({ reports });
  } catch (err) {
    res.status(405).json({ err });
  }
}
