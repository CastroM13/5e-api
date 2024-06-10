"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const ArmorClassSchema = new mongoose_1.Schema({
    _id: false,
    base: { type: Number, index: true },
    dex_bonus: { type: Boolean, index: true },
    max_bonus: { type: Number, index: true },
});
const ContentSchema = new mongoose_1.Schema({
    _id: false,
    item: index_js_1.APIReferenceSchema,
    quantity: { type: Number, index: true },
});
const CostSchema = new mongoose_1.Schema({
    _id: false,
    quantity: { type: Number, index: true },
    unit: { type: String, index: true },
});
const DamageSchema = new mongoose_1.Schema({
    _id: false,
    damage_dice: { type: String, index: true },
    damage_type: index_js_1.APIReferenceSchema,
});
const RangeSchema = new mongoose_1.Schema({
    _id: false,
    long: { type: Number, index: true },
    normal: { type: Number, index: true },
});
const SpeedSchema = new mongoose_1.Schema({
    _id: false,
    quantity: { type: Number, index: true },
    unit: { type: String, index: true },
});
const ThrowRangeSchema = new mongoose_1.Schema({
    _id: false,
    long: { type: Number, index: true },
    normal: { type: Number, index: true },
});
const TwoHandedDamageSchema = new mongoose_1.Schema({
    _id: false,
    damage_dice: { type: String, index: true },
    damage_type: index_js_1.APIReferenceSchema,
});
const EquipmentSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    armor_category: { type: String, index: true },
    armor_class: ArmorClassSchema,
    capacity: { type: String, index: true },
    category_range: { type: String, index: true },
    contents: [ContentSchema],
    cost: CostSchema,
    damage: DamageSchema,
    desc: { type: [String], index: true },
    equipment_category: index_js_1.APIReferenceSchema,
    gear_category: index_js_1.APIReferenceSchema,
    index: { type: String, index: true },
    name: { type: String, index: true },
    properties: [index_js_1.APIReferenceSchema],
    quantity: { type: Number, index: true },
    range: RangeSchema,
    special: { type: [String], index: true },
    speed: SpeedSchema,
    stealth_disadvantage: { type: Boolean, index: true },
    str_minimum: { type: Number, index: true },
    throw_range: ThrowRangeSchema,
    tool_category: { type: String, index: true },
    two_handed_damage: TwoHandedDamageSchema,
    url: { type: String, index: true },
    vehicle_category: { type: String, index: true },
    weapon_category: { type: String, index: true },
    weapon_range: { type: String, index: true },
    weight: { type: Number, index: true },
});
exports.default = (0, mongoose_1.model)('Equipment', EquipmentSchema, 'equipment');
