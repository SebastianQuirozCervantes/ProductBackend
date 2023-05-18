import express from 'express';
const router = express.Router();
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/products';

router.route('/')
  .get(makeExpressCb(controller.getProducts))

module.exports = router;