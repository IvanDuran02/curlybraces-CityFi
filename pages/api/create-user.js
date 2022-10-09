import prisma from '../../prisma/client'

//POST api/create-report
export default async function handler(req, res) {
    //console.log(req.body)
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
            //console.log(result)
            res.status(201).json(result)
        }
    } catch (err){
        //console.log(err)
        res.status(405).json({err})
    }
}