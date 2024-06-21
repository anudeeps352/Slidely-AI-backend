"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crud_controller_1 = require("../controllers/crud.controller");
const router = express_1.default.Router();
router.get('/read', crud_controller_1.submissonfromdb);
router.post('/submit', crud_controller_1.addtodb);
router.post('/delete', crud_controller_1.deleteitemfromdb);
exports.default = router;
