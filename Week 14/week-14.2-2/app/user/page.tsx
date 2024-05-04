import  PrismaClient  from "@/db";
import client from "@/db"

async function fetchData(){
    const user = await client.user.findFirst()
    return {
        email: user?.username,
        name: "Harkirat"
    }
    
}

export default async function (){
    const data = await fetchData()
    return <div>
        {data.name}
        {data.email}
    </div>
}