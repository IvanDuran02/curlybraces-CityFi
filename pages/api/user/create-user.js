import prisma from '../../../prisma/client'

//POST api/user/create-report
export default async function handler(req, res) {
    const { id, name, email, role, posts} = req.body
    
    try {
        if(req.method === 'POST'){
            const result = await prisma.user.create({
                data: {
                    id,
                    name,
                    email,
                    role,
                    posts
                }
            })
            res.status(201).json(result)
        }
    } catch (err){
        res.status(405).json({err})
    }
}