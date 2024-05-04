"use server"

import client from "@/db"

export default async function signup(username: string, password: string){
   try{ await client.user.create({
        data: {
            username:  username,
            password: password
        }
    })
    return Response.json({
        message: "You are logged in!"
    })}catch(e){
        return Response.json({
            message: "Something went wrong"
        })
    }
}