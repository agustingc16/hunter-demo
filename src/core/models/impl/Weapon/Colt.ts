import { Weapon, WeaponMessages } from "../../base/Weapon";

const COLT_POWER = 2;
const COLT_AMMUNITION = 12;

export class Colt extends Weapon {
  /**
   * Create a new instance if Colt
   * @param name The Colt's name
   * @param model The Colt's model
   * @param caliber The Colt's caliber (used to calculate Damage Output)
   */
  public constructor(
    name: string,
    model: string,
    caliber: number
  ) {
    super(name, model, caliber);
    this.power = COLT_POWER;
    this.ammuniton = COLT_AMMUNITION;
  }

  protected setMessages(): WeaponMessages {
    return {
      EQUIP: `The hunter equipped himself with the Colt ${this.name}. Lock & load.`,
      NO_AMMO: `Colt is out of ammo.`,
      SHOOT: `The hunter shoots with ${this.name}! Looks that it's going to hit!`,
      SPAWN: `A Colt named ${this.name}, model ${this.model} is available at the armory. Don't miss that one!`,
    };
  }
}