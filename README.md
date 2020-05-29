# educational-phaser-game-template

Template for designing educational Phaser Games

# Important Files

These files are for coding your game:

* [src/scripts/game.ts](src/scripts/game.ts): The starting file of your game.

These files are for documenting your game:
 
* [egdd.md](egdd.md): The educational game design document describing this game in more depth.

These [package.json](package.json) settings are for configuring the metadata of your game and should be updated:

* `name`: This must be a lower-case version of your repository name on GitHub, without spaces.
* `description`: Give a quick, one sentence summary of your game.
* `game`:
    * `url`: Change this to be the EXACT name of your repository on GitHub.
    * `shortName`: Choose a short name for your game for [Progressive Web App](https://medium.com/@amberleyjohanna/seriously-though-what-is-a-progressive-web-app-56130600a093) packaging.
    * `name`: Choose a longer, complete name for your game.
* `repository`:
    * `url`: Change this URL to be a link to your GitHub repository.
* `homepage`: Change this URL to be a link to the final version of your game's EGDD.
* `contributors`: This should be an array (list) of strings, where each string is like `"Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"`.

You should edit the following images to create icons for your game, if it gets installed as a [Progressive Web App](https://medium.com/@amberleyjohanna/seriously-though-what-is-a-progressive-web-app-56130600a093):

* [src/assets/icons/icons-192.png](src/assets/icons/icons-192.png): This is a 192x192 pixel version of your game's icon.
* [src/assets/icons/icons-512.png](src/assets/icons/icons-512.png): This is a 512x512 pixel version of your game's icon.
* [src/assets/icons/favicon.ico](src/assets/icons/favicon.ico): The [Favicon](https://en.wikipedia.org/wiki/Favicon) for your game.
