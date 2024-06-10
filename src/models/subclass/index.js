"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const SpellPrerequisiteSchema = new mongoose_1.Schema({
    _id: false,
    index: { type: String, index: true },
    name: { type: String, index: true },
    type: { type: String, index: true },
    url: { type: String, index: true },
});
const SpellSchema = new mongoose_1.Schema({
    _id: false,
    prerequisites: [SpellPrerequisiteSchema],
    spell: index_js_1.APIReferenceSchema,
});
const SubclassSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    class: index_js_1.APIReferenceSchema,
    desc: { type: [String], index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    spells: [SpellSchema],
    subclass_flavor: { type: String, index: true },
    subclass_levels: { type: String, index: true },
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Subclass', SubclassSchema, 'subclasses');
