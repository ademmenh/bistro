"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const main_1 = require("./../main");
dotenv_1.default.config();
const PORT = Number(process.env.PORT);
const DB_URI = process.env.DB_URI;
const initServer = async () => {
    try {
        await mongoose_1.default.connect(DB_URI);
        console.log("Connected to Database.");
        main_1.app.listen(PORT, () => {
            console.log(`Server Listen on Port ${PORT} ...`);
        });
    }
    catch {
        console.log("Connection Failed to DataBase");
    }
};
exports.initServer = initServer;
