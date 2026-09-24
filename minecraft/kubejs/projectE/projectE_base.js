/*
	Project-E Base Balance
	  Whats Included
		*
	  -Dark Matter
	  -Red Matter
	  -Philosophers Stone
	  -Covalance Dust(low,med,high)

*/

ServerEvents.recipes(event => {

//	*Recipes Removal*
	
	event.remove({output:'projecte:dark_matter'})
	event.remove({output:'projecte:red_matter'})
	event.remove({output:'projecte:philosophers_stone'})
	event.remove({output:'projecte:low_covalence_dust'})
	event.remove({output:'projecte:medium_covalence_dust'})
	event.remove({output:'projecte:high_covalence_dust'})


//	*Dark Matter*
	
	event.shapeless(
	Item.of('projecte:dark_matter', 1),
	[
	  'projecte:philosophers_stone',
	  'minecraft:diamond',
	  'minecraft:diamond',
	  'minecraft:diamond',
	  'minecraft:diamond',
	  'minecraft:iron_ingot',
	  'minecraft:lapis_lazuli',
	  'projecte:alchemical_coal',
	  'minecraft:redstone'
	]
       )

//	*Red Matter*

	event.shapeless(
	Item.of('projecte:red_matter', 1),
	[ 
	  'projecte:philosophers_stone',
	  'projecte:dark_matter',
	  'projecte:dark_matter',
	  'projecte:dark_matter',
	  'projecte:dark_matter',
	  'minecraft:iron_ingot',
	  'minecraft:lapis_lazuli',
	  'projecte:alchemical_coal',
	  'minecraft:glowstone_dust'
	]
       )

//	*Philosophers Stone*

	event.shaped(
	Item.of('projecte:philosophers_stone', 1),
	[
	  ' A ',
	  'BED',
	  ' C '
	],
	{
	  A: 'minecraft:gold_block',
	  B: 'minecraft:redstone_block',
	  C: 'minecraft:diamond_block',
	  D: 'minecraft:ender_pearl',
	  E: 'projecte:red_matter'
	}
       )

//	*Covalence Dust*

	event.shapeless(
	Item.of('projecte:low_covalence_dust', 30),
	[
	  'projecte:philosophers_stone',
	  'minecraft:stone',
	  'minecraft:stone',
	  'minecraft:stone',
	  'minecraft:stone',
	  'minecraft:stone',
	  'minecraft:stone',
	  'minecraft:stone',
	  'minecraft:coal'
	]
       )

	event.shapeless(
	Item.of('projecte:medium_covalence_dust', 30),
	[
	  'projecte:philosophers_stone',
	  'minecraft:iron_ingot',
	  'minecraft:iron_ingot',
	  'minecraft:iron_ingot',
	  'minecraft:redstone',
	  'minecraft:redstone',
	  'minecraft:redstone',
	  'minecraft:coal',
	  'projecte:low_covalence_dust'

	]
       )

	event.shapeless(
	Item.of('projecte:high_covalence_dust', 30),
	[
	  'projecte:philosophers_stone',
	  'minecraft:diamond',
	  'minecraft:diamond',
	  'minecraft:diamond',
	  'minecraft:glowstone_dust',
	  'minecraft:glowstone_dust',
	  'minecraft:glowstone_dust',
	  'minecraft:coal',
	  'projecte:medium_covalence_dust'
	]
       )

})
