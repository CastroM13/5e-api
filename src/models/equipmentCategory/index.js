"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const EquipmentCategorySchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    equipment: [index_js_1.APIReferenceSchema],
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('EquipmentCategory', EquipmentCategorySchema, 'equipment-categories');
