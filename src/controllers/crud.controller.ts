import { Request, Response, NextFunction } from 'express';
import { writetodb } from '../service/writetodb';
import { deletefromdb } from '../service/deletefromdb';
import { readfromdb } from '../service/readfromdb';
import { newdata } from '../global/types';
import { loadfromdb } from '../service/loadfromdb';

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
  const email: string = req.query.email as string;
  try {
    let success: boolean = await deletefromdb(email);
    if (success) {
      res.status(200).send('Deleted successfully');
    } else {
      res.status(400).json('Unable to delete,no such email might exist');
    }
  } catch (error) {
    return res.status(400).json({ error: 'Entry not found' });
  }
}
async function submissonfromdb(req: Request, res: Response) {
  const alldata: newdata[] = await loadfromdb();
  const maxlength: number = alldata.length;
  const index = parseInt(req.query.index as string);
  if (isNaN(index)) {
    return res.status(400).json({ error: 'Invalid index' });
  } else if (index >= maxlength) {
    return res.status(400).json({ error: 'Reached end of submissions' });
  }
  try {
    const submission: string = await readfromdb(index);
    res.status(201).send(submission);
  } catch (error) {
    res.status(404).send('User not found');
  }
}
export { addtodb, deleteitemfromdb, submissonfromdb };
