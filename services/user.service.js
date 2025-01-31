class UserService {
  constructor() {
    this.users = [];
    this.generateUserTestData();
  }

  generateUserTestData() {
    this.users = [
      { name: "Daniel", email: "daniel@example.com", password: "1234" },
    ];
  }

  async create(data) {
    this.users.push(data);
    return data;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    return this.users[id];
  }

  async delete(id) {
    this.users.splice(id, 1);
    return id;
  }
}

module.exports = UserService;
