"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const EquipmentSchema = new mongoose_1.Schema({
    _id: false,
    equipment: index_js_1.APIReferenceSchema,
    quantity: { type: Number, index: true },
});
const SpellcastingInfoSchema = new mongoose_1.Schema({
    _id: false,
    desc: { type: [String], index: true },
    name: { type: String, index: true },
});
const SpellcastingSchema = new mongoose_1.Schema({
    _id: false,
    info: [SpellcastingInfoSchema],
    level: { type: Number, index: true },
    spellcasting_ability: index_js_1.APIReferenceSchema,
});
const MultiClassingPrereqSchema = new mongoose_1.Schema({
    _id: false,
    ability_score: index_js_1.APIReferenceSchema,
    minimum_score: { type: Number, index: true },
});
const MultiClassingSchema = new mongoose_1.Schema({
    _id: false,
    prerequisites: { type: [MultiClassingPrereqSchema], default: undefined },
    prerequisite_options: { type: index_js_1.ChoiceSchema, default: undefined },
    proficiencies: { type: [index_js_1.APIReferenceSchema], default: undefined },
    proficiency_choices: { type: [index_js_1.ChoiceSchema], default: undefined },
});
const ClassSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    class_levels: { type: String, index: true },
    multi_classing: MultiClassingSchema,
    hit_die: { type: Number, index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    proficiencies: [index_js_1.APIReferenceSchema],
    proficiency_choices: [index_js_1.ChoiceSchema],
    saving_throws: [index_js_1.APIReferenceSchema],
    spellcasting: SpellcastingSchema,
    spells: { type: String, index: true },
    starting_equipment: [EquipmentSchema],
    starting_equipment_options: [index_js_1.ChoiceSchema],
    subclasses: [index_js_1.APIReferenceSchema],
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Class', ClassSchema, 'classes');
