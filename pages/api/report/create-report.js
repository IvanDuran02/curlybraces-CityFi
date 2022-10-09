import prisma from '../../../prisma/client'

//POST api/report/create-report
export default async function handler(req, res) {
    console.log(req.body)
    const { 
            authorId, 
            status, 
            latitude, 
            longitude, 
            category, 
            subCategory, 
            description 
        } = req.body
    
    try {
        if(req.method === 'POST'){
            const result = await prisma.report.create({
                data: {
                    authorId,
                    status,
                    latitude,
                    longitude,
                    category,
                    subCategory,
                    description
                }
            })
            res.status(201).json(result)
        }
    } catch (err){
        res.status(405).json({err})
    }
}