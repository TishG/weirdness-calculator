# Weirdness Calculator

Weirdness Calculator is a front end application used to generate GIFS based on a search term and weirdness scale. Users can like GIFs and they will be added to a collection. When you have a collection of 5 GIFS, a weirdness score will be calculated based on your GIFs collection.

Technologies used: React, Redux, Giphy API\
Installed Packages: redux, react-redux, redux-thunk, axios, bootstrap, ionicons, react-router-dom

### Features

1. Enter a search term on an input field to receive matching GIFs
2. Allow users to like a GIF to their favorites
3. Only allow one liked GIF per search term
4. Prompt users to submit new search terms when they are done liking a favorite on a particular search term
5. Allow users to unlike a GIF
6. When users click the “Calculate…” button, they can see their collection of GIFs
7. Pseudocode implemented for weirdness calculation in

```javascript
src / components / views / ScoreView / ScoreView.js;
```

### How to View

1. git clone https://github.com/TishG/weirdness-calculator.git
2. cd weirdness-calculator
3. npm install
4. npm start
