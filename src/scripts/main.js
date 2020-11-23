console.log("Welcome to the main module")

import { createPlan } from './plan.js'
const yearlyPlan = createPlan ();
console.log(yearlyPlan);



// POTATO
import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed);


// SUNFLOWER
import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed);


// ASPARAGUS
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed);


// SOYBEAN
import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed);


//CORN
import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed);


//WHEAT
import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
console.log(wheatSeed);


import { addPlant } from './field.js'
addPlant(cornSeed)
addPlant(sunflowerSeed)
addPlant(potatoSeed)
addPlant(asparagusSeed)
addPlant(soybeanSeed)
addPlant(wheatSeed)


import { usePlants } from './field.js'
const plants = usePlants()
console.log("Plants", plants)