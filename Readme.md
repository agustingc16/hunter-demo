# Hunter Demo

## Setting up
```sh
git clone {path}
cd hunter-demo
npm i
```

---

## Execution
### If you want to execute a sample simulation
```sh
npm run sample
```
### If you want to execute the main simulation
```sh
npm start
```

---

## Building a simulation

You can build a simulation with every actor and order you would like.
The possible actors for the simulation are:
- Animals
- Hunters
- Weapons

---

### Animals
They are the main inhabitants of this world and their goal is to don't end up as the Hunter's meal.

They have no other possible actions after spawning. The only interactions they have is to take hits and wish to survive.

#### **Animal stats**
- **Name**
- **Age**
- **Weight**
- **Height**
- **Strength:** A base modifier used to calculate HP.
- **HP:** A numeric value indicating the Animal's current health. It is reduced with every Weapon hit. If it reaches 0 the Animal dies.

#### Animal HP calculation
```
hp = ((height + weight) / 2) * age * (strength / 10)
```
*By default HP can't be more than 10000 and less than 1.*

#### **Animal actions**
- **Spawn**
- **Show Stats**

---

### Weapons
The Weapons are what the Hunter's use to hunt down their preys. They can be equipped by any Hunter.

When a Hunter takes a shot, he/she uses the current equipped Weapon.

The Weapons can't shoot by themselves. The shooting actions are for the Hunters only.

#### **Weapon stats**
- **Name**
- **Model**
- **Caliber**
- **Ammunition:** The amount of shots that the Weapon can make.
- **Power:** A base modifier used to calculate damage output.
- **Damage Output:** A numeric value indicating the final damage that the Weapon deals to any Animal in every shot. With each shot the Animal's HP gets subracted the value of the Weapon's damage output.

#### Weapon Damage Output calculation
```
damage = caliber * power
```
*By default Damage Output can't be more than 500 and less than 1.*

#### **Weapon actions**
- **Spawn**
- **Switch Weapon**
- **Show Stats**

---

### Hunters
The predators of this world. They use Weapons to hunt down Animals.

They spawn without any Weapon equipped, so they need to equip one before shooting if they want to cause some damage.

They can shoot any Animal whenever they want. Likewise they can switch their current Weapon at any time.

Take into account that Weapons have limited ammunition, so they have to choose their shots wisely.

### **Hunter stats**
- **Name**
- **Equipped Weapon**

#### **Hunter actions**
- **Spawn**
- **Switch Weapon**
- **Shoot**
- **Show Stats**

---

### Actions

The user can add any amount of Actions to the simulation.
Once the program is run, all actions will be executed in sequence in the order established by the user.

#### **Spawn**
Spawn any Hunter, Weapon or Animal into the simulation.
Spawning is required to perform further actions.

#### **Switch Weapon**
Make a Hunter switch his current Weapon for the Weapon selected.

#### **Shoot**
Make a Hunter shoot an Animal.

#### **Show Stats**
Print the current stats for a Hunter, Weapon or Animal.

---

## Execution example

### Code
```typescript
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
```
### Output
```
Welcome to the hunter demo! This is a sample simulation.
A wild bear called Teddy sets foot in this world.
A wild bear called Yogi sets foot in this world.
A cute deer called Timmy sets it's little feet in this world.
A Colt named Banger, model C14 is available at the armory. Don't miss that one!
A Remington named Dread, model R22 is available at the armory. Check that one out.
A hunter named Elmer joins the hunt!
Elmer takes aim at Teddy.
Elmer makes a shot with an invisible weapon. It's not very effective...
Elmer switches weapons. The hunter equipped himself with the Colt Banger. Lock & load.
Elmer takes aim at Teddy.
The hunter shoots with Banger! Looks that it's going to hit!
Teddy took a hit to it's huge belly!
Teddy doesn't seem to mind that hit...
Elmer switches weapons. The hunter equipped himself with the Remington Dread. Heavy weapon.
Elmer takes aim at Teddy.
The hunter makes a shot with Dread! That's going to hurt!
Teddy took a hit to it's huge belly!
Teddy made a final grunt and shakes the ground!
Elmer takes aim at Teddy.
The hunter makes a shot with Dread! That's going to hurt!
Teddy's body was hit. Stop it! It's already dead!
Elmer takes aim at Timmy.
The hunter makes a shot with Dread! That's going to hurt!
You monster! You injured Timmy!
Timmy is down! Like Bambi's mother.
Bugs the bunny comes jumping into the scene.
Elmer takes aim at Bugs.
Remington is out of ammo.
Elmer switches weapons. The hunter equipped himself with the Colt Banger. Lock & load.
Elmer takes aim at Bugs.
The hunter shoots with Banger! Looks that it's going to hit!
Good aiming! Bugs was hit.
Bugs is dead! That's all folks!
Demo is over. Thanks for playing! Try your own mix.
```

