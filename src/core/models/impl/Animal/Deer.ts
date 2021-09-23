import { Animal, AnimalMessages } from "../../base/Animal";

const DEER_STRENGTH = 11;

export class Deer extends Animal {
  /**
   * Create a new instance of Deer
   * @param name The Deer's name
   * @param age The Deer's age (used to calculate HP)
   * @param weight The Deer's weight (used to calculate HP)
   * @param height The Deer's height (used to calculate HP)
   */
  public constructor(
    name: string,
    age: number,
    weight: number,
    height: number
  ) {
    super(name, age, weight, height);
    this.strength = DEER_STRENGTH;
  }

  protected setMessages(): AnimalMessages {
    return {
      DIED: `${this.name} is down! Like Bambi's mother.`,
      SPAWN: `A cute deer called ${this.name} sets it's little feet in this world.`,
      STILL_STANDING: `${this.name} somehow was able to survive that...`,
      TAKE_HIT: `You monster! You injured ${this.name}!`,
      TAKE_HIT_DEAD: `Why are you still hitting ${this.name}'s little corpse?`,
    };
  }
}
