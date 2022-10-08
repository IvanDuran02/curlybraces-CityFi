import prisma from '../../prisma/client'

export default async function handle(req, res) {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  res.json(allUsers)
}