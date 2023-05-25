import { Router } from "express";
const router = Router();
const cors = require("cors");

const {getUsers, createUser, getUserById} = require("../controllers/index.controller");

router.get("/users", cors(), getUsers);
router.post("/users", cors(), createUser);
router.get("/users/:id", cors(), getUserById);

module.exports = router;