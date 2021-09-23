/**
 * This is a sample implementation for a Weapon.
 * Feel free to use this class as a template and duplicate it for each new implementation.
 */

import { Weapon, WeaponMessages } from "../../core/models/base/Weapon";

// Choose the power you would like. This will be used to calculate the Weapons's damage output.
const GLOCK_POWER = 2;
// Choose the ammunition you would like. This sets the amount of shots the Weapon can make.
const GLOCK_AMMUNITION = 16;

// Choose the class (and Weapon) name.
export class Glock extends Weapon {
  public constructor(
    name: string,
    model: string,
    caliber: number
  ) {
    super(name, model, caliber);
    this.power = GLOCK_POWER;
    this.ammuniton = GLOCK_AMMUNITION;
  }

  // Set the custom messages you would like for every event.
  protected setMessages(): WeaponMessages {
    return {
      EQUIP: `The hunter equipped himself with the Glock ${this.name}.`,
      NO_AMMO: `Weapon is out of ammo.`,
      SHOOT: `The hunter shoots with ${this.name}!`,
      SPAWN: `A Glock named ${this.name}, model ${this.model} is available for use.`,
    };
  }
}