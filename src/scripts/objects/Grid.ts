import Character from './Character';

// This class overlays the movement grid on a scene
export default class Grid{

    static SQUARE_WIDTH:number = 64;
    SQUARE_WIDTH:number = Grid.SQUARE_WIDTH;
    width:number;
    height:number;
    xOffset:number;
    yOffset:number;
    scene:Phaser.Scene;
    numXTiles:number;
    numYTiles:number;

    gridHorz:Phaser.GameObjects.Line[];
    gridVert:Phaser.GameObjects.Line[];

    charGrid:Character[][]|null[][];

    originPoint:Phaser.Geom.Point;

    constructor(scene:Phaser.Scene, width:number, height:number, xOffset:number, yOffset:number){
        this.scene = scene;
        this.width = width;
        this.height = height;
        this.xOffset = xOffset;
        this.yOffset = yOffset;

        this.originPoint = new Phaser.Geom.Point(xOffset + this.SQUARE_WIDTH / 2, yOffset + this.SQUARE_WIDTH / 2);

        this.numXTiles = this.width/this.SQUARE_WIDTH;
        this.numYTiles = this.height/this.SQUARE_WIDTH;

        // Initialize charGrid
        this.charGrid = Array(this.numXTiles);
        for(let i = 0; i < this.numXTiles; i++)
            this.charGrid[i] = Array(this.numYTiles);

        // Instantiate charGrid with null
        for(let i = 0; i < this.numXTiles; i++)
            for(let j = 0; j < this.numYTiles; j++)
                this.charGrid[i][j] = null;
    }

    create_grid(){
        let tmp_y:number, tmp_x:number;

        //let lineLengthWidth = this.width - (this.width % this.SQUARE_WIDTH);
        //let lineLengthHeight = this.height - (this.height % this.SQUARE_WIDTH);

        this.gridHorz = new Array(Math.round(this.height/this.SQUARE_WIDTH)); 
        this.gridVert = new Array(Math.round(this.width/this.SQUARE_WIDTH)); 

        // Horizontal lines
        for(let i = 0; i <= this.numYTiles; i++){
            tmp_y = this.SQUARE_WIDTH * i;
            this.gridHorz[i] = this.scene.add.line(this.xOffset, this.yOffset, 0, tmp_y, this.width, tmp_y, 0x000000, 0.3).setOrigin(0,0);
        }
        // Vertical lines
        for(let i = 0; i <= this.numXTiles; i++){
            tmp_x = this.SQUARE_WIDTH * i;
            this.gridVert[i] = this.scene.add.line(this.xOffset, this.yOffset, tmp_x, 0, tmp_x, this.height, 0x000000, 0.3).setOrigin(0,0);
        }
    }

    /**
     * Returns the distance between 2 points in the number of tiles
     * @param point1 The initial point 
     * @param point2 The final point
     */
    calcDist(point1:Phaser.Geom.Point, point2:Phaser.Geom.Point):number{
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)) / this.SQUARE_WIDTH;
    }

    /**
     * Returns the point on the screen that that corresponds to a x,y grid pair
     * @param x The x-axis tile
     * @param y The y-axis tile
     */
    getTilePoint(x:number,y:number):Phaser.Geom.Point{
        return new Phaser.Geom.Point(this.originPoint.x + (x * this.SQUARE_WIDTH), this.originPoint.y + (y * this.SQUARE_WIDTH));
    }


}