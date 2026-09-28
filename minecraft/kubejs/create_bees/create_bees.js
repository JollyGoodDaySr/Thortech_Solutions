/*
	Create Produtive Beehive Integration
	  Whats Included
		*
	  -Vanilla Beehives

*/

ServerEvents.recipes(event => {

//	*Recipes Removal*
	
	event.remove({output:'minecraft:beehive'})

//	*Philosophers Stone*

	event.shaped(
	Item.of('minecraft:beehive', 1),
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
