const getConection = require("../libs/postgres");

class TicketsService {
  constructor() {}

  async create(data) {
    const client = await getConection();
    const res = await client.query(
      `INSERT INTO tickets (user_id, title, message) VALUES (${data.user_id}, '${data.title}', '${data.message}')`
    );
    return data;
  }

  async find() {
    const client = await getConection();
    const res = await client.query("SELECT * FROM tickets");
    return res.rows;
  }

  async findOne(id) {
    const client = await getConection();
    const res = await client.query(`SELECT * FROM tickets WHERE id = ${id}`);
    return res.rows[0];
  }

  async delete(id) {
    const client = await getConection();
    const res = await client.query(`DELETE FROM tickets WHERE id = ${id}`);
    return id;
  }

  async findUserTickets(id) {
    const client = await getConection();
    const res = await client.query(
      `SELECT * FROM tickets WHERE user_id = ${id}`
    );
    return res.rows;
  }
}

module.exports = TicketsService;
