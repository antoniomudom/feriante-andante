class Personaje{
    constructor(){
        
    
        
        this.node = document.createElement("img");
        this.node.src = "./images/personaje.png";
        gameBoxeNode.append(this.node)
    
    
    
        //aquí propiedades personaje
        this.x = 50;
        this.y = 170;
        this.w = 60;
        this.h = 50;
    
        // this.gravitySpeed = 2;
        // this.jumpSpeed= 40;
    
        //ajustar tamaño y posicion inicial del perspnaje
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    
    
    
    }

    updatePosition() {
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

}