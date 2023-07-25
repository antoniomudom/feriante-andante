class Enemigo {
    // Variables estáticas para almacenar la posición (X, Y) del último enemigo creado
    static lastEnemyX = 0;//la palabra static me permite compartir la variable con toda la class
    static lastEnemyY = 0;
  
    constructor(isCarruaje) {
      this.node = document.createElement("img");
      if (isCarruaje === true) {
        this.node.src = "./images/cochecaballos.png";
      } else {
        this.node.src = "./images/gente.png";
      }
      gameBoxeNode.append(this.node);
  
      // Propiedades de posición y dimensiones del enemigo
      this.x = gameBoxeNode.offsetWidth + 150;
      this.y = Math.random() * (gameBoxeNode.offsetHeight - 100);
      this.w = 100;
      this.h = 90;
  
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.top = `${this.y}px`;
  
      // Verificar y ajustar la posición si está demasiado cerca del último enemigo creado. 150 está perfe, lo he comprobado
      if (this.x - Enemigo.lastEnemyX < 150 && this.y - Enemigo.lastEnemyY < 150) {
        this.x += 150; // Ajustar la posición X con un valor arbitrario (se puede modificar tb)
        this.y = Math.random() * (gameBoxeNode.offsetHeight - 100); // Reasignar una nueva posición Y
      }//me he dado cuenta que solo con x se pegaban por arriba y abajo y he metido el eje y
  
      Enemigo.lastEnemyX = this.x;
      Enemigo.lastEnemyY = this.y;
  
      this.node.style.left = `${this.x}px`;
    }
  
    automaticMovement = () => {
      this.x -= 2;
      this.updatePosition();
    };
  
    updatePosition = () => {
      this.node.style.left = `${this.x}px`;
    };
  }
  