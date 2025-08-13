# Dev Log Website

## What This Website Is

This is a personal development log website that displays blog-style entries about a developer's journey in technology. The website loads content dynamically from a JSON file, making it easy to add new entries without modifying the HTML structure.

## Tech Stack

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, layout (Flexbox), and responsive design
- **JavaScript (ES6)**: Dynamic content loading using Fetch API
- **JSON**: Data storage for blog entries
- **VS Code**: Recommended development environment
- **Live Server Extension**: For local development

## Project Structure

```
DevLog/
├── myRoadMap.html    # Main HTML file Name this whatever you like
├── styles.css        # All CSS styling
├── scripts.js        # JavaScript for dynamic content
├── devLog.json       # Blog entries data
├── assets/
│   └── ProfilePic.jpg
└── README.md
```

## How to View the Website

1. Open the project folder in VS Code
2. Install the Live Server extension if not already installed
3. Right-click on `myRoadMap.html` and select "Open with Live Server"
4. The website will open in your default browser

## How to Add a New Dev Log Entry

### Step 1: Locate the JSON File

1. Open the `devLog.json` file in your editor
2. Find the section called `"logEntries"` - this is an array containing all blog posts

### Step 2: Understand the Structure

Each entry in the `logEntries` array has this structure:

```json
{
  "entryTitle": "Your Blog Post Title",
  "date": "YYYY-MM-DD",
  "entryNumber": 4,
  "author": "Jonathan Ramirez",
  "content": [
    "First paragraph of your blog post.",
    "Second paragraph of your blog post.",
    "Each string in this array becomes a separate paragraph."
  ]
}
```

### Step 3: Add Your New Entry

1. Scroll to the bottom of the `logEntries` array
2. After the last entry's closing brace `}`, add a comma `,`
3. Add your new entry following the structure above

**Example of adding a new entry:**

```json
{
  "entryTitle": "Learning CSS Grid",
  "date": "2025-08-13",
  "entryNumber": 4,
  "author": "Jonathan Ramirez",
  "content": [
    "Today I started learning CSS Grid layout system.",
    "It's more powerful than Flexbox for two-dimensional layouts.",
    "I built a simple photo gallery to practice the concepts."
  ]
}
```

### Step 4: Important Rules

- **Entry Number**: Increment the `entryNumber` by 1 from the previous entry
- **Date Format**: Use YYYY-MM-DD format (e.g., "2025-08-13")
- **Content Array**: Each paragraph should be a separate string in quotes
- **Commas**: Don't forget the comma after each entry except the last one
- **Valid JSON**: Use a JSON validator if unsure about syntax

### Step 5: Complete Example

Here's how your `logEntries` section should look after adding a new entry:

```json
"logEntries": [
  {
    "entryTitle": "Welcome to My Development Log",
    "date": "2025-08-07",
    "entryNumber": 1,
    "author": "Jonathan Ramirez",
    "content": [
      "Hey all! I am Jonathan Ramirez, and I am excited to share my journey into and through technology."
    ]
  },
  {
    "entryTitle": "Learning CSS Grid",
    "date": "2025-08-13",
    "entryNumber": 4,
    "author": "Jonathan Ramirez",
    "content": [
      "Today I started learning CSS Grid layout system.",
      "It's more powerful than Flexbox for two-dimensional layouts."
    ]
  }
]
```

### Step 6: Test Your Changes

1. Save the `devLog.json` file
2. Refresh your browser
3. Your new entry should appear on the website automatically

## Troubleshooting

### Entry Not Showing Up

- Check that your JSON syntax is valid (no missing commas, quotes, or brackets)
- Verify the browser console for JavaScript errors (F12 > Console tab)
- Make sure you saved the JSON file

### JSON Syntax Errors

- Each string must be in double quotes, not single quotes
- Don't add a comma after the last entry in the array
- Ensure all brackets and braces are properly closed

### Browser Cache Issues

- Try hard refresh (Ctrl + F5 on Windows)
- Clear browser cache if entries still don't update

## Customization

### Changing the Main Title

Edit the `mainTitle` field in the `mainContent` section of `devLog.json`

### Modifying Author Name

Change the `author` field in any entry, or update your name in the hero section of `myRoadMap.html`

### Styling Changes

Edit `styles.css` to modify colors, fonts, layout, or responsive behavior

## File Descriptions

- **myRoadMap.html**: Contains the page structure and navigation
- **styles.css**: All visual styling including layout, colors, and responsive design
- **scripts.js**: JavaScript code that fetches and displays JSON data
- **devLog.json**: Database of all blog entries in JSON format
