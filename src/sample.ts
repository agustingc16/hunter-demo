import { Actions } from "./core/Actions";
import { outputMessage } from "./core/global/globalFunctions";
import { Animal, Hunter, Weapon } from "./core/models/base";
import { Bear, Bunny, Colt, Deer, Remington } from "./core/models/impl";

outputMessage("Welcome to the hunter demo! This is a sample simulation.");

// 1- Define objects

// 1.1- Animals
const teddy: Animal = new Bear("Teddy", 3, 90, 40);
const timmy: Animal = new Deer("Timmy", 4, 20, 30);
const yogi: Animal = new Bear("Yogi", 11, 120, 50);
const bugs: Animal = new Bunny("Bugs", 10, 10, 5);

// 1.2- Weapons
const banger: Weapon = new Colt("Banger", "C14", 14);
const dread: Weapon = new Remington("Dread", "R22", 22);

// 1.3- Hunters
const elmer: Hunter = new Hunter("Elmer");

// 2- Define actions

Actions.spawn(teddy);
Actions.spawn(yogi);
Actions.spawn(timmy);

Actions.spawn(banger);
Actions.spawn(dread);

Actions.spawn(elmer);

Actions.shoot(elmer, teddy);
Actions.switchWeapon(elmer, banger);
Actions.shoot(elmer, teddy);
Actions.switchWeapon(elmer, dread);
Actions.shoot(elmer, teddy);
Actions.shoot(elmer, teddy);
Actions.shoot(elmer, timmy);

Actions.spawn(bugs);
Actions.shoot(elmer, bugs);
Actions.switchWeapon(elmer, banger);
Actions.shoot(elmer, bugs);

outputMessage("Demo is over. Thanks for playing! Try your own mix.");