export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    // Load character images (icons)
    this.load.image('dragon','assets/characters/dragon-32.png');
    this.load.image('elf-archer','assets/characters/elf-archer-32.png');
    this.load.image('fairy','assets/characters/fairy-32.png');
    this.load.image('grim-reaper','assets/characters/grim-reaper-32.png');
    this.load.image('knight','assets/characters/knight-32.png');
    this.load.image('mage','assets/characters/mage-32.png');
    this.load.image('medusa','assets/characters/medusa-32.png');
    this.load.image('orc','assets/characters/orc-32.png');
    this.load.image('spider','assets/characters/spider-32.png');
    this.load.image('viking','assets/characters/viking-32.png');
    this.load.image('werewolf','assets/characters/werewolf-32.png');

    // Load sounds
  }

  create() {
    this.scene.start('FightScene');
  }
}
