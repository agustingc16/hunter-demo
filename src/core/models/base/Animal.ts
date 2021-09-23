import { BaseModel } from "./BaseModel";
import { limitHP, outputMessage } from "../../global/globalFunctions";

const DEFAULT_ANIMAL_STRENGTH = 1;

enum AnimalHealthStatus {
  FULL_HEALTH = "Full health",
  INJURED = "Injured",
  DEAD = "Dead",
}

type AnimalStats = {
  age: number;
  weight: number;
  height: number;
  hp: number;
  status: AnimalHealthStatus;
};

export type AnimalMessages = {
  DIED: string;
  SPAWN: string;
  STILL_STANDING: string;
  TAKE_HIT: string;
  TAKE_HIT_DEAD: string;
};

export class Animal extends BaseModel {
  protected readonly age: number;
  protected readonly weight: number;
  protected readonly height: number;

  protected strength: number = DEFAULT_ANIMAL_STRENGTH;
  private hp: number;
  private status: AnimalHealthStatus = AnimalHealthStatus.FULL_HEALTH;

  protected messages: AnimalMessages;

  /**
   * Create a new instance of Animal
   * @param name The Animal's name
   * @param age The Animal's age (used to calculate HP)
   * @param weight The Animal's weight (used to calculate HP)
   * @param height The Animal's height (used to calculate HP)
   */
  public constructor(
    name: string,
    age: number,
    weight: number,
    height: number
  ) {
    super(name);
    this.age = age;
    this.weight = weight;
    this.height = height;

    this.hp = this.calculateHP();
    this.messages = this.setMessages();
  }

  private calculateHP(): number {
    const hpCalculation =
      ((this.height + this.weight) / 2) * this.age * (this.strength / 10);
    return limitHP(hpCalculation);
  }

  protected setMessages(): AnimalMessages {
    return {
      DIED: `${this.name} died!`,
      SPAWN: `${this.name} sets foot in this world.`,
      STILL_STANDING: `${this.name} is still standing!`,
      TAKE_HIT: `${this.name} took a hit!`,
      TAKE_HIT_DEAD: `${this.name}'s dead body was hit...`,
    };
  }

  private isAlive(): boolean {
    return this.hp > 0;
  }

  public takeHit(damage: number): void {
    if (damage > 0) {
      if (!this.isAlive()) {
        outputMessage(this.messages.TAKE_HIT_DEAD);
        this.hp -= damage;
        return;
      }
      this.hp -= damage;
      outputMessage(this.messages.TAKE_HIT);
      if (this.isAlive()) {
        this.status = AnimalHealthStatus.INJURED;
        outputMessage(this.messages.STILL_STANDING);
      } else {
        this.status = AnimalHealthStatus.DEAD;
        outputMessage(this.messages.DIED);
      }
    }
  }

  public showStats(): void {
    const stats: AnimalStats = {
      age: this.age,
      weight: this.weight,
      height: this.height,
      hp: this.hp,
      status: this.status,
    };

    outputMessage([`${this.name} stats: `, stats]);
  }
}
