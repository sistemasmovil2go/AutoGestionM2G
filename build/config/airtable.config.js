"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const airtable_1 = __importDefault(require("airtable"));
const constants_1 = require("../constants");
const API_KEY = constants_1.AIRTABLE_ACCESS_TOKEN;
const airtable = new airtable_1.default({
    apiKey: API_KEY,
    endpointUrl: "https://api.airtable.com",
});
exports.default = airtable;
//# sourceMappingURL=airtable.config.js.map