package com.smithing.immersive_smithing;

import java.util.EnumMap;
import java.util.Map;

import org.slf4j.Logger;
import com.mojang.logging.LogUtils;

// Minecraft Imports
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.AxeItem;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.PickaxeItem;
import net.minecraft.world.item.Tier;
import net.minecraft.world.item.Tiers;

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

//Deffered Register for Items and Creative Tabs
public static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MODID);
public static final DeferredRegister<CreativeModeTab> CREATIVE_MODE_TABS = DeferredRegister.create(Registries.CREATIVE_MODE_TAB, MODID);

//Register Items
public enum ToolMaterial {
  WOOD("wood", Tiers.WOOD),
  STONE("stone", Tiers.STONE),
  COPPER("copper", Tiers.STONE),
  IRON("iron", Tiers.IRON),
  GOLD("gold", Tiers.GOLD),
  DIAMOND("diamond", Tiers.DIAMOND),
  NETHERITE("netherite", Tiers.NETHERITE);

  private final String name;
  private final Tier tier;

  ToolMaterial(String name, Tier tier) {
    this.name = name;
    this.tier = tier;
  }
  public String getName() { return name; }
  public Tier getTier() { return tier; }

}

//Map to store registerd items dynamically
public static final Map <ToolMaterial, DeferredItem<Item>> SMITHING_TEMPLATES = new EnumMap<>(ToolMaterial.class);
public static final Map<ToolMaterial, DeferredItem<Item>> PICKAXE_HEADS = new EnumMap<>(ToolMaterial.class);
public static final Map<ToolMaterial, DeferredItem<Item>> PICKAXE = new EnumMap<>(ToolMaterial.class);
public static final Map<ToolMaterial, DeferredItem<Item>> AXE_HEADS = new EnumMap<>(ToolMaterial.class);
public static final Map<ToolMaterial, DeferredItem<Item>> AXE = new EnumMap<>(ToolMaterial.class);

static {
  //Register items using a loop
  for (ToolMaterial mat : ToolMaterial.values()) {
      SMITHING_TEMPLATES.put(mat, ITEMS.registerSimpleItem(mat.getName() + "_smithing_template", new Item.Properties()));
  //
      PICKAXE_HEADS.put(mat, ITEMS.registerSimpleItem(mat.getName() + "_pickaxe_head", new Item.Properties()));
      PICKAXE.put(mat, ITEMS.register(mat.getName() + "_pickaxe", () -> new PickaxeItem(mat.getTier(), new Item.Properties().attributes(PickaxeItem.createAttributes(mat.getTier(), 1.0F, -2.8F)))));
  //
      AXE_HEADS.put(mat, ITEMS.registerSimpleItem(mat.getName() + "_axe_head", new Item.Properties()));
      AXE.put(mat, ITEMS.register(mat.getName() + "_axe", () -> new AxeItem(mat.getTier(), new Item.Properties().attributes(AxeItem.createAttributes(mat.getTier(), 6.0F, -3.1F)))));
   }
 }
 public ImmersiveSmithing(IEventBus modEventBus, ModContainer modContainer) {
  ITEMS.register(modEventBus);
  CREATIVE_MODE_TABS.register(modEventBus);
 }

public static final DeferredHolder<CreativeModeTab, CreativeModeTab> EXAMPLE_TAB = CREATIVE_MODE_TABS.register("example_tab", () -> CreativeModeTab.builder()
  .title(Component.translatable("itemGroup." + MODID + ".example"))
  .icon(() -> new ItemStack(SMITHING_TEMPLATES.get(ToolMaterial.WOOD).get()))
  .displayItems((params, output) -> {
  	SMITHING_TEMPLATES.values().forEach(item -> output.accept(item.get()));
	PICKAXE_HEADS.values().forEach(item -> output.accept(item.get()));
	PICKAXE.values().forEach(item -> output.accept(item.get())); 
	AXE_HEADS.values().forEach(item -> output.accept(item.get()));
	AXE.values().forEach(item -> output.accept(item.get()));
  })
  .build()
 );

}
