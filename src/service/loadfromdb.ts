import path from 'path';
import fs from 'fs';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function loadfromdb(): Promise<newdata[]> {
  let json: newdata[] = [];
  try {
    const data = await fs.promises.readFile(dbpath, 'utf-8');
    if (data.trim() === '') {
      return [];
    }
    json = JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
  console.log(json);
  return json;
}
