"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const ping_1 = __importDefault(require("./routes/ping"));
const crud_1 = __importDefault(require("./routes/crud"));
const app = (0, express_1.default)();
const dbpath = path_1.default.join(__dirname, '../', 'db.json');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(ping_1.default);
app.use(crud_1.default);
// app.get('/read', async (req, res) => {
//   try {
//     //fetch info from db
//   } catch (error) {
//     res.json('Error accessing Information');
//   }
// });
app.listen(3000);
