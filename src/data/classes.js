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
  DAGGER,
  DART,
  SLING,
  QUARTERSTAFF,
  LIGHT_CROSSBOW,
  SHIELD,
  SHIELD_WOOD,
  CLUB,
  SPEAR,
  SICKLE,
  SCIMITAR,
  JAVELIN,
  MACE, HEAVY_ARMOR
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
      SHIELD,
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
  },
});
export const CLERIC = recursiveFreeze({
  name: 'CLERIC',
  hitDie: 8,
  proficiencies: {
    armor: [
      LIGHT_ARMOR,
      MEDIUM_ARMOR,
      SHIELD
    ],
    weapons: [
      SIMPLE_WEAPON
    ],
    savingThrows: [
      WIS,
      CHA
    ],
    skills: {
      choices: [
        skills.HISTORY,
        skills.INSIGHT,
        skills.MEDICINE,
        skills.PERSUASION,
        skills.RELIGION,
      ],
      number: 2
    }
  }
})
export const DRUID = recursiveFreeze({
  name: 'DRUID',
  hitDie: 8,
  proficiencies: {
    armor: [
        LIGHT_ARMOR,
        MEDIUM_ARMOR,
        SHIELD_WOOD,
    ],
    weapons: [
      CLUB,
      DAGGER,
      DART,
      JAVELIN,
      MACE,
      QUARTERSTAFF,
      SCIMITAR,
      SICKLE,
      SLING,
      SPEAR,
      LIGHT_CROSSBOW,
    ],
    savingThrows: [
      INT,
      WIS
    ],
    skills: {
      choices: [
        skills.ARCANA,
        skills.ANIMAL_HANDLING,
        skills.INSIGHT,
        skills.SURVIVAL,
        skills.MEDICINE,
        skills.RELIGION,
        skills.NATURE,
        skills.PERCEPTION,
      ],
      number: 2
    }
  }
})
export const FIGHTER = recursiveFreeze({
  name: 'FIGHTER',
  hitDie: 10,
  proficiencies: {
    armor: [
        LIGHT_ARMOR,
        MEDIUM_ARMOR,
        HEAVY_ARMOR,
        SHIELD
    ],
    weapons: [
        SIMPLE_WEAPON,
        MARTIAL_WEAPON
    ],
    savingThrows: [
        STR,
        CON
    ],
    skills: {
      choices: [
        skills.ACROBATICS,
        skills.ANIMAL_HANDLING,
        skills.ATHLETICS,
        skills.HISTORY,
        skills.INSIGHT,
        skills.INTIMIDATION,
        skills.PERCEPTION,
        skills.SURVIVAL,
      ],
      number: 2
    }
  }
})
export const MONK = recursiveFreeze({
  name: 'MONK',
  hitDie: 8,
  proficiencies: {
    armor: [],
    weapons: [
      SIMPLE_WEAPON,
      SHORTSWORD
    ],
    savingThrows: [
      STR,
      DEX
    ],
    skills: {
      choices: [
        skills.ACROBATICS,
        skills.ATHLETICS,
        skills.HISTORY,
        skills.INSIGHT,
        skills.STEALTH,
        skills.RELIGION,
      ],
      number: 2
    }
  }
})
export const WIZARD = recursiveFreeze({
  name: 'WIZARD',
  hitDie: 6,
  proficiencies: {
    armor: [],
    weapons: [
      DAGGER,
      DART,
      SLING,
      QUARTERSTAFF,
      LIGHT_CROSSBOW,
    ],
    savingThrows: [
      INT,
      WIS
    ],
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
