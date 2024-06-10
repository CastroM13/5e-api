"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const ActionOptionSchema = new mongoose_1.Schema({
    _id: false,
    action_name: { type: String, index: true },
    count: { type: mongoose_1.Schema.Types.Mixed, index: true },
    type: { type: String, index: true, enum: ['melee', 'ranged', 'ability', 'magic'] },
});
const ActionUsageSchema = new mongoose_1.Schema({
    _id: false,
    type: { type: String, index: true },
    dice: { type: String, index: true },
    min_value: { type: Number, index: true },
});
const ActionSchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    desc: { type: String, index: true },
    attack_bonus: { type: Number, index: true },
    damage: { type: [index_js_1.DamageSchema], default: undefined },
    dc: index_js_1.DifficultyClassSchema,
    usage: ActionUsageSchema,
    multiattack_type: { type: String, index: true, enum: ['actions', 'action_options'] },
    action_options: { type: index_js_1.ChoiceSchema, index: true },
    actions: { type: [ActionOptionSchema], index: true },
});
const ArmorClassSchema = new mongoose_1.Schema({
    _id: false,
    type: { type: String, index: true, enum: ['dex', 'natural', 'armor', 'spell', 'condition'] },
    desc: { type: String, index: true },
    value: { type: Number, index: true },
}, { discriminatorKey: 'type', _id: false });
ArmorClassSchema.discriminators = {};
ArmorClassSchema.discriminators.dex = new mongoose_1.Schema({});
ArmorClassSchema.discriminators.natural = new mongoose_1.Schema({});
ArmorClassSchema.discriminators.armor = new mongoose_1.Schema({
    armor: { type: [index_js_1.APIReferenceSchema], index: true },
});
ArmorClassSchema.discriminators.spell = new mongoose_1.Schema({
    spell: { type: index_js_1.APIReferenceSchema, index: true },
});
ArmorClassSchema.discriminators.condition = new mongoose_1.Schema({
    condition: { type: index_js_1.APIReferenceSchema, index: true },
});
const LegendaryActionSchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    desc: { type: String, index: true },
    attack_bonus: { type: Number, index: true },
    damage: { type: [index_js_1.DamageSchema], default: undefined },
    dc: index_js_1.DifficultyClassSchema,
});
const ProficiencySchema = new mongoose_1.Schema({
    _id: false,
    proficiency: index_js_1.APIReferenceSchema,
    value: { type: Number, index: true },
});
const ReactionSchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    desc: { type: String, index: true },
    dc: index_js_1.DifficultyClassSchema,
});
const SenseSchema = new mongoose_1.Schema({
    _id: false,
    blindsight: { type: String, index: true },
    darkvision: { type: String, index: true },
    passive_perception: { type: Number, index: true },
    tremorsense: { type: String, index: true },
    truesight: { type: String, index: true },
});
const SpecialAbilityUsageSchema = new mongoose_1.Schema({
    _id: false,
    type: { type: String, index: true },
    times: { type: Number, index: true },
    rest_types: { type: [String], index: true },
});
const SpecialAbilitySpellSchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    level: { type: Number, index: true },
    url: { type: String, index: true },
    notes: { type: String, index: true },
    usage: SpecialAbilityUsageSchema,
});
const SpecialAbilitySpellcastingSchema = new mongoose_1.Schema({
    _id: false,
    level: { type: Number, index: true },
    ability: index_js_1.APIReferenceSchema,
    dc: { type: Number, index: true },
    modifier: { type: Number, index: true },
    components_required: { type: [String], index: true },
    school: { type: String, index: true },
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    slots: Object,
    spells: [SpecialAbilitySpellSchema],
});
const SpecialAbilitySchema = new mongoose_1.Schema({
    _id: false,
    name: { type: String, index: true },
    desc: { type: String, index: true },
    attack_bonus: { type: Number, index: true },
    damage: { type: [index_js_1.DamageSchema], default: undefined },
    dc: index_js_1.DifficultyClassSchema,
    spellcasting: SpecialAbilitySpellcastingSchema,
    usage: SpecialAbilityUsageSchema,
});
const SpeedSchema = new mongoose_1.Schema({
    _id: false,
    burrow: { type: String, index: true },
    climb: { type: String, index: true },
    fly: { type: String, index: true },
    hover: { type: Boolean, index: true },
    swim: { type: String, index: true },
    walk: { type: String, index: true },
});
const Monster = new mongoose_1.Schema({
    _id: { type: String, select: false },
    actions: [ActionSchema],
    alignment: { type: String, index: true },
    armor_class: [ArmorClassSchema],
    challenge_rating: { type: Number, index: true },
    charisma: { type: Number, index: true },
    condition_immunities: [index_js_1.APIReferenceSchema],
    constitution: { type: Number, index: true },
    damage_immunities: { type: [String], index: true },
    damage_resistances: { type: [String], index: true },
    damage_vulnerabilities: { type: [String], index: true },
    dexterity: { type: Number, index: true },
    forms: { type: [index_js_1.APIReferenceSchema], default: undefined },
    hit_dice: { type: String, index: true },
    hit_points: { type: Number, index: true },
    hit_points_roll: { type: String, index: true },
    image: { type: String, index: true },
    index: { type: String, index: true },
    intelligence: { type: Number, index: true },
    languages: { type: String, index: true },
    legendary_actions: [LegendaryActionSchema],
    name: { type: String, index: true },
    proficiencies: [ProficiencySchema],
    reactions: { type: [ReactionSchema], default: undefined },
    senses: SenseSchema,
    size: { type: String, index: true },
    special_abilities: [SpecialAbilitySchema],
    speed: SpeedSchema,
    strength: { type: Number, index: true },
    subtype: { type: String, index: true },
    type: { type: String, index: true },
    url: { type: String, index: true },
    wisdom: { type: Number, index: true },
    xp: { type: Number, index: true },
});
exports.default = (0, mongoose_1.model)('Monster', Monster, 'monsters');
