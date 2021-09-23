import { outputMessage } from "../../global/globalFunctions";
import { BaseModel } from "./BaseModel";
import { Weapon } from "./Weapon";

export type HunterMessages = {
  EQUIP: string;
  NO_WEAPON: string;
  SHOOT: string;
  SPAWN: string;
};

export class Hunter extends BaseModel {
  protected messages: HunterMessages;
  private equippedWeapon: Weapon | undefined;

  /**
   * Create a new instance of Hunter
   * @param name The Hunter's name
   */
  public constructor(name: string) {
    super(name);
    this.messages = this.setMessages();
  }

  protected setMessages(): HunterMessages {
    return {
      EQUIP: this.equippedWeapon
        ? `${this.name} switches weapons. ${this.equippedWeapon.messages.EQUIP}`
        : `${this.name} is left hunting with bare hands.`,
      NO_WEAPON: `${this.name} makes a shot with an invisible weapon. It's not very effective...`,
      SHOOT: this.equippedWeapon
        ? `${this.name} calls it. ${this.equippedWeapon.messages.SHOOT}`
        : `${this.name} makes a shot with an invisible weapon. It's not very effective...`,
      SPAWN: `A hunter named ${this.name} joins the hunt!`,
    };
  }

  public shoot(): number {
    if (this.equippedWeapon) {
      return this.equippedWeapon.shoot();
    }
    outputMessage(this.messages.NO_WEAPON);
    return 0;
  }

  public equipWeapon(newWeapon: Weapon) {
    this.equippedWeapon = newWeapon;
    this.messages = this.setMessages();
    outputMessage(this.messages.EQUIP);
  }

  public showStats(): void {
    const equippedWeaponMessage = this.equippedWeapon
      ? `Equipped weapon: ${this.equippedWeapon.name}`
      : `No weapon equipped`;
    outputMessage(`Hunter's name: ${this.name}. ${equippedWeaponMessage}.`);
    if (this.equippedWeapon) {
      this.equippedWeapon.showStats();
    }
  }
}
