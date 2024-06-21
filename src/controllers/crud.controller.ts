import { Request, Response, NextFunction } from 'express';
import { writetodb } from '../service/writetodb';
import { deletefromdb } from '../service/deletefromdb';
import { readfromdb } from '../service/readfromdb';
async function addtodb(req: Request, res: Response) {
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    stopwatchTime: req.body.stopwatchTime,
  };
  await writetodb(data);
  res.status(201).send('Created successfully');
}

async function deleteitemfromdb(req: Request, res: Response) {
  const data = req.body.email;
  await deletefromdb(data);
  res.status(201).send('Deleted successfully');
}
async function submissonfromdb(req: Request, res: Response) {
  const index = parseInt(req.query.index as string);
  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: 'Invalid index' });
  }
  try {
    const submission: string = await readfromdb(index);
    res.status(201).send(submission);
  } catch (error) {
    res.status(404).send('User not found');
  }
}
export { addtodb, deleteitemfromdb, submissonfromdb };
