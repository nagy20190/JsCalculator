# Memory Blocks Game 🧠

A fun and interactive memory matching game built with vanilla JavaScript. Test your memory by matching pairs of technology cards with smooth 3D flip animations and audio feedback.

## 🎮 Game Overview

Memory Blocks Game is a classic matching game where players flip cards to find matching pairs. Each pair features a different technology or framework. The game tracks your attempts and rewards successful matches with visual and audio feedback.

## ✨ Features

- **Interactive Card Flipping**: Smooth 3D card flip animations
- **Shuffle System**: Cards are randomly shuffled each game
- **Player Name**: Personalized greeting with optional name input
- **Attempt Tracking**: Displays number of wrong tries
- **Audio Feedback**: 
  - Success sound for correct matches
  - Fail sound for incorrect matches
- **Responsive Design**: Clean and centered layout
- **Accessibility**: Prevents clicking while cards are being checked

## 🕹️ How to Play

1. **Start the Game**: Click the "Start Game" button
2. **Enter Your Name** (optional): A prompt will ask for your name; click Cancel or leave blank for "unknown"
3. **Flip Cards**: Click any card to flip and reveal the technology
4. **Match Pairs**: Click a second card to try to match the first
5. **Correct Match**: 
   - Cards stay flipped and remain visible
   - Success sound plays
6. **Wrong Match**: 
   - Cards flip back over after a brief delay
   - Try counter increases
   - Fail sound plays
7. **Win**: Successfully match all 9 pairs to complete the game

## 🎯 Objective

Find all matching pairs in the fewest attempts possible! The technologies featured are:
- Angular
- CSS
- GitHub
- GulpJS
- HTML
- Jest
- MongoDB
- Python
- React
- Vue.js

## 🏗️ Project Structure

```
MemoryBlocksGame/
├── index.html      # Main HTML file with game markup
├── main.js         # Game logic and mechanics
├── style.css       # Styling and 3D animations
├── audio/          # Sound effects
│   ├── success.mp3 # Success sound
│   └── fail.mp3    # Fail sound
├── imgs/           # Technology logos
│   ├── angular.png
│   ├── css.png
│   ├── github.png
│   ├── gulpjs.png
│   ├── html.png
│   ├── jest.png
│   ├── mongo.png
│   ├── python.jpg
│   ├── react.png
│   └── vuejs.png
└── README.md       # This file
```

## 🚀 Installation & Setup

1. **Clone or download** this repository to your local machine
2. **Open in browser**: Simply double-click `index.html` or open it with your preferred web browser
3. **No dependencies**: This project uses only vanilla JavaScript, HTML, and CSS - no installation required!

## 💻 Technologies Used

- **HTML5**: Semantic structure and audio elements
- **CSS3**: 3D transforms, flexbox layout, animations
- **JavaScript (ES6)**: Game logic, DOM manipulation, array shuffling

## 🎨 Key Game Mechanics

### Card Shuffling
Uses the Fisher-Yates shuffle algorithm to randomize card positions each game.

### 3D Flip Animation
- CSS `transform: rotateY()` for smooth card flipping
- `transform-style: preserve-3d` for 3D perspective
- `backface-visibility: hidden` to hide the back while flipping

### Game Logic Flow
1. Player clicks a card → `flipBlock()` adds `is-flipped` class
2. Two cards flipped → `checkMatchedBlocks()` compares their data attributes
3. Match found → Cards get `has-match` class (stay visible)
4. No match → Cards revert to flipped state after 1 second delay

### Click Prevention
`no-clicking` class disables pointer events while checking matches to prevent multiple clicks during animation.

## 🎵 Audio Files Required

Place these audio files in the `audio/` folder:
- `success.mp3` - Plays when a match is found
- `fail.mp3` - Plays when cards don't match

## 📝 Customization

### Adjust Game Speed
Change the `duration` variable in `main.js` (currently 1000ms):
```javascript
let duration = 1000; // milliseconds before cards flip back
```

### Add More Card Pairs
1. Add new image files to the `imgs/` folder
2. Add new card blocks in `index.html` with the same `data-technology` value for pairs
3. The game automatically adapts to any number of pairs

### Customize Styling
Edit `style.css` to change:
- Colors and backgrounds
- Font sizes and styles
- Animation speeds and effects
- Card dimensions

## 🐛 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited 3D transform support

## 📊 Game Stats

- **Total Pairs**: 9
- **Total Cards**: 18
- **Animation Duration**: 1 second per flip
- **Flip Delay**: 0.5 seconds (CSS transition)

## 🎓 Learning Resources

This project demonstrates:
- **Array Methods**: `Array.from()`, `forEach()`, `filter()`
- **DOM Manipulation**: `querySelector()`, `classList`, `addEventListener()`
- **CSS 3D Transforms**: `rotateY()`, `preserve-3d`, `backface-visibility`
- **Shuffling Algorithm**: Fisher-Yates implementation
- **Game State Management**: Tracking flipped cards and matches

## 🚀 Future Enhancement Ideas

- High score leaderboard with local storage
- Difficulty levels (more/fewer cards)
- Timed mode
- Multiplayer support
- Keyboard navigation
- Touch/mobile optimization
- Statistics tracking
- Theme variations

## 📄 License

This project is open source and available for personal and educational use.

---

**Enjoy playing Memory Blocks Game! 🎮**
