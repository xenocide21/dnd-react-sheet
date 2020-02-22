import recursiveFreeze from '../recursive-freeze';
import {
  LIGHT_ARMOR,
  MEDIUM_ARMOR,
  SIMPLE_WEAPON,
  MARTIAL_WEAPON,
  HAND_CROSSBOW,
  LONGSWORD,
  RAPIER,
  SHORTSWORD,
  DAGGERS,
  DARTS,
  SLINGS,
  QUARTERSTAFFS,
  LIGHT_CROSSBOW,
} from './equipament-types';
import {STR, DEX, CON, CHA, INT, WIS} from './abilities';
import * as skills from './skills';

export const BARBARIAN = recursiveFreeze({
  name: 'BARBARIAN',
  hitDie: 12,
  proficiencies: {
    armor: [
      LIGHT_ARMOR,
      MEDIUM_ARMOR,
    ],
    shield: true,
    weapons: [
      SIMPLE_WEAPON,
      MARTIAL_WEAPON,
    ],
    savingThrows: [
      STR,
      CON,
    ],
    skills: {
      choices: [
        skills.ANIMAL_HANDLING,
        skills.ATHLETICS,
        skills.INTIMIDATION,
        skills.NATURE,
        skills.PERCEPTION,
        skills.SURVIVAL,
      ],
      number: 2,
    }
  }
});

export const BARD = recursiveFreeze({
  name: 'BARD',
  hitDie: 8,
  proficiencies: {
    armor: [
      LIGHT_ARMOR
    ],
    weapons: [
      SIMPLE_WEAPON,
      HAND_CROSSBOW,
      LONGSWORD,
      RAPIER,
      SHORTSWORD,
    ],
    savingThrows: [
      DEX,
      CHA
    ],
    skills: {
      choices: skills,
      number: 3
    }
  }
});
export const WIZARD = recursiveFreeze({
  name: 'WIZARD',
  hitDie: 6,
  proficiencies: {
    armor: [],
    weapons: [
      DAGGERS,
      DARTS,
      SLINGS,
      QUARTERSTAFFS,
      LIGHT_CROSSBOW,
    ],
    savingThrows: [
      INT,
      WIS
    ],
      // choices: skills,
      skills: {
        choices: [
          skills.ARCANA,
          skills.HISTORY,
          skills.INSIGHT,
          skills.INVESTIGATION,
          skills.MEDICINE,
          skills.RELIGION,
        ],
        number: 2
      }
    }
});
