import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const update = await prisma.user.update({
    where: {
        email: username
    },
    data: {
        firstName,
        lastName
    }
  })
  console.log(update);
  
}

updateUser("suraj@gmail.com", {
    firstName: "SURAJ",
    lastName: "BERA"
})