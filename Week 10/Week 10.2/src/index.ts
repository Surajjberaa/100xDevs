import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

 async function insertUser(username: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            firstName,
            email: username,
            lastName,
            password
        },
        select: {
            email: true,
            firstName: true
        }
    })

    console.log(res);
    
 }

 insertUser("suraj1@gmail.com", "password", "Suraj", "Bera")