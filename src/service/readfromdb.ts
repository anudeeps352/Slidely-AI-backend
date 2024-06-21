import path from 'path';
import fs from 'fs';
import { loadfromdb } from './loadfromdb';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function readfromdb(): Promise<string> {
  let json = await loadfromdb();
  let collected_data: newdata[] = [];

  //   collected_data = json.filter((item) => {
  //     return item.email === email;
  //   });
  return JSON.stringify(json);
}
