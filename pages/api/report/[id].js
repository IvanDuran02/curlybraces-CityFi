import prisma from '../../../prisma/client'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const {id} = req.query
    if(req.method === 'GET'){
    console.log(id)
    const result = await prisma.report.findUnique({
        where: {
            id: Number(id)
        }
    })
    console.log(result)
    res.status(200).json(result)
    }
}