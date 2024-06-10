"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_js_1 = require("../common/index.js");
const PrerequisiteSchema = new mongoose_1.Schema({
    _id: false,
    type: { type: String, index: true, required: true, enum: ['level', 'feature', 'spell'] },
}, { discriminatorKey: 'type', _id: false });
PrerequisiteSchema.discriminators = {};
PrerequisiteSchema.discriminators['level'] = new mongoose_1.Schema({
    level: { type: Number, index: true, required: true },
});
PrerequisiteSchema.discriminators['feature'] = new mongoose_1.Schema({
    feature: { type: String, index: true, required: true },
});
PrerequisiteSchema.discriminators['spell'] = new mongoose_1.Schema({
    spell: { type: String, index: true, required: true },
});
const FeatureSpecificSchema = new mongoose_1.Schema({
    _id: false,
    subfeature_options: index_js_1.ChoiceSchema,
    expertise_options: index_js_1.ChoiceSchema,
    invocations: [index_js_1.APIReferenceSchema],
});
const FeatureSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    class: index_js_1.APIReferenceSchema,
    desc: { type: [String], index: true },
    parent: index_js_1.APIReferenceSchema,
    index: { type: String, index: true },
    level: { type: Number, index: true },
    name: { type: String, index: true },
    prerequisites: [PrerequisiteSchema],
    reference: { type: String, index: true },
    subclass: index_js_1.APIReferenceSchema,
    feature_specific: FeatureSpecificSchema,
    url: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Feature', FeatureSchema, 'features');
