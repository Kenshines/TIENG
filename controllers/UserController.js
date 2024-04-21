import { Prisma } from "@prisma/client"

const getProfile = async (req,res) => {

    const token = req.headers['x-access-token']

    if (!token){
        return res.status(401).json({ error: 'No token provided' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) =>{
        if (error) {
            return res.status(401).json({ error: 'Unauthorized'})

        }

        prisma.user
          .findUnique({
            where: {
              id: decoded.id,
            },
          })
          .then((user) => {
            res.json(user)
            console.log(user)
          })
            .catch((error) => {
                res.json(error)
            })
    })
}