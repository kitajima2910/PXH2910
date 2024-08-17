
var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;

var currTile;
var otherTile;


window.onload = function() {
    startGame();

    window.setInterval(function(){
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);
}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]; //0 - 5.99
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // <img id="0-0" src="img/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "img/" + randomCandy() + ".png";

            // Chức năng kéo thả
            tile.addEventListener("dragstart", dragStart); // Bấm vào một viên kẹo, khởi tạo quá trình kéo
            tile.addEventListener("dragover", dragOver);  // Bấm vào kẹo, di chuyển chuột để kéo kẹo
            tile.addEventListener("dragenter", dragEnter); // Kéo kẹo lên kẹo khác
            tile.addEventListener("dragleave", dragLeave); // Để kẹo chồng lên viên kẹo khác
            tile.addEventListener("drop", dragDrop); // Thả một viên kẹo lên một viên kẹo khác
            tile.addEventListener("dragend", dragEnd); // Sau khi quá trình kéo hoàn tất, chúng ta trao đổi kẹo

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
}

function dragStart() {
    // Candy được nhấp vào để kéo
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    // Candy mục tiêu đã được thả vào
    otherTile = this;
}

function dragEnd() {

    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    let currCoords = currTile.id.split("-"); // id="0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        let validMove = checkValid();
        if (!validMove) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;
            currTile.src = otherImg;
            otherTile.src = currImg;    
        }
    }
}

function crushCandy() {
    // crushFive();
    // crushFour();
    crushThree();
    document.getElementById("score").innerText = score;

}

function crushThree() {
    // Kiểm tra dòng
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "img/blank.png";
                candy2.src = "img/blank.png";
                candy3.src = "img/blank.png";
                score += 30;
            }
        }
    }

    // Kiểm tra cột
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "img/blank.png";
                candy2.src = "img/blank.png";
                candy3.src = "img/blank.png";
                score += 30;
            }
        }
    }
}

function checkValid() {
    // Kiểm tra dòng
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }

    // Kiểm tra cột
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }

    return false;
}


function slideCandy() {
    for (let c = 0; c < columns; c++) {
        let ind = rows - 1;
        for (let r = columns-1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;
            }
        }

        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "img/blank.png";
        }
    }
}

function generateCandy() {
    for (let c = 0; c < columns;  c++) {
        if (board[0][c].src.includes("blank")) {
            board[0][c].src = "img/" + randomCandy() + ".png";
        }
    }
}