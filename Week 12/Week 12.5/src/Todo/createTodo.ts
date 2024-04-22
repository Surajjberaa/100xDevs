import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function createTodo(title: string, description: string, userId: number){
    const res = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        }
    })
    console.log(res);
    
}

// createTodo();