class Game {
  constructor() {
    this.personaje = new Personaje();
    this.enemigoArr = [];
    this.escudoArr = [];

    this.gotEscudo = false;

    this.frames = 0;
    this.isGameOn = true;
    this.musicGame = new Audio("audio/sevillana.mp3");
    this.musicGame.volume = 0.05;
  }

  gameOver = () => {
    this.isGameOn = false;
    gameBoxeNode.innerHTML = "";
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
    timerScreenNode.style.display = "none";
    this.musicGame.pause();
  };
  gameWin = () => {
    this.isGameOn = false;
    gameBoxeNode.innerHTML = "";
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "none";
    timerScreenNode.style.display = "none";
    winScreenNode.style.display = "flex";
    this.musicGame.pause();
  };

  collisionEscudoPersonaje = () => {
    this.escudoArr.forEach((eachEscudo, escudoIndex) => {
      if (
        this.personaje.x < eachEscudo.x + eachEscudo.w &&
        this.personaje.x + this.personaje.w > eachEscudo.x &&
        this.personaje.y < eachEscudo.y + eachEscudo.h &&
        this.personaje.y + this.personaje.h > eachEscudo.y
      ) {
        eachEscudo.isCaught = true;
        // ESTABLECE isCaught EN true SI HAY COLISIÓN
        this.gotEscudo = true;
      }
    });
  };

  collisionPersonajeEnemigo = () => {
    this.enemigoArr.forEach((eachEnemigo) => {
      if (
        this.personaje.x < eachEnemigo.x + eachEnemigo.w &&
        this.personaje.x + this.personaje.w > eachEnemigo.x &&
        this.personaje.y < eachEnemigo.y + eachEnemigo.h &&
        this.personaje.y + this.personaje.h > eachEnemigo.y
      ) {
        if (this.gotEscudo === true) {
          this.gotEscudo = false; //booleanos para colisión con o sin escudo del personaje
        } else {
          this.gameOver();
        }
      }
    });
  };

  collisionEscudoEnemigo = () => {
    this.escudoArr.forEach((eachEscudo, escudoIndex) => {
      this.enemigoArr.forEach((eachEnemigo, enemigoIndex) => {
        console.log(eachEnemigo.node.currentSrc);
        if (
          eachEscudo.x < eachEnemigo.x + eachEnemigo.w &&
          eachEscudo.x + eachEscudo.w > eachEnemigo.x &&
          eachEscudo.y < eachEnemigo.y + eachEnemigo.h &&
          eachEscudo.y + eachEscudo.h > eachEnemigo.y
        ) {
          // Si hay colisión entre escudo y enemigo , elimina los dos. Soluciona problema superposicion
          eachEnemigo.node.remove(); // Elimina el nodo del DOM
          this.enemigoArr.splice(enemigoIndex, 1); // Elimina el enemigo del array

          eachEscudo.node.remove();
          this.escudoArr.splice(escudoIndex, 1); //elimina escudo del array
        }
      });
    });
  };

  enemigoSpawning = () => {
    if (this.enemigoArr.length === 0 || this.frames % 30 === 0) {
      // Crear un randomNum entre 1 y 2:^
      // Si 1 ----> Enemigo(true)
      // Si 2 ----> Enemigo(false)
      const randomNum = Math.floor(Math.random() * 2) + 1;
      this.enemigoArr.push(new Enemigo(randomNum));//al crear o uno u otro, evita la superposicion de enemigos
    }
  };
  enemigoDisappear = () => {
    if (this.enemigoArr[0].x < -100) {
      this.enemigoArr[0].node.remove();
      this.enemigoArr.shift();
    }
  };

  escudoDisappear = () => {
    if (this.escudoArr[0].x < -60) {
      this.escudoArr[0].node.remove();
      this.escudoArr.shift();
    }
  };

  escudoSpawning = () => {
    if (this.escudoArr.length === 0 || this.frames % 600 === 0) {
      this.escudoArr.push(new Escudo(true));
      this.escudoArr.push(new Escudo(false)); //con el booleano consigo que aparezca o un tipo de escudo o el otro
    }
  };

  //métodos de mi juego

  gameLoop = () => {
    this.frames++;

    this.personaje.updatePosition();
    this.enemigoSpawning();
    this.enemigoArr.forEach((eachEnemigo) => {
      eachEnemigo.automaticMovement();
    });
    this.escudoSpawning();
    this.escudoArr.forEach((eachEscudo) => {
      eachEscudo.automaticMovement();
    });

    this.enemigoDisappear();
    this.collisionPersonajeEnemigo();
    this.collisionEscudoPersonaje();
    this.collisionEscudoEnemigo();

    this.escudoArr.forEach((eachEscudo) => {
      eachEscudo.follow(this.personaje.x, this.personaje.y); //sigue los movimientos del personaje
      // LLAMA AL MÉTODO follow si tiene escudo
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
