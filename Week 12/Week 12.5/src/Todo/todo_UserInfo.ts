import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function info(userId: number){
    const res =  await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            title: true,
            description: true,
            done: true,
            user: {
                select: {
                    id: true,
                    firstName: true
                }
            }
        }
        
    })
    console.log(res);
    return res
    
}

// info(2)