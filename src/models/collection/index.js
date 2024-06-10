"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CollectionSchema = new mongoose_1.Schema({
    _id: { type: String, select: false },
    index: { type: String, index: true },
});
exports.default = (0, mongoose_1.model)('Collection', CollectionSchema, 'collections');
