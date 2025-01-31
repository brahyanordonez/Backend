const getConection = require("../libs/postgres");

class UserService {
  constructor() {}

  async create(data) {
    const client = await getConection();
    const res = await client.query(
      `INSERT INTO users (name, email) VALUES ('${data.name}', '${data.email}')`
    );
    return data;
  }

  async find() {
    const client = await getConection();
    const res = await client.query("SELECT * FROM users");
    return res.rows;
  }

  async findOne(id) {
    const client = await getConection();
    const res = await client.query(`SELECT * FROM users WHERE id = ${id}`);
    return res.rows[0];
  }

  async delete(id) {
    const client = await getConection();
    const res = await client.query(`DELETE FROM users WHERE id = ${id}`);
    return id;
  }
}

module.exports = UserService;
