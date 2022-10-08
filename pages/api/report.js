// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' })
    // Process a POST request
  } else {
    console.log(req.body.name)
    //save to prisma
    // const allUsers = await prisma.post.create({
    //   data: {

    //   }
    // })
    res.status(200).json({ name: req.body.name })
    // Handle any other HTTP method
  }
}