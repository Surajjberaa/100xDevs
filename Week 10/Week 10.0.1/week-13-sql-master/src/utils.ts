import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://asucbrbg:rmQ9arClA45TnWMfs5UkuR9KmsO2lzut@snuffleupagus.db.elephantsql.com/asucbrbg");
    await client.connect();
    return client;
}