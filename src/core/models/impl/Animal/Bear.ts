import { Animal, AnimalMessages } from "../../base/Animal";

const BEAR_STRENGTH = 16;

export class Bear extends Animal {
  /**
   * Create a new instance of Bear
   * @param name The Bear's name
   * @param age The Bear's age (used to calculate HP)
   * @param weight The Bear's weight (used to calculate HP)
   * @param height The Bear's height (used to calculate HP)
   */
  public constructor(
    name: string,
    age: number,
    weight: number,
    height: number
  ) {
    super(name, age, weight, height);
    this.strength = BEAR_STRENGTH;
  }

  protected setMessages(): AnimalMessages {
    return {
      DIED: `${this.name} made a final grunt and shakes the ground!`,
      SPAWN: `A wild bear called ${this.name} sets foot in this world.`,
      STILL_STANDING: `${this.name} doesn't seem to mind that hit...`,
      TAKE_HIT: `${this.name} took a hit to it's huge belly!`,
      TAKE_HIT_DEAD: `${this.name}'s body was hit. Stop it! It's already dead!`,
    };
  }
}
