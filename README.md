# FERIANTE ANDANTE

## [Play the Game!](https://antoniomudom.github.io/feriante-andante/)

![Game Logo](./images/portada.png)


# Description

Feriante andante es un juego en el que los personajes han quedado con amigos en la Feria de Sevilla y deben llegar hasta ellos. Por el camino le saldrán "enemigos" como tráfico de coches de caballos o personas que si colisionan con nuestros personajes les entretendrán, no llegarán a tiempo a la quedada con sus amigos y perderán el juego.Para ganar deben aguantar un minuto evitando a los enemigos y para ello pueden "escudarse" recogiendo croquetas y jarras de rebujito por el camino.


# Main Functionalities

- El personaje se mueve hacia arriba y hacia abajo con las flechas del teclado.
- Los enemigos salen desde la parte derecha de la pantalla de forma aleatoria.
- Hay dos enemigos: carruajes y grupo de personas.
- Salen escudos en forma de croqueta y jarras de rebujito.
- Los escudos se quedan anclados al personaje cuando colisionan.
- Si el personaje colisiona con los enemigos muere.
- Si el personaje colisiona con los enemigos llevando un escudo, desaparece el escudo y el enemigo pero el personaje vive.
- La frecuencia de los escudos es mucho menor que la de los enemigos para hacerlo más difícil.
- El contador es de 1 minuto y debe llegar a cero para que el personaje gane.
- Suena una sevilana de fondo.

# Backlog Functionalities

- El personaje dispara a los enemigos sus escudos.
- Distintos niveles de dificultad con diferentes enemigos.
- Más sonidos.

# Technologies used

- HTML
- CSS
- JavaScript
- Manipulación de DOM

# States

- Pantalla de inicio
- Pantalla de juego
- Pantalla Game Over
- Pantalla Win

# Proyect Structure





## main.js

- countdown()
- startGame()
- playAgain()
-

## Game.js

- Game()
  gameOver 
    
  gameWin 
    

  collisionEscudoPersonaje 
    

  collisionPersonajeEnemigo 
    

  collisionEscudoEnemigo 
    

  enemigoSpawning 
    
  enemigoDisappear 
    

  escudoDisappear 
    

  escudoSpawning 
   
  
  gameLoop  
   
   

## Personaje.js 

- Player () {
    this.x = 50;
    this.y = 170;
    this.w = 45;
    this.h = 50;
}
-  updatePosition()


## Enemigo.js 

updatePosition ()
automaticMovement ()
       
 this.h = 90;
this.node.src = "./images/cochecaballos.png";
 else 
 this.h = 70;
this.node.src = "./images/gente.png";

## Escudo.js 
updatePosition ()
automaticMovement ()
this.isCaught
follow()

