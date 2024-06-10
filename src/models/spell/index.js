"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const DamageSchema = new mongoose_1.Schema({
    _id: false,
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    damage_at_slot_level: Object,
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    damage_at_character_level: Object,
    damage_type: index_js_1.APIReferenceSchema,
});
const DCSchema = new mongoose_1.Schema({
    _id: false,
    dc_success: { type: String, index: true },
    dc_type: index_js_1.APIReferenceSchema,
    desc: { type: String, index: true },
});
const Spell = new mongoose_1.Schema({
    _id: { type: String, select: false },
    area_of_effect: index_js_1.AreaOfEffectSchema,
    attack_type: { type: String, index: true },
    casting_time: { type: String, index: true },
    classes: [index_js_1.APIReferenceSchema],
    components: { type: [String], index: true },
    concentration: { type: Boolean, index: true },
    damage: DamageSchema,
    dc: DCSchema,
    desc: { type: [String], index: true },
    duration: { type: String, index: true },
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    heal_at_slot_level: Object,
    higher_level: { type: [String], index: true },
    index: { type: String, index: true },
    level: { type: Number, required: true },
    material: { type: String, index: true },
    name: { type: String, index: true },
    range: { type: String, index: true },
    ritual: { type: Boolean, index: true },
    school: index_js_1.APIReferenceSchema,
    subclasses: [index_js_1.APIReferenceSchema],
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Spell', Spell, 'spells');
