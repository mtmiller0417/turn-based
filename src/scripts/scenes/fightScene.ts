import Character from '../objects/Character';
import Dice from '../objects/Dice';
import Grid from '../objects/Grid';

export default class FightScene extends Phaser.Scene {

    
    charList: Character[]; // List of all characters involved in the fight
    grid: Grid;
    gridPoint:Phaser.Geom.Point;

    SQUARE_WIDTH:number = 32;

    xOffset:number;
    yOffset:number;
    gridWidth:number;
    gridHeight:number;

    constructor(){ 
        super({ key: 'FightScene' }); 
    }

    init(){
        // Calculate gridWidth/Height to be a multiple of 32(GRID_SQUARE_WIDTH)
        let baseWidth = 1000;
        let baseHeight = 600;
        this.gridWidth = baseWidth + ( this.SQUARE_WIDTH - ( baseWidth % this.SQUARE_WIDTH ) );
        this.gridHeight = baseHeight + ( this.SQUARE_WIDTH - ( baseHeight % this.SQUARE_WIDTH ) );
        
        this.xOffset = this.cameras.main.width / 2 - this.gridWidth / 2;
        this.yOffset = this.cameras.main.height / 2 - ( this.gridHeight * 4 ) / 6;

        this.gridPoint = new Phaser.Geom.Point(this.xOffset + this.SQUARE_WIDTH / 2, this.yOffset + this.SQUARE_WIDTH / 2);
    }

    create(){
        // Initiate charlist
        this.charList = [];

        // Initiate and create grid
        this.grid = new Grid(this,this.gridWidth,this.gridHeight,this.xOffset,this.yOffset);
        this.grid.create_grid();

        //this.add.circle(this.gridPoint.x, this.gridPoint.y, 15, undefined).setStrokeStyle(4, 0xFF0000);

        this.addCharacters();
    }


    update(){
        
    }

    addCharacters(){
        let tmp:Character =  new Character(this,'tmp-name','mage', 0);
        tmp.setPoint(this.grid.getTilePoint(0,0));
        this.add.image(tmp.x, tmp.y, tmp.refString);
        this.charList.push(tmp);
    }


    turn(char: Character){

    }



}