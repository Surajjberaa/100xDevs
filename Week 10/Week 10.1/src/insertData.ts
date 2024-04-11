import { Client } from 'pg';

// Async function to insert data into a table
async function insertData() {
  const client = new Client({
    connectionString: "postgresql://test_owner:LjenvyW7xS5V@ep-ancient-pond-a5dbk6n2.us-east-2.aws.neon.tech/test?sslmode=require"
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();