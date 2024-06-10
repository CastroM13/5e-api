"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const PrerequisiteSchema = new mongoose_1.Schema({
    _id: false,
    ability_score: index_js_1.APIReferenceSchema,
    minimum_score: { type: Number, index: true },
});
const FeatSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    index: { type: String, index: true },
    name: { type: String, index: true },
    prerequisites: [PrerequisiteSchema],
    desc: { type: [String], index: true },
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Feat', FeatSchema, 'feats');
