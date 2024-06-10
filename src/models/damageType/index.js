"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DamageTypeSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    desc: { type: [String], index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('DamageType', DamageTypeSchema, 'damage-types');
