import path from 'path';
import fs from 'fs';
import { loadfromdb } from './loadfromdb';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function readfromdb(index: number): Promise<string> {
  let json: newdata[] = await loadfromdb();
  let returnvalue: newdata = json[index];
  console.log(returnvalue);
  return JSON.stringify(returnvalue);
}
