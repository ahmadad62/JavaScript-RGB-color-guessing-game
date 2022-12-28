
### 3: JAVASCRIPT GUESS THE COLOR GAME

![JavaScript RGB color guessing game](./image/JavaScript-RGB-color-guessing-game.png)

This code generates an array of six random RGB colors and assigns them to the background color of six HTML elements with the class "square". It also randomly selects one of the colors and displays it in an HTML element with the id "color-display".

When the user clicks on one of the square elements, the code compares the background color of the clicked element to the selected color. If the colors match, an alert message is displayed and the game is reset. If the colors do not match, the visibility of the clicked element is set to hidden and the user's remaining "life" is decremented by one. If the user's life reaches 0, another alert message is displayed and the game is reset.

The code also includes an event listener for the "load" event on the window object, which displays an alert message when the page finishes loading.