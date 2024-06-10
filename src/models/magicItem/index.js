"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const RaritySchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
});
const MagicItemSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    desc: { type: [String], index: true },
    equipment_category: index_js_1.APIReferenceSchema,
    index: { type: String, index: true },
    name: { type: String, index: true },
    rarity: RaritySchema,
    url: { type: String, index: true },
    variants: [index_js_1.APIReferenceSchema],
    variant: Boolean,
});
exports.default = (0, mongoose_1.model)('MagicItem', MagicItemSchema, 'magic-items');
