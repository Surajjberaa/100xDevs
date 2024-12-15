import { createClient } from 'redis'

const client = createClient();

async function main() {
    await client.connect()
    try {
        while(1){

            const response = await client.brPop('submissions', 0)
            console.log(response);

            await new Promise((resolve) => setTimeout(resolve, 1000))

            console.log("Processed users submissions");
            

        }


    } catch (error) {
        console.log('Some error occured');
        
    }
}

main()