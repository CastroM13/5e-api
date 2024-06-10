"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceSchema = exports.DamageSchema = exports.DifficultyClassSchema = exports.AreaOfEffectSchema = exports.APIReferenceSchema = void 0;
const mongoose_1 = require("mongoose");
exports.APIReferenceSchema = new mongoose_1.Schema({
    _id: false,
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
});
exports.AreaOfEffectSchema = new mongoose_1.Schema({
    _id: false,
    size: { type: Number, required: true },
    type: { type: String, index: true, enum: ['sphere', 'cube', 'cylinder', 'line', 'cone'] },
});
exports.DifficultyClassSchema = new mongoose_1.Schema({
    _id: false,
    dc_type: { type: exports.APIReferenceSchema, index: true },
    dc_value: { type: Number, index: true },
    success_type: { type: String, index: true, enum: ['none', 'half', 'other'] },
});
exports.DamageSchema = new mongoose_1.Schema({
    _id: false,
    damage_type: { type: exports.APIReferenceSchema, index: true },
    damage_dice: { type: String, index: true },
});
const Option = new mongoose_1.Schema({
    _id: false,
    option_type: {
        type: String,
        index: true,
        required: true,
        enum: [
            'reference',
            'action',
            'multiple',
            'string',
            'ideal',
            'counted_reference',
            'score_prerequisite',
            'ability_bonus',
            'breath',
            'damage',
        ],
    },
}, { discriminatorKey: 'option_type', _id: false });
Option.discriminators = {};
Option.discriminators['reference'] = new mongoose_1.Schema({
    item: { type: exports.APIReferenceSchema, index: true, required: true },
});
Option.discriminators['action'] = new mongoose_1.Schema({
    action_name: { type: String, index: true, required: true },
    count: { type: mongoose_1.Schema.Types.Mixed, index: true, required: true },
    type: {
        type: String,
        index: true,
        enum: ['melee', 'ranged', 'ability', 'magic'],
        required: true,
    },
    notes: { type: String, index: true },
});
Option.discriminators['multiple'] = new mongoose_1.Schema({
    items: { type: [Option], index: true, required: true },
});
Option.discriminators['string'] = new mongoose_1.Schema({
    string: { type: String, index: true, required: true },
});
Option.discriminators['ideal'] = new mongoose_1.Schema({
    desc: { type: String, index: true, required: true },
    alignments: { type: [exports.APIReferenceSchema], index: true, required: true },
});
Option.discriminators['counted_reference'] = new mongoose_1.Schema({
    count: { type: Number, index: true, required: true },
    of: { type: exports.APIReferenceSchema, index: true, required: true },
});
Option.discriminators['score_prerequisite'] = new mongoose_1.Schema({
    ability_score: { type: exports.APIReferenceSchema, index: true, required: true },
    minimum_score: { type: Number, index: true, required: true },
});
Option.discriminators['ability_bonus'] = new mongoose_1.Schema({
    ability_score: { type: exports.APIReferenceSchema, index: true, required: true },
    bonus: { type: Number, index: true, required: true },
});
Option.discriminators['breath'] = new mongoose_1.Schema({
    name: { type: String, index: true, required: true },
    dc: { type: exports.DifficultyClassSchema, index: true, required: true },
    damage: { type: [exports.DamageSchema], index: true },
});
Option.discriminators['damage'] = new mongoose_1.Schema({
    damage_type: { type: exports.APIReferenceSchema, index: true, required: true },
    damage_dice: { type: String, index: true, required: true },
    notes: { type: String, index: true },
});
const OptionSetSchema = new mongoose_1.Schema({
    _id: false,
    option_set_type: {
        type: String,
        index: true,
        required: true,
        enum: ['equipment_category', 'resource_list', 'options_array'],
    },
}, { discriminatorKey: 'option_set_type', _id: false });
OptionSetSchema.discriminators = {};
OptionSetSchema.discriminators['equipment_category'] = new mongoose_1.Schema({
    equipment_category: { type: exports.APIReferenceSchema, index: true, required: true },
});
OptionSetSchema.discriminators['resource_list'] = new mongoose_1.Schema({
    resource_list_url: { type: String, index: true, required: true },
});
OptionSetSchema.discriminators['options_array'] = new mongoose_1.Schema({
    options: { type: [Option], index: true, required: true },
});
exports.ChoiceSchema = new mongoose_1.Schema({
    _id: false,
    desc: { type: String, index: true },
    choose: { type: Number, index: true, required: true },
    type: { type: String, index: true, required: true },
    from: { type: OptionSetSchema, index: true, required: true },
});
Option.discriminators['choice'] = new mongoose_1.Schema({
    choice: { type: exports.ChoiceSchema, index: true, required: true },
});
