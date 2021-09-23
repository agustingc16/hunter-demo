import { outputMessage } from "./global/globalFunctions";
import { Animal, BaseModel, Hunter, Weapon } from "./models/base";

/**
 * The actions that can be executed in the simulation.
 */
export class Actions {
  /**
   * Spawn any Hunter, Weapon or Animal into the simulation.
   * Spawning is required to perform further actions.
   * @param model Any Hunter, Weapon or Animal to spawn
   */
  public static spawn(model: BaseModel) {
    model.spawn();
  }

  /**
   * Make a Hunter shoot an Animal.
   * @param hunter The Hunter that shoots (if he has a Weapon equipped with ammo)
   * @param animal The Animal that is going to be hit (if the Hunter has a Weapon equipped with ammo)
   */
  public static shoot(hunter: Hunter, animal: Animal): void {
    if (this.checkSpawned([hunter, animal])) {
      outputMessage(`${hunter.name} takes aim at ${animal.name}.`);
      const damage = hunter.shoot();
      if (damage > 0) animal.takeHit(damage);
    }
  }

  /**
   * Make a Hunter switch his current Weapon for the Weapon selected.
   * @param hunter The Hunter that switches Weapons
   * @param weapon The Weapon that is going to be equipped
   */
  public static switchWeapon(hunter: Hunter, weapon: Weapon): void {
    if (this.checkSpawned([hunter, weapon])) {
      hunter.equipWeapon(weapon);
    }
  }

  /**
   * Print the current stats for a Hunter, Weapon or Animal.
   * @param model The Hunter, Weapon or Animal to show stats
   */
  public static showStats(model: BaseModel): void {
    model.showStats();
  }

  /**
   * A method that checks if every instance of the list has already spawned.
   * @param models The model to check if spawned
   * @returns A boolean indicating if every instance in the list spawned
   */
  private static checkSpawned(models: BaseModel[]): boolean {
    let valid: boolean = true;
    for (let model of models) {
      if (!model.hasSpawned()) {
        valid = false;
        outputMessage(
          `ERROR: Invalid action setup. ${model.name} has not yet spawned.`
        );
      }
    }
    return valid;
  }
}
