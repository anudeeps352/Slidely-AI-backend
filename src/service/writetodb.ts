import path from 'path';
import fs from 'fs';
import { loadfromdb } from './loadfromdb';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function writetodb(newdata: newdata) {
  let json = await loadfromdb();
  json.push(newdata);
  try {
    await fs.writeFile('db.json', JSON.stringify(json), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  } catch (error) {
    console.log('Writing failed');
  }
}
