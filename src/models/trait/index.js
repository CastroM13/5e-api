"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const ProficiencySchema = new mongoose_1.Schema({
    _id: false,
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
});
const ActionDamageSchema = new mongoose_1.Schema({
    _id: false,
    damage_type: index_js_1.APIReferenceSchema,
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    damage_at_character_level: Object,
});
const UsageSchema = new mongoose_1.Schema({
    _id: false,
    type: { type: String, index: true },
    times: { type: Number, index: true },
});
const ActionSchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    desc: { type: String, index: true },
    usage: UsageSchema,
    dc: index_js_1.DifficultyClassSchema,
    damage: [ActionDamageSchema],
    area_of_effect: index_js_1.AreaOfEffectSchema,
});
const TraitSpecificSchema = new mongoose_1.Schema({
    _id: false,
    subtrait_options: index_js_1.ChoiceSchema,
    spell_options: index_js_1.ChoiceSchema,
    damage_type: index_js_1.APIReferenceSchema,
    breath_weapon: ActionSchema,
});
const TraitSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    desc: { type: [String], index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    proficiencies: [ProficiencySchema],
    proficiency_choices: index_js_1.ChoiceSchema,
    language_options: index_js_1.ChoiceSchema,
    races: [index_js_1.APIReferenceSchema],
    subraces: [index_js_1.APIReferenceSchema],
    parent: index_js_1.APIReferenceSchema,
    trait_specific: TraitSpecificSchema,
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Trait', TraitSchema, 'traits');
