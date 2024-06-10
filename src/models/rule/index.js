"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const RuleSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    desc: { type: String, index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    subsections: [index_js_1.APIReferenceSchema],
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Rule', RuleSchema, 'rules');
