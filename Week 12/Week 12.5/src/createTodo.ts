import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createTodo(){
    const res = await prisma.todo.create({
        data: {
            title: "Book title",
            description: "Book desc",
            userId: 1
        }
    })
    console.log(res);
    
}

createTodo();