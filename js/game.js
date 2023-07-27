

class Game{

    constructor(){
        this.personaje = new Personaje()
        // this.unCarruaje = new Carruaje()
        this.enemigoArr = [];
        this.escudoArr = [];

        this.gotEscudo= false;

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
    


    collisionPersonajeEnemigo = ()=>{
      // let overlap =20;


        this.enemigoArr.forEach((eachEnemigo)=>{

            if (
                this.personaje.x  < eachEnemigo.x + eachEnemigo.w &&
                this.personaje.x + this.personaje.w > eachEnemigo.x &&
                this.personaje.y < eachEnemigo.y + eachEnemigo.h &&
                this.personaje.y + this.personaje.h > eachEnemigo.y
              ) {
                if(this.gotEscudo=== true){
                    this.gotEscudo= false;
                }else{
                this.gameOver();
                }
                  } 
              
        })
    }

    // Funcion para que no salgan sobrepuestos en pantalla:
    collisionEscudoEnemigo = () => {
        this.escudoArr.forEach((eachEscudo, escudoIndex) => {
          this.enemigoArr.forEach((eachEnemigo, enemigoIndex) => {
            console.log(eachEnemigo.node.currentSrc)
            if (
              eachEscudo.x < eachEnemigo.x + eachEnemigo.w &&
              eachEscudo.x + eachEscudo.w > eachEnemigo.x &&
              eachEscudo.y < eachEnemigo.y + eachEnemigo.h &&
              eachEscudo.y + eachEscudo.h > eachEnemigo.y
            ) {
              // Si hay colisión entre croqueta y carruaje, elimina el carruaje
              eachEnemigo.node.remove(); // Elimina el nodo del DOM
              this.enemigoArr.splice(enemigoIndex, 1); // Elimina el carruaje del array

              eachEscudo.node.remove();
              this.escudoArr.splice(escudoIndex, 1); 
            }
          });
        });
      };
      

    

    enemigoSpawning = () => {
        if (this.enemigoArr.length === 0 || this.frames % 30 === 0) {
          
          // Crear un randomNum entre 1 y 2:^
          // Si 1 ----> Enemigo(true)
          // Si 2 ----> Enemigo(false)
          const randomNum= Math.floor(Math.random()*2)+1
          console.log(randomNum)
          this.enemigoArr.push(new Enemigo(randomNum));
          
    
          // Crear un enemigo tipo persona y añadirlo al array
          // this.enemigoArr.push(new Enemigo(false));
        }
      };
      enemigoDisappear = ()=>{
        if(this.enemigoArr[0].x < -100){
            this.enemigoArr[0].node.remove();
            this.enemigoArr.shift();  
        }
    }
    

    escudoDisappear = ()=>{
        if(this.escudoArr[0].x < -60){
            this.escudoArr[0].node.remove()
            this.escudoArr.shift()
            
        }

    }

    escudoSpawning = ()=> {

        if(this.escudoArr.length === 0 || this.frames % 600 ===0){

            this.escudoArr.push(new Escudo(true));
            this.escudoArr.push(new Escudo(false));


            // let nuevoEscudo= new Escudo()
            // this.escudoArr.push(nuevoEscudo)
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
        this.escudoSpawning();
        this.escudoArr.forEach((eachEscudo)=> {
            eachEscudo.automaticMovement();
        })
       


        this.enemigoDisappear();
        this.collisionPersonajeEnemigo();
        this.collisionEscudoPersonaje();
        this.collisionEscudoEnemigo();
        

        this.escudoArr.forEach((eachEscudo) => {
         eachEscudo.follow(this.personaje.x, this.personaje.y);
         // LLAMA AL MÉTODO follow SI el ESCUDO ESTÁ ATRAPADO
        });
        
        if(this.isGameOn === true){
        requestAnimationFrame(this.gameLoop)
    }

    }
}