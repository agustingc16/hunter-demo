import { Animal, AnimalMessages } from "../../base/Animal";

const BUNNY_STRENGTH = 8;

export class Bunny extends Animal {
  /**
   * Create a new instance of Bunny
   * @param name The Bunny's name
   * @param age The Bunny's age (used to calculate HP)
   * @param weight The Bunny's weight (used to calculate HP)
   * @param height The Bunny's height (used to calculate HP)
   */
  public constructor(
    name: string,
    age: number,
    weight: number,
    height: number
  ) {
    super(name, age, weight, height);
    this.strength = BUNNY_STRENGTH;
  }

  protected setMessages(): AnimalMessages {
    return {
      DIED: `${this.name} is dead! That's all folks!`,
      SPAWN: `${this.name} the bunny comes jumping into the scene.`,
      STILL_STANDING: `${this.name} is still jumping. What kind of sorcery is this?`,
      TAKE_HIT: `Good aiming! ${this.name} was hit.`,
      TAKE_HIT_DEAD: `You hit ${this.name}'s body, or what's left of it...`,
    };
  }
}