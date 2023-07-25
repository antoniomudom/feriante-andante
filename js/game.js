

class Game{

    constructor(){
        this.personaje = new Personaje()
        // this.unCarruaje = new Carruaje()
        this.carruajeArr = [];
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
    


    collisionPersonajeCarruaje = ()=>{


        this.carruajeArr.forEach((eachCarruaje)=>{

            if (
                this.personaje.x < eachCarruaje.x + eachCarruaje.w &&
                this.personaje.x + this.personaje.w > eachCarruaje.x &&
                this.personaje.y < eachCarruaje.y + eachCarruaje.h &&
                this.personaje.y + this.personaje.h > eachCarruaje.y
              ) {
                if(this.gotCroqueta=== true){
                    this.gotCroqueta= false;
                }else{
                this.gameOver();
                }
                  } 
              
        })
    }

    collisionCroquetaCarruaje = () => {
        this.croquetaArr.forEach((eachCroqueta, croquetaIndex) => {
          this.carruajeArr.forEach((eachCarruaje, carruajeIndex) => {
            if (
              eachCroqueta.x < eachCarruaje.x + eachCarruaje.w &&
              eachCroqueta.x + eachCroqueta.w > eachCarruaje.x &&
              eachCroqueta.y < eachCarruaje.y + eachCarruaje.h &&
              eachCroqueta.y + eachCroqueta.h > eachCarruaje.y
            ) {
              // Si hay colisión entre croqueta y carruaje, elimina el carruaje
              eachCarruaje.node.remove(); // Elimina el nodo del DOM
              this.carruajeArr.splice(carruajeIndex, 1); // Elimina el carruaje del array

              eachCroqueta.node.remove();
              this.croquetaArr.splice(croquetaIndex, 1); 
            }
          });
        });
      };

    carruajeDisappear = ()=>{
        if(this.carruajeArr[0].x < -100){
            this.carruajeArr[0].node.remove();
            this.carruajeArr.shift();  
        }
    }

    carruajeSpawning = ()=> {

        if(this.carruajeArr.length === 0 || this.frames % 120 ===0){

            // let randomNumber = Math.floor(Math. random()* 550)


            let nuevoCarruaje= new Carruaje()
            this.carruajeArr.push(nuevoCarruaje)
        }

    }

    croquetaDisappear = ()=>{
        if(this.croquetaArr[0].x < -60){
            this.croquetaArr[0].node.remove()
            this.croquetaArr.shift()
            
        }

    }

    croquetaSpawning = ()=> {

        if(this.croquetaArr.length === 0 || this.frames % 50 ===0){

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

        this.carruajeSpawning();
        this.carruajeArr.forEach((eachCarruaje)=> {
            eachCarruaje.automaticMovement();
        })
        this.croquetaSpawning();
        this.croquetaArr.forEach((eachCroqueta)=> {
            eachCroqueta.automaticMovement();
        })

        this.carruajeDisappear();
        this.collisionPersonajeCarruaje();
        this.collisionCroquetaCarruaje();
        

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