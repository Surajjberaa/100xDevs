import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function info(userId: number){
    const res =  await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
        title:       true,
        description: true,
        done:        true,
        user:        true
        }
        
    })
    console.log(res);
    
}

info(1)