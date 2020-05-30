export default class Character extends Phaser.GameObjects.Image{

    name:string;
    /*x:number = 0;
    y:number = 0;*/
    
    maxHP:number;
    currHP:number;
    defence:number;

    strength:number;
    intellect:number;
    agility:number;
    speed:number; // Is this ganna be needed???

    team:number;
    refString:string;
    
    DMG_RED_PER_LVL:number = .025;

    healthBar; // Make healthbar class


    // List of buffs(functions)
    // List of debuffs(functions) EX: DOT
    // List of abilities

    constructor(scene:Phaser.Scene, name:string, texture:string, team:number){
        super(scene, 0, 0, texture);
        this.name = name;
        this.maxHP = 5;
        this.currHP = this.maxHP;
        this.strength = 1;
        this.intellect = 1;
        this.agility = 1;
        this.speed = 0;

        this.refString = texture;
        this.team = team;
    }

    /**
     * Deal damage to character, applying defence reduction. Optionally can receive a parameter reducing the characters defence by some amount
     * @param dmg The amount of incoming damage
     * @param reducedDEF The amount to reduce the opponents defence(Optional parameter, if not given, its assumed to be 0)
     */
    takeDMG(dmg:number, reducedDEF?:number){
        if(reducedDEF == undefined)
            reducedDEF = 0;

        let tmpDEF:number;
        
        if(reducedDEF < 1){
            // Treat this value as a percentage of DEF lost
            tmpDEF = this.defence * (1 - reducedDEF);
        } else {
            // Treat this value as a flat amount of DEF lost
            //tmpDEF = Math.max(0, this.defence - reducedDEF);
            tmpDEF = this.defence - reducedDEF; // This allows defence to be negative(which is fine)
        }

        // Apply dmg based on tmp defence
        this.currHP = this.currHP - this.applyDEF_DMG(dmg, tmpDEF);
        Math.max(this.currHP, 0); // Don't let HP drop BELOW 0
    }

    /**
     * Helper function that applies defence to reduce incoming damage
     */
    private applyDEF_DMG(dmg:number, def:number):number{
        return dmg * (def * this.DMG_RED_PER_LVL);
    }

    /**
     * 
     * @param point The point to move set the characters position to
     */
    setPoint(point: Phaser.Geom.Point):void{
        this.x = point.x;
        this.y = point.y;
    }
}