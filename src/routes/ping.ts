import express from 'express';
import pingresponse from '../controllers/ping.controller';
const router = express.Router();

//ping the server
router.get('/', pingresponse);

export default router;
