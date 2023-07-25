class Gente{
     
    constructor(){

        this.node= document.createElement("img");
        this.node.src = "./images/gente.png";
        gameBoxeNode.append(this.node)

        //propiedades de posicion y dimensiones del carruaje
        this.x = gameBoxeNode.offsetWidth + 150;
        this.y = Math.floor(Math. random()* 450);
        this.w = 100;
        this.h = 90;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;


    }

    automaticMovement =() => {

        this.x -=2;
        this.updatePosition();
    }

    updatePosition = () =>{
        this.node.style.left = `${this.x}px`;

    }


}