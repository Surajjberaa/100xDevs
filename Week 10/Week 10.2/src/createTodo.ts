import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {

    const res = await prisma.todo.create({
        data: { userId,
                title,
                description
            },
        select: {
            userId: true,
            title: true
        }
    })

    console.log(res);
    

}

createTodo(1, "go to gym2", "go to gym and do 10 pushups");