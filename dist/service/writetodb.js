"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writetodb = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const loadfromdb_1 = require("./loadfromdb");
const dbpath = path_1.default.join(__dirname, '../', '../', 'db.json');
function writetodb(newdata) {
    return __awaiter(this, void 0, void 0, function* () {
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
        let json = yield (0, loadfromdb_1.loadfromdb)();
        // console.log(json);
        // console.log('after');
        json.push(newdata);
        // console.log(json);
        try {
            yield fs_1.default.writeFile('db.json', JSON.stringify(json), function (err) {
                if (err)
                    throw err;
                console.log('The "data to append" was appended to file!');
            });
        }
        catch (error) {
            console.log('Writing failed');
        }
    });
}
exports.writetodb = writetodb;
