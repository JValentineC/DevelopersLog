// Advanced Pokemon App Features - Using Additional PokéAPI Data
class AdvancedPokemonFeatures {
  // ==================== POKEMON COMPARISON TOOL ====================
  static async comparePokemon(pokemon1, pokemon2) {
    const [data1, data2] = await Promise.all([
      EnhancedPokeAPI.getPokemon(pokemon1),
      EnhancedPokeAPI.getPokemon(pokemon2),
    ]);

    const comparison = {
      pokemon1: { name: data1.name, id: data1.id },
      pokemon2: { name: data2.name, id: data2.id },
      statComparison: {},
      typeMatchup: await this.analyzeTypeMatchup(data1.types, data2.types),
      abilityComparison: this.compareAbilities(
        data1.abilities,
        data2.abilities
      ),
      movesetOverlap: this.findMovesetOverlap(data1.moves, data2.moves),
    };

    // Compare base stats
    data1.stats.forEach((stat, index) => {
      const statName = stat.stat.name;
      const stat1 = stat.base_stat;
      const stat2 = data2.stats[index].base_stat;

      comparison.statComparison[statName] = {
        pokemon1: stat1,
        pokemon2: stat2,
        difference: stat1 - stat2,
        winner: stat1 > stat2 ? data1.name : stat1 < stat2 ? data2.name : "tie",
      };
    });

    return comparison;
  }

  // ==================== EVOLUTION TREE BUILDER ====================
  static async buildEvolutionTree(pokemonName) {
    try {
      // Get pokemon species to find evolution chain
      const species = await EnhancedPokeAPI.getPokemonSpecies(pokemonName);
      const chainId = species.evolution_chain.url.split("/").slice(-2, -1)[0];
      const evolutionChain = await EnhancedPokeAPI.getEvolutionChain(chainId);

      return this.parseEvolutionChain(evolutionChain.chain);
    } catch (error) {
      console.error("Error building evolution tree:", error);
      return null;
    }
  }

  static parseEvolutionChain(chain) {
    const evolution = {
      name: chain.species.name,
      minLevel: null,
      trigger: null,
      item: null,
      heldItem: null,
      timeOfDay: null,
      location: null,
      evolvedFrom: null,
      evolvesTo: [],
    };

    if (chain.evolution_details && chain.evolution_details[0]) {
      const details = chain.evolution_details[0];
      evolution.minLevel = details.min_level;
      evolution.trigger = details.trigger?.name;
      evolution.item = details.item?.name;
      evolution.heldItem = details.held_item?.name;
      evolution.timeOfDay = details.time_of_day;
      evolution.location = details.location?.name;
    }

    // Recursively parse evolutions
    if (chain.evolves_to && chain.evolves_to.length > 0) {
      evolution.evolvesTo = chain.evolves_to.map((evo) =>
        this.parseEvolutionChain(evo)
      );
    }

    return evolution;
  }

  // ==================== TEAM BUILDER WITH TYPE COVERAGE ====================
  static async analyzeTeamTypeCoverage(pokemonTeam) {
    const teamData = await Promise.all(
      pokemonTeam.map((pokemon) => EnhancedPokeAPI.getPokemon(pokemon))
    );

    const allTypes = [
      "normal",
      "fire",
      "water",
      "electric",
      "grass",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
    ];

    const coverage = {
      offensiveCoverage: {},
      defensiveWeaknesses: {},
      teamTypes: teamData.map((pokemon) => ({
        name: pokemon.name,
        types: pokemon.types.map((t) => t.type.name),
      })),
    };

    // Analyze offensive coverage (what types the team can effectively attack)
    for (const type of allTypes) {
      const typeData = await EnhancedPokeAPI.getType(type);
      const weakTo = typeData.damage_relations.double_damage_from.map(
        (t) => t.name
      );

      coverage.offensiveCoverage[type] = {
        superEffectiveFrom: [],
        teamCanTarget: false,
      };

      // Check if any team member has moves that are super effective against this type
      for (const pokemon of teamData) {
        const pokemonTypes = pokemon.types.map((t) => t.type.name);
        const hasAdvantage = pokemonTypes.some((pType) =>
          weakTo.includes(pType)
        );

        if (hasAdvantage) {
          coverage.offensiveCoverage[type].teamCanTarget = true;
          coverage.offensiveCoverage[type].superEffectiveFrom.push(
            ...pokemonTypes.filter((t) => weakTo.includes(t))
          );
        }
      }
    }

    return coverage;
  }

  // ==================== MOVE RECOMMENDATION ENGINE ====================
  static async recommendMoves(pokemonName, gameVersion = "sword-shield") {
    const pokemon = await EnhancedPokeAPI.getPokemon(pokemonName);
    const moveRecommendations = {
      stab: [], // Same Type Attack Bonus
      coverage: [],
      utility: [],
      signature: [],
    };

    const pokemonTypes = pokemon.types.map((t) => t.type.name);

    // Analyze each move
    for (const moveEntry of pokemon.moves.slice(0, 20)) {
      // Limit for demo
      try {
        const moveData = await EnhancedPokeAPI.getMove(moveEntry.move.name);
        const moveAnalysis = {
          name: moveData.name,
          type: moveData.type.name,
          power: moveData.power,
          accuracy: moveData.accuracy,
          pp: moveData.pp,
          damageClass: moveData.damage_class.name,
          priority: moveData.priority,
          effect:
            moveData.effect_entries.find((e) => e.language.name === "en")
              ?.short_effect || "No description",
        };

        // Categorize moves
        if (pokemonTypes.includes(moveData.type.name) && moveData.power > 0) {
          moveRecommendations.stab.push(moveAnalysis);
        } else if (moveData.power > 80) {
          moveRecommendations.coverage.push(moveAnalysis);
        } else if (moveData.damage_class.name === "status") {
          moveRecommendations.utility.push(moveAnalysis);
        }
      } catch (error) {
        console.log(`Could not analyze move: ${moveEntry.move.name}`);
      }
    }

    return moveRecommendations;
  }

  // ==================== POKEMON HABITAT & LOCATION FINDER ====================
  static async findPokemonLocations(pokemonName) {
    try {
      const encounters = await EnhancedPokeAPI.getPokemonEncounters(
        pokemonName
      );

      const locationData = await Promise.all(
        encounters.slice(0, 10).map(async (encounter) => {
          try {
            const locationArea = await EnhancedPokeAPI.fetchData(
              encounter.location_area.url.replace(
                "https://pokeapi.co/api/v2/",
                ""
              )
            );

            return {
              locationArea: locationArea.name,
              location: locationArea.location.name,
              encounterMethods: encounter.version_details.map((vd) => ({
                version: vd.version.name,
                maxChance: Math.max(
                  ...vd.encounter_details.map((ed) => ed.chance)
                ),
                methods: vd.encounter_details.map((ed) => ed.method.name),
              })),
            };
          } catch (error) {
            return {
              locationArea: encounter.location_area.name,
              error: "Could not fetch details",
            };
          }
        })
      );

      return locationData;
    } catch (error) {
      console.error("Error finding locations:", error);
      return [];
    }
  }

  // ==================== BREEDING COMPATIBILITY CHECKER ====================
  static async checkBreedingCompatibility(pokemon1Name, pokemon2Name) {
    try {
      const [species1, species2] = await Promise.all([
        EnhancedPokeAPI.getPokemonSpecies(pokemon1Name),
        EnhancedPokeAPI.getPokemonSpecies(pokemon2Name),
      ]);

      const eggGroups1 = species1.egg_groups.map((eg) => eg.name);
      const eggGroups2 = species2.egg_groups.map((eg) => eg.name);

      const compatibility = {
        canBreed: false,
        sharedEggGroups: [],
        genderRatio1: species1.gender_rate,
        genderRatio2: species2.gender_rate,
        eggCycles: Math.max(species1.hatch_counter, species2.hatch_counter),
      };

      // Check for shared egg groups (excluding 'no-eggs' group)
      compatibility.sharedEggGroups = eggGroups1.filter(
        (group) => eggGroups2.includes(group) && group !== "no-eggs"
      );

      compatibility.canBreed =
        compatibility.sharedEggGroups.length > 0 ||
        eggGroups1.includes("ditto") ||
        eggGroups2.includes("ditto");

      return compatibility;
    } catch (error) {
      console.error("Error checking breeding compatibility:", error);
      return { canBreed: false, error: error.message };
    }
  }

  // ==================== WEAKNESS CALCULATOR ====================
  static async calculateWeaknesses(pokemonName) {
    const pokemon = await EnhancedPokeAPI.getPokemon(pokemonName);
    const types = pokemon.types.map((t) => t.type.name);

    const effectiveness = {
      weakTo: [], // 2x damage
      resistantTo: [], // 0.5x damage
      immuneTo: [], // 0x damage
      superWeakTo: [], // 4x damage (dual type weakness)
      superResistantTo: [], // 0.25x damage (dual type resistance)
    };

    const damageChart = {};

    // Get type effectiveness for each of the Pokemon's types
    for (const type of types) {
      const typeData = await EnhancedPokeAPI.getType(type);

      // Initialize multipliers
      typeData.damage_relations.double_damage_from.forEach((t) => {
        damageChart[t.name] = (damageChart[t.name] || 1) * 2;
      });

      typeData.damage_relations.half_damage_from.forEach((t) => {
        damageChart[t.name] = (damageChart[t.name] || 1) * 0.5;
      });

      typeData.damage_relations.no_damage_from.forEach((t) => {
        damageChart[t.name] = 0;
      });
    }

    // Categorize effectiveness
    Object.entries(damageChart).forEach(([type, multiplier]) => {
      if (multiplier === 4) effectiveness.superWeakTo.push(type);
      else if (multiplier === 2) effectiveness.weakTo.push(type);
      else if (multiplier === 0.5) effectiveness.resistantTo.push(type);
      else if (multiplier === 0.25) effectiveness.superResistantTo.push(type);
      else if (multiplier === 0) effectiveness.immuneTo.push(type);
    });

    return effectiveness;
  }

  // ==================== HELPER METHODS ====================

  static async analyzeTypeMatchup(types1, types2) {
    // Simplified type matchup analysis
    const type1Names = types1.map((t) => t.type.name);
    const type2Names = types2.map((t) => t.type.name);

    return {
      pokemon1Types: type1Names,
      pokemon2Types: type2Names,
      // You could expand this to calculate actual effectiveness
    };
  }

  static compareAbilities(abilities1, abilities2) {
    const names1 = abilities1.map((a) => a.ability.name);
    const names2 = abilities2.map((a) => a.ability.name);

    return {
      shared: names1.filter((name) => names2.includes(name)),
      unique1: names1.filter((name) => !names2.includes(name)),
      unique2: names2.filter((name) => !names1.includes(name)),
    };
  }

  static findMovesetOverlap(moves1, moves2) {
    const moveNames1 = moves1.map((m) => m.move.name);
    const moveNames2 = moves2.map((m) => m.move.name);

    return moveNames1.filter((name) => moveNames2.includes(name)).length;
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = AdvancedPokemonFeatures;
}
