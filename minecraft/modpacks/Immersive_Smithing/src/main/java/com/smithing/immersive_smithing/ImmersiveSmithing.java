package com.smithing.immersive_smithing;

import org.slf4j.Logger;

import com.mojang.logging.LogUtils;

// Minecraft Imports
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;

// NeoForge Imports
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.ModContainer;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;

// The value here should match an entry in the META-INF/neoforge.mods.toml file
@Mod(ImmersiveSmithing.MODID)
public class ImmersiveSmithing {
    // Define mod id in a common place for everything to reference
    public static final String MODID = "immersivesmithing";
    // Directly reference a slf4j logger
    public static final Logger LOGGER = LogUtils.getLogger();

    // The constructor for the mod class is the first code that is run when your mod is loaded. 
    // FML will recognize some parameter types like IEventBus or ModContainer and pass them in automatically.
public ImmersiveSmithing(IEventBus modEventBus, ModContainer modContainer) {
	ITEMS.register(modEventBus);
	CREATIVE_MODE_TABS.register(modEventBus);
}

//Deffered Register for Items and Creative Tabs
public static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MODID);
public static final DeferredRegister<CreativeModeTab> CREATIVE_MODE_TABS = DeferredRegister.create(Registries.CREATIVE_MODE_TAB, MODID);

//Register Items
public static final DeferredItem<Item> WOOD_SMITHING_TEMPLATE = ITEMS.registerSimpleItem(
  "wood_smithing_template",
  new Item.Properties()
);

public static final DeferredItem<Item> ANIMATED_BOOK = ITEMS.registerSimpleItem(
  "animated_book",
  new Item.Properties()

);

//Creative Mod Tabs
public static final DeferredHolder<CreativeModeTab, CreativeModeTab> EXAMPLE_TAB = CREATIVE_MODE_TABS.register("example_tab", () -> CreativeModeTab.builder()
  //Set title
  .title(Component.translatable("itemGroup." + MODID + ".example"))
  //Set Icon
  .icon(() -> new ItemStack(WOOD_SMITHING_TEMPLATE.get()))
  //Add items to the creative tab
  .displayItems((params, output) -> {
	output.accept(WOOD_SMITHING_TEMPLATE.get());
	output.accept(ANIMATED_BOOK.get());
  })
  .build()
 );

}
