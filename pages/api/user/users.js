import prisma from '../../../prisma/client'

//GET all users
export default async function handler(req, res){
    
    try {
        if(req.method === 'GET'){
            const users = await prisma.user.findMany()
            res.status(201).json({ users })
        }
        //console.log(users)
        //res.status(201).json({ users })

    } catch (err){
        console.log(err)
        //res.status(405).json({err})
    }
}