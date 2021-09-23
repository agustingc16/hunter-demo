import { Actions } from "./core/Actions";
import { outputMessage } from "./core/global/globalFunctions";
import { Animal, Hunter, Weapon } from "./core/models/base";
import { Bear, Bunny, Colt, Deer, Remington } from "./core/models/impl";

outputMessage("Welcome to the hunter demo!");

// 1- Define objects

// 1.1- Animals
/**
 * Here you can create instances of Bear, Bunny, Deer or generic Animal.
 * You can also create your own Animal implementations in /extra/Animal
 * Example: const teddy: Animal = new Bear("Teddy", 3, 90, 40);
 */
 const teddy: Animal = new Bear("Teddy", 3, 90, 40);

// 1.2- Weapons
/**
 * Here you can create instances of Colt, Remington, BabyGun or generic Weapon.
 * You can also create your own Weapon implementations in /extra/Weapon
 * Example: const dread: Weapon = new Remington("Dread", "R22", 22);
 */
 const dread: Weapon = new Remington("Dread", "R22", 22);

// 1.3- Hunters
/**
 * Here you can create instances of Hunter.
 * Example: const elmer: Hunter = new Hunter("Elmer");
 */
const elmer: Hunter = new Hunter("Elmer");

// 2- Define actions
/**
 * Here you define the actions that happen along the demo.
 * List of possible actions:
 * Spawn: Spawn a Hunter, Weapon or Animal. Can't make other interactions with them until they are spawned.
 * SwitchWeapon: Equips the Hunter with the selected Weapon. By default the Hunter is unnarmed.
 * Shoot: The Hunters shoots an Animal with the equiped Weapon.
 * ShowStats: In case you want to display the current stats of either an Animal, Weapon or Hunter.
 * Example flow:
 * Actions.spawn(teddy);
 * Actions.spawn(dread);
 * Actions.spawn(elmer);
 * Actions.switchWeapon(elmer, dread);
 * Actions.shoot(elmer, teddy);
 */
Actions.spawn(teddy);
Actions.spawn(dread);
Actions.spawn(elmer);
Actions.switchWeapon(elmer, dread);
Actions.shoot(elmer, teddy);

outputMessage("Demo is over. Thanks for playing!");
