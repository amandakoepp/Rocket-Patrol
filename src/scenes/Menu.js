//creating a Menu scene 
class Menu extends  Phaser.Scene {
    constructor(){
        super("menuScene")
    }

    create() {
        //menu text
        this.add.text(20, 20, "Rocket Patrol Menu")

        //degub: move to next scene
        this.scene.start("playScene")
    }
}