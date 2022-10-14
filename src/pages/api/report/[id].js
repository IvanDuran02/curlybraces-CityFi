import prisma from "../../../../prisma/client";

//GET api/report/[id]
//DELETE api/report/[id]
//UPDATE api/report/[id]
export default async function handler(req, res) {
  const { id } = req.query;
  try {
    if (req.method === "GET") {
      const result = await prisma.report.findUnique({
        where: {
          id: Number(id), //parsing id to an int
        },
      });
      res.status(200).json(result);
    }
    if (req.method === "DELETE") {
      const deletedReport = await prisma.report.delete({
        where: {
          id: Number(id),
        },
      });
      res
        .status(202)
        .json(`report id #${deletedReport.id} has been successfully deleted`);
    }
    if (req.method === "PUT") {
      const updatedReport = await prisma.report.updateMany({
        //update
        where: {
          d: Number(id),
        },
        data: {
          status: "resolved",
          //category: updatedReport.category,
          subCategory: updatedReport.subCategory,
          description: updatedReport.description,
        },
      });
      console.log(updatedReport);
      res.status(202).json({
        //updatedReport,
        message: `report # ${updatedReport.id} has been updated!`,
      });
    }
  } catch (err) {
    console.log(err);
    //res.status(405).json({err})
  }
}
