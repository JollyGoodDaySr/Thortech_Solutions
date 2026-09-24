/*
	Project-E Base Balance
*/
ServerEvents.recipes(event => {

//	*Dark Matter*
	
	event.shapeless(
	Item.of('projecte:dark_matter', 1),
	[
	  'projecte:philosophers_stone',
	  '4x minecraft:diamond',
	  'minecraft:iron_ingot',
	  'minecraft:lapis_lazuli',
	  'projecte:alchemical_coal',
	  'minecraft:redstone_dust'
	]
       )

//	*Red Matter*

	event.shapeless(
	Item.of('projecte:red_matter', 1),
	[ 
	  'projecte:philosophers_stone',
	  '4x projecte:dark_matter',
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
	  '7x minecraft:stone',
	  'minecraft:coal'
	]
       )

	event.shapeless(
	Item.of('projecte:medium_covalence_dust', 30),
	[
	  'projecte:philosophers_stone',
	  '3x minecraft:iron_ingot',
	  '3x minecraft:redstone_dust',
	  'minecraft:coal',
	  'projecte:low_covalence_dust'

	]
       )

	event.shapeless(
	Item.of('projecte:high_covalence_dust', 30),
	[
	  'projecte:philosophers_stone',
	  '3x minecraft:diamond',
	  '3x minecraft:glowstone_dust',
	  'minecraft:coal',
	  'projecte:medium_covalence_dust'
	]
       )

})
