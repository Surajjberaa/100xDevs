import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"

export interface Env {
	DATABASE_URL: string
}

export default{
	async fetch(
		request:Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate())

		const Res = await prisma.log.create({
			data: {
				level: "Info",
				message: `sdasa`,
				meta: {
					headers: JSON.stringify(request.headers)
				}
			}
		})

		console.log(JSON.stringify(Res));
		

		return new Response(`request method: ${request.method}`)
	}
}