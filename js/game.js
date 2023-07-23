

class Game{

    constructor(){
        this.personaje = new Personaje()

    }

    //métodos de mi juego

    gameLoop =() => {
        
        this.personaje.updatePosition();


        requestAnimationFrame(this.gameLoop)
    }
}