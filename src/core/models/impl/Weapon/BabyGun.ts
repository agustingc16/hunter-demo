import { Weapon, WeaponMessages } from "../../base/Weapon";

const BABY_GUN_POWER = 1;
const BABY_GUN_AMMUNITION = 1;

export class BabyGun extends Weapon {
  /**
   * Create a new instance if Baby Gun
   * @param name The Baby Gun's name
   * @param model The Baby Gun's model
   * @param caliber The Baby Gun's caliber (used to calculate Damage Output)
   */
  public constructor(
    name: string,
    model: string,
    caliber: number
  ) {
    super(name, model, caliber);
    this.power = BABY_GUN_POWER;
    this.ammuniton = BABY_GUN_AMMUNITION;
  }

  protected setMessages(): WeaponMessages {
    return {
      EQUIP: `The hunter equipped himself with the Baby Gun ${this.name}, for some reason...`,
      NO_AMMO: `Baby Gun is out of ammo. Surprise!`,
      SHOOT: `The hunter shoots with the Baby Gun ${this.name}! Not kidding!`,
      SPAWN: `A Baby Gun named ${this.name}, model ${this.model} is available at the armory. You could pick it up, I guess...`,
    };
  }
}