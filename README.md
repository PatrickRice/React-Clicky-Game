# React-Clicky-Game

The React-Clicky-Game App is a SPA (Single Page Application) memory game App where the user must try to click on all 12 unique cards only once...with the cards shuffling randomly after each click.

Aplication Flow:

This App uses React (and an accompanying JSON file that serves as the API as this is a front-end only application) to render 12 cards featuring characters from "The Simpsons" television program to the screen.  All State data is maintained at the Application-level and passed to child components via props.

Each time the user clicks on a card, the scoreboard at the top of the page will either update their score incrementally if they click on a card that they have not yet clicked on, or the game will be reset and the user's score set to zero if they click on a card that they have already clicked on once.

Additionally, the scoreboard is updated appropriately and all cards are re-rendered to the DOM in random order using the Fisher-Yates shuffle algorithm after each card click event.

The user's High Score (with a maximum game score of 12) is also maintained in State and displayed on the scoreboard.

Technoligies Utilized:
- React, Javascript (JSX), CSS, HTML

Deployed App Link: https://patrickrice.github.io/React-Clicky-Game/
