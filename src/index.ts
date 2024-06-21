import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import pingroute from './routes/ping';
import crudroute from './routes/crud';

const app = express();

const dbpath = path.join(__dirname, '../', 'db.json');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(pingroute);
app.use(crudroute);

app.listen(3000);
