const express = require("express");
const UserService = require("../services/user.service");

const router = express.Router();
const service = new UserService();

router.get("/", async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.json({
    message: "creado",
    data: newUser,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await service.delete(id);
  res.json({
    id,
    message: "eliminado",
  });
});

module.exports = router;
