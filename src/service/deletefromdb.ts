import path from 'path';
import fs from 'fs';
import { loadfromdb } from './loadfromdb';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function deletefromdb(email: string) {
  let json = await loadfromdb();
  let removed_data: newdata[] = [];
  removed_data = json.filter((item) => {
    item.email != email;
  });
  try {
    await fs.writeFile('db.json', JSON.stringify(removed_data), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  } catch (error) {
    console.log('Couldnt remove data');
  }
}
