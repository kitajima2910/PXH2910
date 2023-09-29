// Cái bảng
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// Con chim
let birdWidth = 34; // width/height ratio = 408/288 =  17/12 (scale 34/24)
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

// Cái ống
let pipeArray = [];
let pipeWidth = 64; // width/height ratio = 384/3072 =  1/8 (scale 64/512)
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

// Vật lý
let velocityX = -2; // di chuyển các ống qua trái
let velocityY = 0; // con chim nhảy lên xuống
let gravity = 0.4; // mô tả trọng lực

// Chức năng
let gameOver = false;
let score = 0;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // Sử dụng vẽ trên canvas

    // Vẽ mô tả con chim
    // context.fillStyle = "green";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);

    // Tải ảnh con chim vào
    birdImg = new Image();
    birdImg.src = "img/flappy-bird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    // Tải ảnh cái ống phía trên
    topPipeImg = new Image();
    topPipeImg.src = "img/top-pipe.png";

    // Tải ảnh cái ống phía dưới
    bottomPipeImg = new Image();
    bottomPipeImg.src = "img/bottom-pipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); // 1.5 giây
    document.addEventListener("keydown", moveBird);
}

function update() {
    requestAnimationFrame(update);
    if(gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    // Vẽ con chim lại
    velocityY += gravity;
    // bird.y += velocityY;
    bird.y = Math.max(bird.y + velocityY, 0); // chặn con chim bay lên trên đi mất
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if(bird.y > board.height) {
        gameOver = true;
    }

    // Vẽ cái ống
    for(let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5; // cộng 2 cái ống, trên và dưới sẽ ra 1
            pipe.passed = true;
        }

        if(detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    // Xoá cái ống sau khi đi qua board
    while(pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); // xoá cái ống đầu của mảng
    }

    // Vẽ điểm số
    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    if(gameOver) {
        context.fillText("GAME OVER", 5, 90);
    }
}

function placePipes() {
    if(gameOver) {
        return;
    }

    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    let openingSpace = board.height / 4;
    
    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    };

    pipeArray.push(topPipe);

    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    };

    pipeArray.push(bottomPipe);

}

function moveBird(e) {
    if(e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        // nhảy
        velocityY = -6;

        // khởi động lại game
        if(gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width && 
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}