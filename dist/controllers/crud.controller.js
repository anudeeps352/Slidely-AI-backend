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
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissonfromdb = exports.deleteitemfromdb = exports.addtodb = void 0;
const writetodb_1 = require("../service/writetodb");
const deletefromdb_1 = require("../service/deletefromdb");
const readfromdb_1 = require("../service/readfromdb");
function addtodb(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
            stopwatchTime: req.body.stopwatchTime,
        };
        yield (0, writetodb_1.writetodb)(data);
        res.status(201).send('Created successfully');
    });
}
exports.addtodb = addtodb;
function deleteitemfromdb(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body.email;
        yield (0, deletefromdb_1.deletefromdb)(data);
        res.status(201).send('Deleted successfully');
    });
}
exports.deleteitemfromdb = deleteitemfromdb;
function submissonfromdb(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //   const data = req.body.email;
        try {
            const submission = yield (0, readfromdb_1.readfromdb)();
            res.status(201).send(submission);
        }
        catch (error) {
            res.status(404).send('User not found');
        }
    });
}
exports.submissonfromdb = submissonfromdb;
