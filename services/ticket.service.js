class TicketsService {
  constructor() {
    this.tickets = [];
    this.generateTicketTestData();
  }

  generateTicketTestData() {
    this.tickets = [
      { title: "Problemas de ingreso", message: "Tests de error" },
      { title: "Problemas de ingreso", message: "Tests de error" },
      { title: "Problemas de ingreso", message: "Tests de error" },
      { title: "Problemas de ingreso", message: "Tests de error" },
      { title: "Problemas de ingreso", message: "Tests de error" },
    ];
  }

  async create(data) {
    this.tickets.push(data);
    return data;
  }

  async find() {
    return this.tickets;
  }

  async findOne(id) {
    return this.tickets[id];
  }

  async delete(id) {
    this.tickets.splice(id, 1);
    return id;
  }
}

module.exports = TicketsService;
