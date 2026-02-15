# PokeAPI Project

A collection of demos and utilities for working with the [PokéAPI](https://pokeapi.co/). This project demonstrates various ways to fetch, display, and interact with Pokémon data.

## Files Overview

### Demo Pages

- **`pokemon-demo.html`** - Basic Pokémon data display demo
- **`api-endpoints-demo.html`** - Examples of different API endpoints

### JavaScript Utilities

- **`enhanced-pokeapi.js`** - Enhanced API wrapper with utility functions
- **`advanced-pokemon-features.js`** - Advanced features and data transformations

### Data Files

- **`Pikachu.json`** - Sample Pokémon data for offline testing
- **`PokéAPI-Complete-Reference.md`** - Complete API documentation and reference

## How to Use

### Local Development

1. Open the project folder in VS Code
2. Install the Live Server extension (if not already installed)
3. Right-click on any `.html` file and select "Open with Live Server"
4. The demo will open in your default browser

### Using the API Wrapper

Include the enhanced API script in your HTML:

```html
<script src="enhanced-pokeapi.js"></script>
```

Then use the PokeAPI class:

```javascript
// Fetch a Pokémon by name or ID
const pikachu = await PokeAPI.getPokemon("pikachu");
console.log(pikachu);

// Get species information
const species = await PokeAPI.getPokemonSpecies("pikachu");

// Extract useful info
const info = PokeAPI.extractPokemonInfo(pikachu);
console.log(info.types, info.stats, info.abilities);
```

## API Features

The wrapper provides methods for:

- Fetching Pokémon data by name or ID
- Getting species information
- Extracting and formatting useful data
- Error handling with proper HTTP status checks

## Resources

- [PokéAPI Official Documentation](https://pokeapi.co/docs/v2)
- Complete reference: `PokéAPI-Complete-Reference.md`

## Sample Data

The `Pikachu.json` file contains a complete API response for offline development and testing. You can fetch from this local file or directly from the API:

```javascript
// From local file
const response = await fetch("Pikachu.json");
const data = await response.json();

// From API
const data = await PokeAPI.getPokemon("pikachu");
```

## Tech Stack

- Vanilla JavaScript (ES6+)
- Fetch API
- Async/Await
- PokéAPI v2

## Author

**Jonathan Ramirez**  
Tech Fellow - Cycle 58
