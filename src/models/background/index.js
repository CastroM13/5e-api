"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const EquipmentSchema = new mongoose_1.Schema({
    _id: false,
    equipment: index_js_1.APIReferenceSchema,
    quantity: { type: Number, index: true },
});
const FeatureSchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    desc: { type: [String], index: true },
});
const BackgroundSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    index: { type: String, index: true },
    name: { type: String, index: true },
    starting_proficiencies: [index_js_1.APIReferenceSchema],
    language_options: index_js_1.ChoiceSchema,
    url: { type: String, index: true },
    starting_equipment: [EquipmentSchema],
    starting_equipment_options: { type: [index_js_1.ChoiceSchema], index: true },
    feature: FeatureSchema,
    personality_traits: index_js_1.ChoiceSchema,
    ideals: index_js_1.ChoiceSchema,
    bonds: index_js_1.ChoiceSchema,
    flaws: index_js_1.ChoiceSchema,
});
exports.default = (0, mongoose_1.model)('Background', BackgroundSchema, 'backgrounds');
