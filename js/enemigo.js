class Enemigo {
  constructor(isCarruaje) {
    this.node = document.createElement("img");
    if (isCarruaje === 1) {
      //con este condicional consigo tener al carruaje y gente en la misma clase.
      this.h = 90;
      this.node.src = "./images/cochecaballos.png";
    } else {
      this.h = 70;
      this.node.src = "./images/gente.png";
    }
    gameBoxeNode.append(this.node);

    // Propiedades de posición y dimensiones del enemigo
    this.x = gameBoxeNode.offsetWidth + 150;
    this.y = Math.random() * (gameBoxeNode.offsetHeight - 100);
    this.w = 100;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;

    // Creo dos variables para la ultima posicion de cada enemigo
    this.lastX = 0;
    this.lastY = 0;

    this.lastX = this.x;
    this.lastY = this.y;

    this.node.style.left = `${this.x}px`;
  }

  automaticMovement = () => {
    this.x -= 6;
    this.updatePosition();
  };

  updatePosition = () => {
    this.node.style.left = `${this.x}px`;
  };
}
