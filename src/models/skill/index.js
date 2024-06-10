"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const SkillSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    ability_score: index_js_1.APIReferenceSchema,
    desc: { type: [String], index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Skill', SkillSchema, 'skills');
