class Escudo {

  // static lastEscudoX = 0;//la palabra static me permite compartir la variable con toda la class
    // static lastEscudoY = 0;

  constructor(isCroqueta) {
    this.node = document.createElement("img");
    if(isCroqueta=== true){
    this.node.src = "./images/croqueta.png";
  }else{this.node.src = "./images/rebujito.png"}
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

    // if (this.x - Escudo.lastEscudoX < 150 && this.y - Escudo.lastEscudoY < 60) {
      // this.x += 60; // Ajustar la posición X con un valor arbitrario (se puede modificar tb)
      // this.y = Math.random() * (gameBoxeNode.offsetHeight - 100); // Reasignar una nueva posición Y
    // }//me he dado cuenta que solo con x se pegaban por arriba y abajo y he metido el eje y

    // Escudo.lastEnemyX = this.x;
    // Escudo.lastEnemyY = this.y;

    this.isCaught = false;
  }

  automaticMovement = () => {
    this.x -= 6;
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
