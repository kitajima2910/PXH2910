// board
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

// dooler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = boardHeight * 7 / 8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
    img: null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}

// vật lý
let velocityX = 0;
let velocityY = 0; // doodler nhảy
let initialVelocityY = -8; // khởi đầu
let gravity = 0.4;

// nền
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;

// chức năng
let score = 0;
let maxScore = 0;
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); // sử dụng để vẽ trên board


    // Vẽ doodler
    // context.fillStyle = "green";
    // context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

    // Tải ảnh doodler
    doodlerRightImg = new Image();
    doodlerRightImg.src = "img/doodler-right.png";
    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function () {
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "img/doodler-left.png";

    // Tải nền
    platformImg = new Image();
    platformImg.src = "img/platform.png";

    velocityY = initialVelocityY;
    placePlatforms();
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler);
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    // doodler
    doodler.x += velocityX;
    if (doodler.x > boardWidth) {
        doodler.x = 0;
    } else if (doodler.x + doodler.width < 0) {
        doodler.x = boardWidth;
    }

    velocityY += gravity;
    doodler.y += velocityY;
    if (doodler.y > board.height) {
        gameOver = true;
    }
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);

    // nền
    for (let platform of platformArray) {
        if (velocityY < 0 && doodler.y < boardHeight * 3 / 4) {
            platform.y -= initialVelocityY; // cắt nền phía dưới
        }
        if (detectCollision(doodler, platform) && velocityY >= 0) {
            velocityY = initialVelocityY; // nhảy
        }
        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
    }

    // xoá nền cũ và thêm nền mớ vào
    while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
        platformArray.shift();
        newPlatform();
    }

    // score
    updateScore();
    context.fillStyle = "black";
    context.font = "16px sans-serif";
    context.fillText(`Điểm: ${score}`, 5, 20);

    if (gameOver) {
        context.fillText("KẾT THÚC: Nhấn 'Space' Để Chơi Lại", boardWidth / 7, boardHeight * 7 / 8);
    }
}

function moveDoodler(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") { // di chuyển qua phải
        velocityX = 4;
        doodler.img = doodlerRightImg;
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") { // di chuyển qua trái
        velocityX = -4;
        doodler.img = doodlerLeftImg;
    } else if (e.code == "Space") {
        // khởi tạo lại
        doodler = {
            img: doodlerRightImg,
            x: doodlerX,
            y: doodlerY,
            width: doodlerWidth,
            height: doodlerHeight
        }

        velocityX = 0;
        velocityY = initialVelocityY;
        score = 0;
        maxScore = 0;
        gameOver = false;
        placePlatforms();
    }
}

function placePlatforms() {
    platformArray = [];

    // platform = {
    //     img: platformImg,
    //     x: boardWidth/2,
    //     y: boardHeight - 150,
    //     width: platformWidth,
    //     height: platformHeight
    // };

    // platformArray.push(platform);

    for (let i = 0; i < 6; i++) {
        let randomX = Math.floor(Math.random() * boardWidth * 3 / 4);
        let platform = {
            img: platformImg,
            x: randomX,
            y: boardHeight - 95 * i - 150,
            width: platformWidth,
            height: platformHeight
        };

        platformArray.push(platform);
    }
}

function newPlatform() {
    let randomX = Math.floor(Math.random() * boardWidth * 3 / 4);
    let platform = {
        img: platformImg,
        x: randomX,
        y: -platformHeight,
        width: platformWidth,
        height: platformHeight
    };

    platformArray.push(platform);
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}

function updateScore() {
    let points = Math.floor(50 * Math.random());
    if (velocityY < 0) {
        maxScore += points;
        if (score < maxScore) {
            score = maxScore;
        }
    } else if (velocityY >= 0) {
        maxScore -= points;
    }
}