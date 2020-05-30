export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    // Load character images (icons)
    this.load.image('dragon','assets/characters/dragon.png');
    this.load.image('elf-archer','assets/characters/elf-archer.png');
    this.load.image('fairy','assets/characters/fairy.png');
    this.load.image('grim-reaper','assets/characters/grim-reaper.png');
    this.load.image('knight','assets/characters/knight.png');
    this.load.image('mage','assets/characters/mage.png');
    this.load.image('medusa','assets/characters/medusa.png');
    this.load.image('orc','assets/characters/orc.png');
    this.load.image('spider','assets/characters/spider.png');
    this.load.image('viking','assets/characters/viking.png');
    this.load.image('werewolf','assets/characters/werewolf.png');

    // Load sounds
  }

  create() {
    this.scene.start('FightScene');
  }
}
