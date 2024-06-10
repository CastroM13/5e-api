"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const ReferenceSchema = new mongoose_1.Schema({
    _id: false,
    index: { type: String, index: true },
    name: { type: String, index: true },
    type: { type: String, index: true },
    url: { type: String, index: true },
});
const ProficiencySchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    classes: [index_js_1.APIReferenceSchema],
    index: { type: String, index: true },
    name: { type: String, index: true },
    races: [index_js_1.APIReferenceSchema],
    reference: ReferenceSchema,
    type: { type: String, index: true },
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Proficiency', ProficiencySchema, 'proficiencies');
