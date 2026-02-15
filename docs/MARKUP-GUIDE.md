# Dev Log Content Markup Guide

Now that your dev log supports HTML markup, you can format your content for better readability!

## Available Formatting Options

### 1. **Bold Text** (Emphasis)
```json
"<strong>Important:</strong> This text will be bold and dark"
"or use <b>bold tags</b>"
```
**Result:** **Important:** This text will be bold and dark

---

### 2. *Italic Text* (Emphasis)
```json
"<em>Note:</em> This adds subtle emphasis"
"or use <i>italic tags</i>"
```
**Result:** *Note:* This adds subtle emphasis

---

### 3. `Inline Code` (Technical Terms)
```json
"I used the <code>pygame.init()</code> function"
"Variables like <code>dt</code> store delta time"
```
**Result:** I used the `pygame.init()` function

---

### 4. Bullet Lists
```json
"<strong>Files created:</strong><ul><li>test_window.py (throwaway test)</li><li>setting.py (constants)</li><li>main.py (game loop)</li></ul>"
```
**Result:**
**Files created:**
- test_window.py (throwaway test)
- setting.py (constants)
- main.py (game loop)

---

### 5. Numbered Lists
```json
"<strong>Setup steps:</strong><ol><li>Install pygame</li><li>Create project folder</li><li>Initialize git repo</li></ol>"
```
**Result:**
**Setup steps:**
1. Install pygame
2. Create project folder
3. Initialize git repo

---

### 6. Blockquotes (Callouts)
```json
"<blockquote>Key takeaway: Having a session plan kept the work focused.</blockquote>"
```
**Result:**
> Key takeaway: Having a session plan kept the work focused.

---

### 7. Horizontal Dividers
```json
"First section content",
"<hr>",
"Second section content after a visual break"
```
**Result:** Creates a horizontal line separator

---

## Example: Formatted Dev Log Entry

```json
{
  "entryTitle": "Session 1: Foundation Loop and Debug HUD",
  "date": "2026-02-13",
  "entryNumber": 1,
  "author": "Jonathan Ramirez",
  "content": [
    "<strong>Phase 1 kicks off!</strong> This session I created the foundational game loop and a debug HUD for Underworld.",
    
    "<strong>Files created:</strong><ul><li><code>test_window.py</code> — Throwaway pygame test</li><li><code>setting.py</code> — Constants for screen size, FPS, tile size, colors</li><li><code>src/game_state.py</code> — GameState and MovementMode enums</li><li><code>main.py</code> — Real game loop with debug HUD</li></ul>",
    
    "<strong>What works:</strong> Window opens at 640×480 with the title <em>Underworld</em>. Game loop runs at a stable 60 FPS. Debug overlay shows FPS, current GameState, and MovementMode. <code>F3</code> toggles the overlay on/off.",
    
    "<hr>",
    
    "<strong>Python concepts learned:</strong><ul><li><strong>Modules and imports</strong> — Code organization</li><li><strong>ALL_CAPS naming</strong> — Convention for constants</li><li><strong>Enums</strong> — Type-safe state management</li><li><strong>f-strings</strong> — Formatted output with <code>f\"FPS: {value}\"</code></li></ul>",
    
    "<blockquote>Key takeaway: Having a session plan kept the work focused. Asking 'what are my options' before 'write the code' built real understanding.</blockquote>"
  ]
}
```

## Tips for Readable Content

### ✅ Do:
- Use **bold** for section headers and key terms
- Use `code` tags for filenames, function names, and variables
- Use lists for multiple related items
- Use blockquotes for important takeaways or quotes
- Break long paragraphs into shorter ones

### ❌ Don't:
- Overuse formatting (less is more)
- Use HTML heading tags like `<h1>`, `<h2>` (these break the article structure)
- Leave unclosed tags (always close your HTML tags)
- Use inline styles or colors (stick to semantic markup)

## Safe HTML Tags

These tags are safe and styled:
- `<strong>`, `<b>` — Bold
- `<em>`, `<i>` — Italic
- `<code>` — Inline code
- `<ul>`, `<ol>`, `<li>` — Lists
- `<blockquote>` — Callout boxes
- `<hr>` — Horizontal rule
- `<br>` — Line break

Avoid: `<script>`, `<style>`, `<link>`, `<iframe>` (security risk)

## Testing Your Changes

1. Edit your `devLog.json`
2. Save the file
3. Refresh your dev log page
4. Check if formatting appears correctly
5. If something looks wrong, check for:
   - Unclosed tags
   - Typos in tag names
   - Missing quotes in JSON

Happy formatting! 🎨
