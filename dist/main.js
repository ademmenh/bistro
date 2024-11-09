"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const init_1 = require("./config/init");
const init_2 = require("./routes/init");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
(0, init_2.addRoutes)(exports.app);
(0, init_1.initServer)();
