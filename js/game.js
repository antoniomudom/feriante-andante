

class Game{

    constructor(){
        this.personaje = new Personaje()
        // this.unCarruaje = new Carruaje()
        this.enemigoArr = [];
        this.croquetaArr = [];

        this.gotCroqueta= false;

        this.frames = 0;
        this.isGameOn = true;

    }

    gameOver = ()=>{
        this.isGameOn = false;
        gameBoxeNode.innerHTML = "";
        gameScreenNode.style.display ="none";
        gameoverScreenNode.style.display ="flex";
        timerScreenNode.style.display = "none";

    }
    gameWin =()=>{
        this.isGameOn = false;
        gameBoxeNode.innerHTML = "";
        gameScreenNode.style.display ="none";
        gameoverScreenNode.style.display ="none";
        timerScreenNode.style.display = "none";
        winScreenNode.style.display = "flex";


    }

    collisionCroquetaPersonaje = () => {
        this.croquetaArr.forEach((eachCroqueta, croquetaIndex) => {
          if (
            this.personaje.x < eachCroqueta.x + eachCroqueta.w &&
            this.personaje.x + this.personaje.w > eachCroqueta.x &&
            this.personaje.y < eachCroqueta.y + eachCroqueta.h &&
            this.personaje.y + this.personaje.h > eachCroqueta.y
          ) {
            eachCroqueta.isCaught = true;
             // ESTABLECE isCaught EN true SI HAY COLISIÓN
             this.gotCroqueta = true;
          }
        });
      };
    


    collisionPersonajeEnemigo = ()=>{


        this.enemigoArr.forEach((eachEnemigo)=>{

            if (
                this.personaje.x < eachEnemigo.x + eachEnemigo.w &&
                this.personaje.x + this.personaje.w > eachEnemigo.x &&
                this.personaje.y < eachEnemigo.y + eachEnemigo.h &&
                this.personaje.y + this.personaje.h > eachEnemigo.y
              ) {
                if(this.gotCroqueta=== true){
                    this.gotCroqueta= false;
                }else{
                this.gameOver();
                }
                  } 
              
        })
    }

    collisionCroquetaEnemigo = () => {
        this.croquetaArr.forEach((eachCroqueta, croquetaIndex) => {
          this.enemigoArr.forEach((eachEnemigo, enemigoIndex) => {
            if (
              eachCroqueta.x < eachEnemigo.x + eachEnemigo.w &&
              eachCroqueta.x + eachCroqueta.w > eachEnemigo.x &&
              eachCroqueta.y < eachEnemigo.y + eachEnemigo.h &&
              eachCroqueta.y + eachCroqueta.h > eachEnemigo.y
            ) {
              // Si hay colisión entre croqueta y carruaje, elimina el carruaje
              eachEnemigo.node.remove(); // Elimina el nodo del DOM
              this.enemigoArr.splice(enemigoIndex, 1); // Elimina el carruaje del array

              eachCroqueta.node.remove();
              this.croquetaArr.splice(croquetaIndex, 1); 
            }
          });
        });
      };
      

    enemigoDisappear = ()=>{
        if(this.enemigoArr[0].x < -100){
            this.enemigoArr[0].node.remove();
            this.enemigoArr.shift();  
        }
    }

    enemigoSpawning = () => {
        if (this.enemigoArr.length === 0 || this.frames % 120 === 0) {
          // Crear un enemigo tipo carruaje y añadirlo al array
          this.enemigoArr.push(new Enemigo(true));
    
          // Crear un enemigo tipo persona y añadirlo al array
          this.enemigoArr.push(new Enemigo(false));
        }
      };
    

    croquetaDisappear = ()=>{
        if(this.croquetaArr[0].x < -60){
            this.croquetaArr[0].node.remove()
            this.croquetaArr.shift()
            
        }

    }

    croquetaSpawning = ()=> {

        if(this.croquetaArr.length === 0 || this.frames % 600 ===0){

            // let randomNumber = Math.floor(Math. random()* 550)


            let nuevaCroqueta= new Croqueta()
            this.croquetaArr.push(nuevaCroqueta)
        }
    }
    

    //métodos de mi juego

    gameLoop =() => {

        this.frames++;
        
        
        this.personaje.updatePosition();

        // this.unCarruaje.automaticMovement();

        this.enemigoSpawning();
        this.enemigoArr.forEach((eachEnemigo)=> {
            eachEnemigo.automaticMovement();
        })
        this.croquetaSpawning();
        this.croquetaArr.forEach((eachCroqueta)=> {
            eachCroqueta.automaticMovement();
        })
       


        this.enemigoDisappear();
        this.collisionPersonajeEnemigo();
        
        this.collisionCroquetaEnemigo();
        

        this.croquetaArr.forEach((eachCroqueta) => {
         eachCroqueta.follow(this.personaje.x, this.personaje.y);
         // LLAMA AL MÉTODO follow SI LA CROQUETA ESTÁ ATRAPADA
        });
        this.collisionCroquetaPersonaje();
        if(this.isGameOn === true){
        requestAnimationFrame(this.gameLoop)
    }

    }
}