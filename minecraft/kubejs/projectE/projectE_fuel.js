/*
	Project-E Fuel Balance
	  Whats Included
		*
	  -Alchemical Coal
	  -Mobius Fuel
	  -Aeternalis Fuel
*/

ServerEvents.recipes(event => {

//	*Recipes Removal*
	
	event.remove({output: 'projecte:alchemical_coal'})
	event.remove({output: 'projecte:mobius_fuel'})
	event.remove({output: 'projecte:aeternalis_fuel'})


//	*Alchemical Coal*
	
	event.shapeless(
	Item.of('projecte:alchemical_coal', 1),
	[
	  'projecte:philosophers_stone',
	  'minecraft:coal',
	  'minecraft:coal',
	  'minecraft:coal',
	  'minecraft:coal',
	  'minecraft:diamond'
	]
       )

//	*Mobius Fuel*

	event.shapeless(
	Item.of('projecte:mobius_fuel', 1),
	[
	  'projecte:philosophers_stone',
	  'projecte:alchemical_coal',
	  'projecte:alchemical_coal',
	  'projecte:alchemical_coal',
	  'projecte:alchemical_coal',
	  'projecte:dark_matter'
	]
       )


//	*Aeternalis Fuel*

	event.shapeless(
	Item.of('projecte:aeternalis_fuel', 1),
	[
	  'projecte:philosophers_stone',
	  'projecte:mobius_fuel',
	  'projecte:mobius_fuel',
	  'projecte:mobius_fuel',
	  'projecte:mobius_fuel',
	  'projecte:red_matter'
	]
       )

})
