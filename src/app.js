"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const abilityScore_1 = __importDefault(require("./models/abilityScore"));
const class_1 = __importDefault(require("./models/class"));
const condition_1 = __importDefault(require("./models/condition"));
const damageType_1 = __importDefault(require("./models/damageType"));
const equipmentCategory_1 = __importDefault(require("./models/equipmentCategory"));
const equipment_1 = __importDefault(require("./models/equipment"));
const feature_1 = __importDefault(require("./models/feature"));
const language_1 = __importDefault(require("./models/language"));
const magicSchool_1 = __importDefault(require("./models/magicSchool"));
const monster_1 = __importDefault(require("./models/monster"));
const proficiency_1 = __importDefault(require("./models/proficiency"));
const race_1 = __importDefault(require("./models/race"));
const skill_1 = __importDefault(require("./models/skill"));
const spell_1 = __importDefault(require("./models/spell"));
const subclass_1 = __importDefault(require("./models/subclass"));
const subrace_1 = __importDefault(require("./models/subrace"));
const trait_1 = __importDefault(require("./models/trait"));
const weaponProperty_1 = __importDefault(require("./models/weaponProperty"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
mongoose_1.default.connect('mongodb+srv://admin5e:XQIufy0ArnVTNW6F@5ecluster.h1ri2en.mongodb.net/').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
app.use(body_parser_1.default.json());
app.get('/api/ability-scores', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield abilityScore_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/class', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield class_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/condition', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield condition_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/damage-type', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield damageType_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/equipment-category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield equipmentCategory_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/equipment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield equipment_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/feature', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield feature_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/language', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield language_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/magic-school', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield magicSchool_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/monster', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield monster_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/proficiency', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield proficiency_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/race', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield race_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/skill', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield skill_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/spell', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield spell_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/subclass', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield subclass_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/subrace', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield subrace_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/trait', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield trait_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.get('/api/weapon-property', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield weaponProperty_1.default.find();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
