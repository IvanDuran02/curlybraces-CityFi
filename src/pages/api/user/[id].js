import prisma from "../../../../prisma/client";

//GET api/user/[id]
//DELETE api/user/[id]
export default async function handler(req, res) {
  const { id } = req.query;

  try {
    if (req.method === "GET") {
      const result = await prisma.user.findUnique({
        where: {
          id: Number(id), //parsing id to an int
        },
      });
      res.status(200).json(result);

      //deleting a user by id
    }
    if (req.method === "DELETE") {
      //if you delete a user, you must delete their posts too
      const deletePosts = await prisma.report.deleteMany({
        where: {
          authorId: Number(id),
        },
      });
      //deletes a user by id
      const deleteUser = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      const transaction = prisma.$transaction([deletePosts, deleteUser]);
      res.status(202).json({
        deleteUser,
        message: `user ${deleteUser.name} has been successfully deleted`,
      });
    }
  } catch (err) {
    res.status(405).json({ message: err });
  }
}
