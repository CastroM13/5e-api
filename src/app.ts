import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import abilityScore from './models/abilityScore';
import _class from './models/class';
import condition from './models/condition';
import damageType from './models/damageType';
import equipmentCategory from './models/equipmentCategory';
import equipment from './models/equipment';
import feature from './models/feature';
import language from './models/language';
import magicSchool from './models/magicSchool';
import monster from './models/monster';
import proficiency from './models/proficiency';
import race from './models/race';
import skill from './models/skill';
import spell from './models/spell';
import subclass from './models/subclass';
import subrace from './models/subrace';
import trait from './models/trait';
import weaponProperty from './models/weaponProperty';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`).then(() => {
  console.log('Connected to MongoDB');
}).catch((err: any) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(bodyParser.json());

app.get('/api/ability-scores', async (req, res) => {
  try {
    const data = await abilityScore.find();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/class', async (req, res) => {
    try {
      const data = await _class.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/condition', async (req, res) => {
    try {
      const data = await condition.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/damage-type', async (req, res) => {
    try {
      const data = await damageType.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/equipment-category', async (req, res) => {
    try {
      const data = await equipmentCategory.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/equipment', async (req, res) => {
    try {
      const data = await equipment.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/feature', async (req, res) => {
    try {
      const data = await feature.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/language', async (req, res) => {
    try {
      const data = await language.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/magic-school', async (req, res) => {
    try {
      const data = await magicSchool.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/monster', async (req, res) => {
    try {
      const data = await monster.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/proficiency', async (req, res) => {
    try {
      const data = await proficiency.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/race', async (req, res) => {
    try {
      const data = await race.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/skill', async (req, res) => {
    try {
      const data = await skill.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/spell', async (req, res) => {
    try {
      const data = await spell.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/subclass', async (req, res) => {
    try {
      const data = await subclass.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/subrace', async (req, res) => {
    try {
      const data = await subrace.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/trait', async (req, res) => {
    try {
      const data = await trait.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/api/weapon-property', async (req, res) => {
    try {
      const data = await weaponProperty.find();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
