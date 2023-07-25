class Croqueta {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/croqueta.png";
    gameBoxeNode.append(this.node);

    //propiedades de posicion y dimensiones del carruaje
    this.x = gameBoxeNode.offsetWidth + 150;
    this.y = Math.floor(Math.random() * 450);
    this.w = 30;
    this.h = 30;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.isCaught = false;
  }

  automaticMovement = () => {
    this.x -= 2;
    this.updatePosition();
  };

  updatePosition = () => {
    this.node.style.left = `${this.x}px`;
  };
  follow(x, y) {
    if (this.isCaught) {
      const dx = x - this.x;
      const dy = y - this.y;

      // Mueve la croqueta en función de la diferencia calculada
        this.x += dx;
        this.y += dy;
      this.node.style.top = `${y}px`;
      this.node.style.left = `${x+20}px`;

      // Actualiza la posición en el DOM
      //   this.updatePosition();
    }
  }
}
