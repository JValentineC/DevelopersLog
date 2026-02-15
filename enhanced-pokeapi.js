// Enhanced PokéAPI Utility - All Available Endpoints and Data Extraction
class EnhancedPokeAPI {
  static BASE_URL = "https://pokeapi.co/api/v2/";

  // ==================== POKEMON ENDPOINTS ====================

  // Basic Pokemon data (what you already have)
  static async getPokemon(nameOrId) {
    return await this.fetchData(`pokemon/${nameOrId}`);
  }

  // Pokemon species data (descriptions, evolution chains, etc.)
  static async getPokemonSpecies(nameOrId) {
    return await this.fetchData(`pokemon-species/${nameOrId}`);
  }

  // Pokemon encounters (where to find them in games)
  static async getPokemonEncounters(nameOrId) {
    return await this.fetchData(`pokemon/${nameOrId}/encounters`);
  }

  // Pokemon forms (different appearances)
  static async getPokemonForm(nameOrId) {
    return await this.fetchData(`pokemon-form/${nameOrId}`);
  }

  // ==================== MOVES ENDPOINTS ====================

  // Individual move data
  static async getMove(nameOrId) {
    return await this.fetchData(`move/${nameOrId}`);
  }

  // Move categories (physical, special, status)
  static async getMoveCategory(nameOrId) {
    return await this.fetchData(`move-category/${nameOrId}`);
  }

  // Move damage classes
  static async getMoveDamageClass(nameOrId) {
    return await this.fetchData(`move-damage-class/${nameOrId}`);
  }

  // Move learn methods (level-up, machine, tutor, etc.)
  static async getMoveLearnMethod(nameOrId) {
    return await this.fetchData(`move-learn-method/${nameOrId}`);
  }

  // Move targets (single pokemon, all opponents, etc.)
  static async getMoveTarget(nameOrId) {
    return await this.fetchData(`move-target/${nameOrId}`);
  }

  // ==================== ABILITIES ENDPOINTS ====================

  // Individual ability data
  static async getAbility(nameOrId) {
    return await this.fetchData(`ability/${nameOrId}`);
  }

  // ==================== TYPES ENDPOINTS ====================

  // Type data (effectiveness, Pokemon with that type)
  static async getType(nameOrId) {
    return await this.fetchData(`type/${nameOrId}`);
  }

  // ==================== STATS ENDPOINTS ====================

  // Individual stat data
  static async getStat(nameOrId) {
    return await this.fetchData(`stat/${nameOrId}`);
  }

  // ==================== GAME VERSION ENDPOINTS ====================

  // Individual game version
  static async getVersion(nameOrId) {
    return await this.fetchData(`version/${nameOrId}`);
  }

  // Version groups (paired games like Red/Blue)
  static async getVersionGroup(nameOrId) {
    return await this.fetchData(`version-group/${nameOrId}`);
  }

  // Game generations
  static async getGeneration(nameOrId) {
    return await this.fetchData(`generation/${nameOrId}`);
  }

  // ==================== EVOLUTION ENDPOINTS ====================

  // Evolution chains
  static async getEvolutionChain(id) {
    return await this.fetchData(`evolution-chain/${id}`);
  }

  // Evolution triggers (level-up, stone, trade, etc.)
  static async getEvolutionTrigger(nameOrId) {
    return await this.fetchData(`evolution-trigger/${nameOrId}`);
  }

  // ==================== ITEM ENDPOINTS ====================

  // Individual items
  static async getItem(nameOrId) {
    return await this.fetchData(`item/${nameOrId}`);
  }

  // Item categories
  static async getItemCategory(nameOrId) {
    return await this.fetchData(`item-category/${nameOrId}`);
  }

  // Item attributes (consumable, holdable, etc.)
  static async getItemAttribute(nameOrId) {
    return await this.fetchData(`item-attribute/${nameOrId}`);
  }

  // Item fling effects
  static async getItemFlingEffect(nameOrId) {
    return await this.fetchData(`item-fling-effect/${nameOrId}`);
  }

  // Item pockets (where items are stored in bag)
  static async getItemPocket(nameOrId) {
    return await this.fetchData(`item-pocket/${nameOrId}`);
  }

  // ==================== LOCATION ENDPOINTS ====================

  // Locations
  static async getLocation(nameOrId) {
    return await this.fetchData(`location/${nameOrId}`);
  }

  // Location areas
  static async getLocationArea(nameOrId) {
    return await this.fetchData(`location-area/${nameOrId}`);
  }

  // Pal Park areas
  static async getPalParkArea(nameOrId) {
    return await this.fetchData(`pal-park-area/${nameOrId}`);
  }

  // Regions
  static async getRegion(nameOrId) {
    return await this.fetchData(`region/${nameOrId}`);
  }

  // ==================== MACHINES ENDPOINTS ====================

  // Machines (TMs/HMs)
  static async getMachine(id) {
    return await this.fetchData(`machine/${id}`);
  }

  // ==================== BERRIES ENDPOINTS ====================

  // Individual berries
  static async getBerry(nameOrId) {
    return await this.fetchData(`berry/${nameOrId}`);
  }

  // Berry firmness
  static async getBerryFirmness(nameOrId) {
    return await this.fetchData(`berry-firmness/${nameOrId}`);
  }

  // Berry flavors
  static async getBerryFlavor(nameOrId) {
    return await this.fetchData(`berry-flavor/${nameOrId}`);
  }

  // ==================== CONTESTS ENDPOINTS ====================

  // Contest types
  static async getContestType(nameOrId) {
    return await this.fetchData(`contest-type/${nameOrId}`);
  }

  // Contest effects
  static async getContestEffect(id) {
    return await this.fetchData(`contest-effect/${id}`);
  }

  // Super contest effects
  static async getSuperContestEffect(id) {
    return await this.fetchData(`super-contest-effect/${id}`);
  }

  // ==================== ENCOUNTERS ENDPOINTS ====================

  // Encounter methods
  static async getEncounterMethod(nameOrId) {
    return await this.fetchData(`encounter-method/${nameOrId}`);
  }

  // Encounter conditions
  static async getEncounterCondition(nameOrId) {
    return await this.fetchData(`encounter-condition/${nameOrId}`);
  }

  // Encounter condition values
  static async getEncounterConditionValue(nameOrId) {
    return await this.fetchData(`encounter-condition-value/${nameOrId}`);
  }

  // ==================== NATURE ENDPOINTS ====================

  // Pokemon natures
  static async getNature(nameOrId) {
    return await this.fetchData(`nature/${nameOrId}`);
  }

  // ==================== CHARACTERISTIC ENDPOINTS ====================

  // Pokemon characteristics
  static async getCharacteristic(id) {
    return await this.fetchData(`characteristic/${id}`);
  }

  // ==================== EGG GROUP ENDPOINTS ====================

  // Egg groups
  static async getEggGroup(nameOrId) {
    return await this.fetchData(`egg-group/${nameOrId}`);
  }

  // ==================== GENDER ENDPOINTS ====================

  // Gender data
  static async getGender(nameOrId) {
    return await this.fetchData(`gender/${nameOrId}`);
  }

  // ==================== GROWTH RATE ENDPOINTS ====================

  // Growth rates (how fast Pokemon level up)
  static async getGrowthRate(nameOrId) {
    return await this.fetchData(`growth-rate/${nameOrId}`);
  }

  // ==================== POKEDEX ENDPOINTS ====================

  // Pokedex data
  static async getPokedex(nameOrId) {
    return await this.fetchData(`pokedex/${nameOrId}`);
  }

  // ==================== LANGUAGE ENDPOINTS ====================

  // Languages
  static async getLanguage(nameOrId) {
    return await this.fetchData(`language/${nameOrId}`);
  }

  // ==================== UTILITY METHODS ====================

  // Generic fetch method
  static async fetchData(endpoint) {
    try {
      const response = await fetch(`${this.BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  // Get all available endpoints with pagination
  static async getResourceList(resource, limit = 20, offset = 0) {
    return await this.fetchData(`${resource}?limit=${limit}&offset=${offset}`);
  }

  // ==================== ENHANCED DATA EXTRACTORS ====================

  // Extract comprehensive Pokemon data
  static extractCompletePokemonData(pokemonData) {
    return {
      // Basic Info
      basicInfo: {
        id: pokemonData.id,
        name: pokemonData.name,
        height: pokemonData.height / 10, // Convert to meters
        weight: pokemonData.weight / 10, // Convert to kg
        baseExperience: pokemonData.base_experience,
        order: pokemonData.order,
        isDefault: pokemonData.is_default,
      },

      // Sprites and Images
      sprites: {
        frontDefault: pokemonData.sprites.front_default,
        frontShiny: pokemonData.sprites.front_shiny,
        frontFemale: pokemonData.sprites.front_female,
        frontShinyFemale: pokemonData.sprites.front_shiny_female,
        backDefault: pokemonData.sprites.back_default,
        backShiny: pokemonData.sprites.back_shiny,
        backFemale: pokemonData.sprites.back_female,
        backShinyFemale: pokemonData.sprites.back_shiny_female,
        officialArtwork:
          pokemonData.sprites.other?.["official-artwork"]?.front_default,
        dreamWorld: pokemonData.sprites.other?.dream_world?.front_default,
        home: pokemonData.sprites.other?.home?.front_default,
        showdown: pokemonData.sprites.other?.showdown?.front_default,
      },

      // Types
      types: pokemonData.types.map((type) => ({
        name: type.type.name,
        slot: type.slot,
        url: type.type.url,
      })),

      // Abilities
      abilities: pokemonData.abilities.map((ability) => ({
        name: ability.ability.name,
        isHidden: ability.is_hidden,
        slot: ability.slot,
        url: ability.ability.url,
      })),

      // Stats
      stats: pokemonData.stats.map((stat) => ({
        name: stat.stat.name,
        baseStat: stat.base_stat,
        effort: stat.effort,
        url: stat.stat.url,
      })),

      // Moves (simplified - full data is very large)
      moveCount: pokemonData.moves.length,
      levelUpMoves: pokemonData.moves.filter((move) =>
        move.version_group_details.some(
          (detail) => detail.move_learn_method.name === "level-up"
        )
      ).length,
      machineMoves: pokemonData.moves.filter((move) =>
        move.version_group_details.some(
          (detail) => detail.move_learn_method.name === "machine"
        )
      ).length,

      // Game Information
      gameIndices: pokemonData.game_indices.map((index) => ({
        gameIndex: index.game_index,
        version: index.version.name,
      })),

      // Forms
      forms: pokemonData.forms.map((form) => ({
        name: form.name,
        url: form.url,
      })),

      // Species URL for additional data
      speciesUrl: pokemonData.species.url,

      // Location encounters URL
      locationAreaEncounters: pokemonData.location_area_encounters,

      // Held Items
      heldItems: pokemonData.held_items.map((item) => ({
        item: item.item.name,
        versionDetails: item.version_details.map((detail) => ({
          rarity: detail.rarity,
          version: detail.version.name,
        })),
      })),

      // Cries (sound files)
      cries: pokemonData.cries || null,

      // Past types (if any)
      pastTypes: pokemonData.past_types || [],
    };
  }

  // Extract move learning data
  static extractMoveData(pokemonData, versionGroup = null) {
    return pokemonData.moves
      .map((moveEntry) => {
        let relevantDetails = moveEntry.version_group_details;

        if (versionGroup) {
          relevantDetails = relevantDetails.filter(
            (detail) => detail.version_group.name === versionGroup
          );
        }

        return {
          moveName: moveEntry.move.name,
          moveUrl: moveEntry.move.url,
          learnMethods: relevantDetails.map((detail) => ({
            method: detail.move_learn_method.name,
            levelLearned: detail.level_learned_at,
            versionGroup: detail.version_group.name,
          })),
        };
      })
      .filter((move) => move.learnMethods.length > 0);
  }

  // Extract type effectiveness data
  static async getTypeEffectiveness(typeName) {
    const typeData = await this.getType(typeName);
    return {
      doubleDamageTo: typeData.damage_relations.double_damage_to.map(
        (t) => t.name
      ),
      halfDamageTo: typeData.damage_relations.half_damage_to.map((t) => t.name),
      noDamageTo: typeData.damage_relations.no_damage_to.map((t) => t.name),
      doubleDamageFrom: typeData.damage_relations.double_damage_from.map(
        (t) => t.name
      ),
      halfDamageFrom: typeData.damage_relations.half_damage_from.map(
        (t) => t.name
      ),
      noDamageFrom: typeData.damage_relations.no_damage_from.map((t) => t.name),
    };
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = EnhancedPokeAPI;
}
