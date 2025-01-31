const express = require("express");
const TicketsService = require("../services/ticket.service");

const router = express.Router();
const service = new TicketsService();

router.get("/", async (req, res) => {
  const tickets = await service.find();
  res.json(tickets);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const ticket = await service.findOne(id);
  res.json(ticket);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newTicket = await service.create(body);
  res.json({
    message: "creado",
    data: newTicket,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const ticket = await service.delete(id);
  res.json({
    id,
    message: "eliminado",
  });
});

//obtener los tickets de un usuario

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const ticket = await service.findUserTickets(id);
  res.json(ticket);
}
);

module.exports = router;
