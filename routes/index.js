const ticketsRouter = require("./tickets.router");
const usersRouter = require("./users.router");

function routerApi(app) {
  app.use("/tickets", ticketsRouter);
  app.use("/users", usersRouter);
}

module.exports = routerApi;
