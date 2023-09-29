let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    // Tạo lưới cho game board
    for(let i = 0; i < 9; i++) {

        // Tạo thẻ <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").append(tile);
    }

    setInterval(setMole, 1000); // 1 giây chạy lần
    setInterval(setPlant, 2000); // 2 giây chạy lần
}

function getRandomTile() {
    // Math.random --> (0-1) * 9 = (0-9) --> làm tròn xuống (0-8)
    return Math.floor(Math.random() * 9) + "";
}

function setMole() {
    if(gameOver) {
        return;
    }

    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "img/mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver) {
        return;
    }

    if(currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "img/piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if(gameOver) {
        return;
    }

    if(this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = `Điểm: ${score}`; // Cập nhật lại điểm
    } else if (this == currPlantTile) {
        document.getElementById("score").innerText = `GAME OVER: ${score}`;
        gameOver = true;
    }
}