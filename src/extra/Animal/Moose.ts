/**
 * This is a sample implementation for an Animal.
 * Feel free to use this class as a template and duplicate it for each new implementation.
 */

import { Animal, AnimalMessages } from "../../core/models/base/Animal";

// Choose the strength you would like. This will be used to calculate the Animal's hp.
const MOOSE_STRENGTH = 6;

// Choose the class (and Animal) name.
export class Moose extends Animal {
  public constructor(
    name: string,
    age: number,
    weight: number,
    height: number
  ) {
    super(name, age, weight, height);
    this.strength = MOOSE_STRENGTH;
  }

  // Set the custom messages you would like for every event.
  protected setMessages(): AnimalMessages {
    return {
      DIED: `${this.name} died!`,
      SPAWN: `A Moose named ${this.name} sets foot in this world.`,
      STILL_STANDING: `${this.name} is still standing!`,
      TAKE_HIT: `${this.name} took a hit!`,
      TAKE_HIT_DEAD: `${this.name}'s dead body was hit...`,
    };
  }
}
