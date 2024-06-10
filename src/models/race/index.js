"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const RaceAbilityBonusSchema = new mongoose_1.Schema({
    _id: false,
    ability_score: index_js_1.APIReferenceSchema,
    bonus: { type: Number, index: true },
});
const RaceSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    ability_bonus_options: index_js_1.ChoiceSchema,
    ability_bonuses: [RaceAbilityBonusSchema],
    age: { type: String, index: true },
    alignment: { type: String, index: true },
    index: { type: String, index: true },
    language_desc: { type: String, index: true },
    language_options: index_js_1.ChoiceSchema,
    languages: [index_js_1.APIReferenceSchema],
    name: { type: String, index: true },
    size: { type: String, index: true },
    size_description: { type: String, index: true },
    speed: { type: Number, index: true },
    starting_proficiencies: [index_js_1.APIReferenceSchema],
    starting_proficiency_options: index_js_1.ChoiceSchema,
    subraces: [index_js_1.APIReferenceSchema],
    traits: [index_js_1.APIReferenceSchema],
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Race', RaceSchema, 'races');
