import prisma from '../../../prisma/client'

//POST api/report/create-report
export default async function handler(req, res) {
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
            const newReport = await prisma.report.create({
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
            res.status(201).json({
                newReport,
                message: `Report# ${newReport.id} was successfully created!`
            })
        }
    } catch (err){
        res.status(405).json({err})
    }
}