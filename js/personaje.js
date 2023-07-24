class Personaje{
    constructor(){
        
    
        
        this.node = document.createElement("img");
        this.node.src = "./images/personaje.png";
        gameBoxeNode.append(this.node)
    
    
    
        //aquí propiedades personaje
        this.x = 50;
        this.y = 170;
        this.w = 45;
        this.h = 50;
    
        // this.gravitySpeed = 2;
        // this.jumpSpeed= 40;
    
        //ajustar tamaño y posicion inicial del perspnaje
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        
        // const gameBoxRect = gameBoxeNode.getBoundingClientRect();
        // this.gameBoxTop = gameBoxRect.top;
        // this.gameBoxBottom = gameBoxRect.bottom - this.h; // Restar la altura del personaje
    
    
    
    }

    updatePosition() {
        // Evitar que el personaje se salga por arriba
    // if (this.y < this.gameBoxTop) {
    //     this.y = this.gameBoxTop;
    //   }
  
    //   // Evitar que el personaje se salga por abajo
    //   if (this.y > this.gameBoxBottom) {
    //     this.y = this.gameBoxBottom;
    //   }
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

}