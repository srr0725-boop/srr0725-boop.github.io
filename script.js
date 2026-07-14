const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;

const fruits = ["🍎","🍊","🍋","🍇","🍉","🍓"];

let fruit = {
    x: 200,
    y: 40,
    size: 40,
    speed: 2,
    emoji: "🍎"
};

function randomFruit(){
    return fruits[Math.floor(Math.random()*fruits.length)];
}

function startGame(){
    score = 0;
    document.getElementById("score").innerHTML = "Score : 0";

    fruit.x = 200;
    fruit.y = 40;
    fruit.emoji = randomFruit();

    requestAnimationFrame(gameLoop);
}

canvas.addEventListener("click",function(e){

    const rect = canvas.getBoundingClientRect();

    fruit.x = e.clientX - rect.left;

});

function drawFruit(){

    ctx.font = fruit.size + "px Arial";
    ctx.fillText(fruit.emoji,fruit.x,fruit.y);

}

function update(){

    fruit.y += fruit.speed;

    if(fruit.y > canvas.height-30){

        score++;

        document.getElementById("score").innerHTML="Score : "+score;

        fruit.y = 40;
        fruit.x = Math.random()*340+20;
        fruit.emoji = randomFruit();

    }

}

function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawFruit();

    update();

    requestAnimationFrame(gameLoop);

}
