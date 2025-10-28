      // PokéAPI utility functions
      class PokeAPI {
        static BASE_URL = "https://pokeapi.co/api/v2/";
        
        // Fetch Pokemon data by name or ID
        static async getPokemon(nameOrId) {
          try {
            const response = await fetch(`${this.BASE_URL}pokemon/${nameOrId}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
          } catch (error) {
            console.error("Error fetching Pokemon data:", error);
            throw error;
          }
        }
        
        // Get Pokemon species data (for descriptions, evolution chain, etc.)
        static async getPokemonSpecies(nameOrId) {
          try {
            const response = await fetch(`${this.BASE_URL}pokemon-species/${nameOrId}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
          } catch (error) {
            console.error("Error fetching Pokemon species data:", error);
            throw error;
          }
        }
        
        // Extract useful Pokemon information
        static extractPokemonInfo(pokemonData) {
          return {
            id: pokemonData.id,
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            baseExperience: pokemonData.base_experience,
            types: pokemonData.types.map(type => type.type.name),
            abilities: pokemonData.abilities.map(ability => ({
              name: ability.ability.name,
              isHidden: ability.is_hidden
            })),
            stats: pokemonData.stats.map(stat => ({
              name: stat.stat.name,
              baseStat: stat.base_stat
            })),
            sprite: pokemonData.sprites.front_default,
            officialArtwork: pokemonData.sprites.other['official-artwork'].front_default
          };
        }
      }

      // Load dev logs
      fetch("devLog.json")
        .then((response) => response.json())
        .then((data) => {
          // Set main title from JSON
          document.getElementById("main-title").textContent =
            data.mainContent.mainTitle || "Dev Logs";
          const logsContainer = document.getElementById("dev-logs");
          logsContainer.innerHTML = "";
          data.mainContent.logEntries.forEach((entry) => {
            const article = document.createElement("article");
            const title = document.createElement("h3");
            title.textContent = entry.entryTitle;
            article.appendChild(title);
            const meta = document.createElement("small");
            meta.textContent = `#${entry.entryNumber} | ${entry.date} | ${entry.author}`;
            article.appendChild(meta);
            entry.content.forEach((paragraph) => {
              const p = document.createElement("p");
              p.textContent = paragraph;
              article.appendChild(p);
            });
            logsContainer.appendChild(article);
          });
        })
        .catch((error) => {
          document.getElementById("dev-logs").innerHTML =
            "<p>Could not load dev logs.</p>";
          console.error("Error loading devLog.json:", error);
        });

      // Example: Load and display Pikachu data
      async function displayPikachuData() {
        try {
          // You can either fetch from local file or directly from API
          const response = await fetch("Pikachu.json");
          const pikachuData = await response.json();
          
          // Or fetch directly from API:
          // const pikachuData = await PokeAPI.getPokemon("pikachu");
          
          const pokemonInfo = PokeAPI.extractPokemonInfo(pikachuData);
          console.log("Pikachu data:", pokemonInfo);
          
          // You can add this data to your page if needed
          // Example: create a Pokemon display section
          
        } catch (error) {
          console.error("Error displaying Pikachu data:", error);
        }
      }

      // Uncomment the line below to display Pikachu data on page load
      // displayPikachuData();