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

})
