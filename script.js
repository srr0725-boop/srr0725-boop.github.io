const menu = document.querySelector(".menu");
const game = document.getElementById("game");
const board = document.getElementById("board");
const dice = document.getElementById("dice");
const turn = document.getElementById("turn");

let currentPlayer = 0;
const players = [
    "👑 Raja",
    "🟢 Mantri",
    "🟡 Chor",
    "🔵 Sipahi"
];

function startGame(){
    menu.classList.add("hidden");
    game.classList.remove("hidden");
    createBoard();
    turn.innerHTML = players[currentPlayer] + " Turn";
}

function createBoard(){

    board.innerHTML="";

    for(let i=0;i<225;i++){

        const cell=document.createElement("div");
        cell.className="cell";

        if(i<36) cell.classList.add("red");
        else if(i<72) cell.classList.add("green");
        else if(i<108) cell.classList.add("yellow");
        else if(i<144) cell.classList.add("blue");

        if(i===112){
            cell.className="cell center";
            cell.innerHTML="🏆";
        }

        board.appendChild(cell);

    }

}

function rollDice(){

    let value=Math.floor(Math.random()*6)+1;

    dice.innerHTML=value;

    currentPlayer++;

    if(currentPlayer>3)
        currentPlayer=0;

    turn.innerHTML=players[currentPlayer]+" Turn";

}
