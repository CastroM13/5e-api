"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const AbilityBonus = new mongoose_1.Schema({
    _id: false,
    ability_score: index_js_1.APIReferenceSchema,
    bonus: { type: Number, index: true },
});
const Subrace = new mongoose_1.Schema({
    _id: { type: String, select: false },
    ability_bonuses: [AbilityBonus],
    desc: { type: String, index: true },
    index: { type: String, index: true },
    language_options: index_js_1.ChoiceSchema,
    name: { type: String, index: true },
    race: index_js_1.APIReferenceSchema,
    racial_traits: [index_js_1.APIReferenceSchema],
    starting_proficiencies: [index_js_1.APIReferenceSchema],
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Subrace', Subrace, 'subraces');
