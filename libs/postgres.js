const { Client } = require('pg');

async function getConection() {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'Admin1234',
        database: 'gestor'
    });

    await client.connect();
    return client
}

export default getConection;