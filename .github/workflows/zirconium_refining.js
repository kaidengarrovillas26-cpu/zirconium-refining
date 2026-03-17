window.addEventListener("load", function() {
  
  elements.zirconium_sand = {
    color: "#e6f3ff",
    behavior: behaviors.POWDER,
    category: "land",
    tempHigh: 2200,
    stateHigh: "molten_zirconium_sand",
    density: 4600,
    conduct: 0.1,
    reactions: {
      "sodium_hydroxide": {
        elem1: "sodium_zirconate",
        elem2: "sodium_silicate",
        chance: 0.01
      },
      
      "water": {
        elem1: "wet_zirconium_sand",
        elem2: null,
        chance: 0.1
      }
    }
  };
  
  elements.sodium_zirconate = {
    color: "#d4d6d9",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1500,
    stateHigh: ["zirconium_oxide", "sodium_oxide"],
    density: 4740,
    conduct: 0.01,
    reactions: {
      "water": {
        elem1: "zirconyl_hydroxide",
        elem2: null,
        chance: 0.05
      }
    }
  };
  
  elements.zirconyl_hydroxide = {
    color: "#f8f9f9",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 800,
    stateHigh: ["zirconium_oxide", "steam"],
    density: 3250
    conduct: 0.58
    reactions: {
      "hydrochloric_acid": {
        elem1: "zirconium_oxychloride",
        elem2: "water",
        chance: 0.01,
      },
      
      "sulfuric_acid": {
        elem1: "zirconium_sulfate",
        elem2: "water",
        chance: 0.01,
      },
      
      "nitric_acid": {
        elem1: "zirconium_nitrate",
        elem2: "water",
        chance: 0.01
      }
    }
  };
  
  elements.zirconium_oxychloride = {
    color: "#f9f9f5",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 900,
    stateHigh: ["zirconium_oxide", "hydrochloric_acid_gas", "steam"],
    density: 1910,
    conduct: 0.23
  };
  
  elements.zirconium_sulfate = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 900,
    stateHigh: ["zirconium_oxide", "sulfur_trioxide", "steam"],
    density: 3220
    conduct: 0
  };
  
  elements.zirconium_nitrate = {
    color: "#f2f4f4",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 900
    stateHigh: ["zirconium_oxide", "nitrogen_dioxide", "steam"],
    density: 2210,
    conduct: 0
  };
  
  elements.molten_zirconium_sand = {
    color: "#ff8e55",
    behavior: behaviors.LIQUID,
    category: "states",
    tempLow: 2199,
    stateLow: ["zirconium_oxide", "silica"],
    density: 4600,
    viscosity: 40
    conduct: 0.07
  };
  
  elements.sodium_silicate = {
    color: "#f2f2f2",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1088
    stateHigh: "molten_sodium_silicate_glass"
    density: 2610
    conduct: 0
  };
  
  elements.wet_zirconium_sand = {
    color: "#cbbd93",
    behavior: behaviors.SUPPORT,
    category: "land",
    tempHigh: 100,
    stateHigh: ["zirconium_sand", "zirconium_sand", "steam"],
    density: 3100,
    conduct: 0.23
  };
  
  elements.sodium_oxide = {
    color: "#e0e0e0",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1132,
    stateHigh: ["sodium_gas", "oxygen"],
    density: 2270,
    conduct: 0
  };
  
  elements.sulfur_trioxide = {
    color: "#f0f8ff40",
    behavior: behaviors.LIQUID,
    category: "liquids",
    tempHigh: 45,
    stateHigh: "sulfur_trioxide_gas",
    density: 1920,
    viscosity: 1,
    conduct: 0,
    reactions: {
      "water": {
        elem1: "sulfuric_acid",
        elem2: null,
        chance: 0.05
      }
    }
  };
  
  elements.sulfur_trioxide_gas = {
    color: "#f0f8ff20",
    behavior: behaviors.GAS,
    category: "gases",
    tempHigh: 1000,
    stateHigh: ["sulfur_dioxide", "sulfur_dioxide", "oxygen"],
    tempLow: 44,
    stateLow: "sulfur_trioxide",
    density: 3.37,
    conduct: 0
  };
  
  elements.sulfur_dioxide = {
    color: "#e6e6e640",
    behavior: behaviors.GAS,
    category: "gases",
    tempLow: -10,
    stateLow: "liquid_sulfur_dioxide",
    density: 2.64,
    conduct: 0,
    reactions: {
      "water": {
        elem1: "sulfuric_acid",
        elem2: null,
        chance: 0.1,
      },
      
      "oxygen": {
        elem1: "sulfur_trioxide_gas",
        elem2: null,
        chance: 0.01,
        tempMin: 400
      }
    }
  };
  
  elements.zirconium_oxide = {
    color: "#b8bbc",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 2715,
    stateHigh: "molten_zirconia",
    density: 5680,
    conduct: 0,
    reactions: {
      "chlorine": {
        elem1: "zirconium_tetrachloride",
        elem2: "carbon_dioxide",
        tempMin: 1000,
        chance: 0.01,
      },
    }
  };
  
  elements.zirconium_tetrachloride = {
    color: "#e8e8e8",
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 331,
    stateHigh: "zirconium_tetrachloride_gas",
    density: 2800,
    conduct: 0,
    reactions: {
      "water": { 
        elem1: "zirconium_oxychloride", 
        elem2: "hydrochloric_acid", 
        chance: 0.2,
        tempMin: 20
      }
    }
  };
  
  elements.molten_zirconia = {
    color: "#ff6347",
    behavior: behaviors.LIQUID,
    category: "states",
    tempLow: 2714,
    stateLow: "zirconium_oxide",
    density: 5800,
    viscosity: 40
    conduct: 0.05
  };
  
  elements.silica = {
    color: "#f5f5dc",
    behavior: behaviors.POWDER,
    category: "land",
    tempHigh: 1713,
    stateHigh: "molten_silica",
    density: 2650,
    conduct: 0,
    reactions: {
      "sodium_oxide": {
        elem1: "sodium_silicate",
        elem2: null,
        tempMin: 800,
        chance: 0.1
      }
    }
  };
  
  elements.molten_silica = {
    color: "#ff9900",
    behavior: behaviors.LIQUID,
    category: "states",
    tempLow: 1712,
    stateLow: "glass",
    density: 2200,
    viscosity: 100,
    conduct: 0.001
  };
  
  elements.zirconium_tetrachloride_gas = {
    color: "#e8e8e840",
    behavior: behaviors.GAS,
    category: "gases",
    tempLow: 330,
    stateLow: "zirconium_tetrachloride",
    density: 8.1,
    conduct: 0,
    reactions: {
      "molten_magnesium": {
        elem1: "dirty_zirconium_sponge",
        elem2: "magnesium_chloride",
        tempMin: 800,
        chance: 0.01
      }
    }
  };
  
  elements.dirty_zirconium_sponge = {
    color: "#636363",
    behavior: behaviors.SUPPORT,
    category: "solids",
    tempHigh: 1000,
    stateHigh: ["purified_zirconium_sponge", "molten_magnesium", "molten_magnesium_chloride"],
    density: 5900,
    conduct: 0.4
  };
  
  elements.purified_zirconium_sponge = {
    color: "#cbd0d3",
    behavior: behaviors.SUPPORT,
    category: "solids",
    tempHigh: 1855,
    stateHigh: "molten_zirconium",
    density: 6520,
    conduct: 0.75
  };
  
  elements.molten_zirconium = {
    color: blendColors("#d8d8d8", "#e8c0c0"),
    behavior: behaviors.LIQUID,
    category: "states",
    tempLow: 1854,
    stateLow: "zirconium",
    density: 6200,
    viscosity: 5,
    conuct: 0.24
  };
  
  elements.zirconium = {
    color: "#cfcfcf",
    behavior: behaviors.WALL,
    category: "solids",
    tempHigh: 1855,
    stateHigh: "molten_zirconium",
    density: 6800,
    conuct: 0.23,
    reactions: {
      "water": {
        elem1: "zirconium_oxide",
        elem2: "hydrogen",
        chance: 0.01
      }
    }
  };
});
