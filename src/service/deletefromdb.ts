import path from 'path';
import fs from 'fs';
import { loadfromdb } from './loadfromdb';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function deletefromdb(email: string): Promise<boolean> {
  try {
    let json: newdata[] = await loadfromdb();

    if (json.filter((item) => item.email === email).length == 0) {
      throw new Error(`No data found with email ${email}`);
    }
    let data_after_removing = json.filter((item) => item.email !== email);
    await fs.promises.writeFile('db.json', JSON.stringify(data_after_removing));

    console.log('Data with email was removed!');

    return true;
  } catch (error) {
    console.error('Error occurred while removing data:');

    throw error;
  }
}
