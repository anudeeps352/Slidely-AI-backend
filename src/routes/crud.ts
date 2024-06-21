import express from 'express';
import {
  addtodb,
  deleteitemfromdb,
  submissonfromdb,
} from '../controllers/crud.controller';

const router = express.Router();

router.get('/read', submissonfromdb);
router.post('/submit', addtodb);
router.post('/delete', deleteitemfromdb);

export default router;
