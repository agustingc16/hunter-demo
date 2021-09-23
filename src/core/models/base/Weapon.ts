import { BaseModel } from ".";
import { limitDamageOutput, outputMessage } from "../../global/globalFunctions";

type WeaponStats = {
  model: string;
  caliber: number;
  damageOutput: number;
  ammunition: number;
};

export type WeaponMessages = {
  EQUIP: string;
  NO_AMMO: string;
  SHOOT: string;
  SPAWN: string;
};

const DEFAULT_WEAPON_POWER = 1;
const DEFAULT_WEAPON_AMMUNITION = 10;

export class Weapon extends BaseModel {
  protected readonly model: string;
  protected readonly caliber: number;

  protected power: number = DEFAULT_WEAPON_POWER;
  protected ammuniton: number = DEFAULT_WEAPON_AMMUNITION;
  private damageOutput: number;

  public readonly messages;

  /**
   * Create a new instance if Weapon
   * @param name The Weapon's name
   * @param model The Weapon's model
   * @param caliber The Weapon's caliber (used to calculate Damage Output)
   */
  public constructor(name: string, model: string, caliber: number) {
    super(name);
    this.model = model;
    this.caliber = caliber;

    this.damageOutput = this.calculateDamageOutput();
    this.messages = this.setMessages();
  }

  private calculateDamageOutput(): number {
    const damageCalculation = this.caliber * this.power;
    return limitDamageOutput(damageCalculation);
  }

  protected setMessages(): WeaponMessages {
    return {
      EQUIP: `The hunter equipped himself with ${this.name}. No idea about this one.`,
      NO_AMMO: `Weapon is out of ammo.`,
      SHOOT: `The hunter shoots with ${this.name}!`,
      SPAWN: `A strange weapon named ${this.name}, model ${this.model} is available for use.`,
    };
  }

  private hasAmmo() {
    return this.ammuniton > 0;
  }

  public shoot(): number {
    if (this.hasAmmo()) {
      this.ammuniton--;
      outputMessage(this.messages.SHOOT);
      return this.damageOutput;
    }
    outputMessage(this.messages.NO_AMMO);
    return 0;
  }

  public showStats(): void {
    const stats: WeaponStats = {
      model: this.model,
      caliber: this.caliber,
      damageOutput: this.damageOutput,
      ammunition: this.ammuniton,
    };

    outputMessage([`Weapon ${this.name} stats: `, stats]);
  }
}
