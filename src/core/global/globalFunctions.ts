import { MAX_DAMAGE, MAX_HP, MIN_DAMAGE, MIN_HP } from "./globalVariables";

export const limitDamageOutput = (damage: number): number => {
    if (damage < MIN_DAMAGE) return MIN_DAMAGE;
    if (damage > MAX_DAMAGE) return MAX_DAMAGE;
    return damage;
  };

export const limitHP = (hp: number): number => {
  if (hp < MIN_HP) return MIN_HP;
  if (hp > MAX_HP) return MAX_HP;
  return hp;
};

/**
 * Log a message to the console
 * @param message The message to output
 */
export const outputMessage = (message: unknown): void => {
    console.log(message);
  };
