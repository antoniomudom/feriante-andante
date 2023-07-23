//GLOBAL VARIABLES
const startButtonNode = document.querySelector("#start-btn");
const splashScreenNode=document.querySelector("#splash-screen");
const gameScreenNode =document.querySelector("#game-screen");
const gameBoxeNode= document.querySelector("#game-box");
let gameObj;

//STATE MANAGEMENT FUNCTIONS

function startGame() {
    splashScreenNode.style.display= "none";
    gameScreenNode.style.display="flex";

     gameObj = new Game();
    gameObj.gameLoop()


}


//ADD EVENT LISTENER
startButtonNode.addEventListener("click", startGame)

window.addEventListener("keydown", (event)=>{
    //todos los eventos nos dan como parametro
    //informacion del evento que esta ocurriendo
    

    if(event.key === "ArrowUp"){
        gameObj.personaje.y -=20;
    }else if (event.key ==="ArrowDown"){
        gameObj.personaje.y += 20;
    }
})