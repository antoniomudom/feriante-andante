class Personaje {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/personaje.png";
    gameBoxeNode.append(this.node);

    //aquí propiedades personaje
    this.x = 50;
    this.y = 170;
    this.w = 45;
    this.h = 50;

    //ajustar tamaño y posicion inicial del perspnaje
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  updatePosition() {
    // Evita que el personaje se salga por arriba
    if (this.y < 0) {
      this.y = 0;
    }

    // Evita que el personaje se salga por abajo
    const maxGameBoxHeight = 550;
    if (this.y > maxGameBoxHeight - this.h) {
      this.y = maxGameBoxHeight - this.h;
    }

    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
}
