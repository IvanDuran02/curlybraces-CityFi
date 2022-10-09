import prisma from '../../../prisma/client'

//GET api/report/[id]
//DELETE api/report/[id]
export default async function handler(req, res) {
        const { id } = req.query
    
        try {
            if(req.method === 'GET'){
                const result = await prisma.report.findUnique({
                    where: {
                        id: Number(id) //parsing id to an int
                    }
                })
                res.status(200).json(result)
            } else if(req.method === 'DELETE'){
                const result = await prisma.report.delete({
                    where: {
                        id: Number(id)
                    }
                })
                console.log(result)
                res.status(202).json(`report id #${result.id} has been successfully deleted`)
            }
        } catch (err){
            res.status(405).json({err})
        }
}