export default class Dice {

    private constructor(){}

    /**
     * Outputs a random number between 1 and 20, like rolling a 20 sided dice
     */
    static D20():number{
        return Math.floor(Math.random() * 20)+1;
    }
}