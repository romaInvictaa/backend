import { Router } from 'express';
const router = Router();
const cors = require('cors');

const {
  getUsers,
  createUser,
  getUserById,
  getQuestionById,
} = require('../controllers/index.controller');
router.get('/users', cors(), getUsers);
router.post('/users', cors(), createUser);
router.get('/users/:id', cors(), getUserById);
router.get('/questions/:id', cors(), getQuestionById);

module.exports = router;
