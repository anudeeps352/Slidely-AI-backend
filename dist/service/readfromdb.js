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
exports.readfromdb = void 0;
const path_1 = __importDefault(require("path"));
const loadfromdb_1 = require("./loadfromdb");
const dbpath = path_1.default.join(__dirname, '../', '../', 'db.json');
function readfromdb() {
    return __awaiter(this, void 0, void 0, function* () {
        let json = yield (0, loadfromdb_1.loadfromdb)();
        let collected_data = [];
        //   collected_data = json.filter((item) => {
        //     return item.email === email;
        //   });
        return JSON.stringify(json);
    });
}
exports.readfromdb = readfromdb;
