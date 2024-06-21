import path from 'path';
import fs from 'fs';
import { loadfromdb } from './loadfromdb';
import { newdata } from '../global/types';
const dbpath = path.join(__dirname, '../', '../', 'db.json');

export async function writetodb(newdata: newdata) {
  // await fs.readFile(dbpath, (err, data) => {
  //   if (err) throw err;
  //   let json;
  //   try {
  //     json = JSON.parse(data.toString());
  //   } catch (error) {
  //     json = [];
  //   }
  //   json.push(newdata);
  //   fs.writeFile('db.json', JSON.stringify(json), function (err) {
  //     if (err) throw err;
  //     console.log('The "data to append" was appended to file!');
  //   });
  // });
  let json = await loadfromdb();
  // console.log(json);
  // console.log('after');
  json.push(newdata);
  // console.log(json);
  try {
    await fs.writeFile('db.json', JSON.stringify(json), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  } catch (error) {
    console.log('Writing failed');
  }
}
