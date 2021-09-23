import { Weapon, WeaponMessages } from "../../base/Weapon";

const REMINGTON_POWER = 5;
const REMINGTON_AMMUNITION = 3;

export class Remington extends Weapon {
  /**
   * Create a new instance if Remington
   * @param name The Remington's name
   * @param model The Remington's model
   * @param caliber The Remington's caliber (used to calculate Damage Output)
   */
  public constructor(name: string, model: string, caliber: number) {
    super(name, model, caliber);
    this.power = REMINGTON_POWER;
    this.ammuniton = REMINGTON_AMMUNITION;
  }

  protected setMessages(): WeaponMessages {
    return {
      EQUIP: `The hunter equipped himself with the Remington ${this.name}. Heavy weapon.`,
      NO_AMMO: `Remington is out of ammo.`,
      SHOOT: `The hunter makes a shot with ${this.name}! That's going to hurt!`,
      SPAWN: `A Remington named ${this.name}, model ${this.model} is available at the armory. Check that one out.`,
    };
  }
}
