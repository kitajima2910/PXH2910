class Game {

    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.radio = this.height / this.baseHeight;
        this.background = new Background(this);
        this.player = new Player(this);
        this.sound = new AudioControl();
        this.obstacles = [];
        this.numberOfObstacles = 2000;
        this.gravity;
        this.speed;
        this.minSpeed;
        this.maxSpeed;
        this.score;
        this.gameOver;
        this.timer;
        this.message1;
        this.message2;
        this.smallFont;
        this.largeFont;
        this.eventTimer = 0;
        this.eventInterval = 150;
        this.eventUpdate = false;
        this.touchStartX;
        this.swipeDistance = 50;
        this.bottomMargin;

        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener("resize", e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        });

        // mouse controls
        this.canvas.addEventListener("mousedown", e => {
            this.player.flap();
        });
        this.canvas.addEventListener("mouseup", e => {
            this.player.wingsUp();
        });

        // keyboard controls
        window.addEventListener("keydown", e => {
            if (e.key === " " || e.key === "Enter") this.player.flap();
            if (e.key === "Shift" || e.key.toLowerCase() === "c") {
                if (this.player.energy >= 2) {
                    this.player.startCharge();
                }
            }
        });
        window.addEventListener("keyup", e => {
            this.player.wingsUp();
        });

        // touch controls
        this.canvas.addEventListener("touchstart", e => {
            this.player.flap();
            this.touchStartX = e.changedTouches[0].pageX;
        }, { passive: true });

        this.canvas.addEventListener("touchmove", e => {
            if (e.changedTouches[0].pageX - this.touchStartX > this.swipeDistance) {
                if (this.player.energy >= 2) {
                    this.player.startCharge();
                }
            }
        }, { passive: true });
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        // this.ctx.fillStyle = "blue";
        this.ctx.font = this.smallFont + "px Bungee";
        this.ctx.textAlign = "right";
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "white";
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.radio = this.height / this.baseHeight;

        this.bottomMargin = Math.floor(50 * this.radio);
        this.smallFont = Math.ceil(20 * this.radio);
        this.largeFont = Math.ceil(45 * this.radio);

        this.gravity = 0.15 * this.radio;
        this.speed = 2 * this.radio;
        this.minSpeed = this.speed;
        this.maxSpeed = this.speed * 5;
        this.background.resize();
        this.player.resize();
        this.createObstacles();
        this.obstacles.forEach(obstacle => {
            obstacle.resize();
        });
        this.score = 0;
        this.gameOver = false;
        this.timer = 0;
    }

    render(deltaTime) {
        if (deltaTime !== undefined) {
            if (!this.gameOver) {
                this.timer += deltaTime;
            }
            this.handlePeriodicEvents(deltaTime);
        }
        this.background.update();
        this.background.draw();
        this.drawStatusText();
        this.player.update();
        this.player.draw();
        this.obstacles.forEach(obstacle => {
            obstacle.update();
            obstacle.draw();
        });
    }

    createObstacles() {
    
        this.obstacles = [];
        const firstX = this.baseHeight * this.radio;
        const obstacleSpacing = 600 * this.radio;
        for(let i = 0; i < this.numberOfObstacles; i++) {
            this.obstacles.push(new Obstacle(this, firstX + i * obstacleSpacing));
        }
    }

    checkCollision(a, b) {
    
        const dx = a.collisionX - b.collisionX;
        const dy = a.collisionY - b.collisionY;
        const distance = Math.hypot(dx, dy);
        const sumOfRadii = a.collisionRadius + b.collisionRadius;
        return distance <= sumOfRadii;

    }

    formatTimer() {
        return (this.timer * 0.001).toFixed(1);
    }

    handlePeriodicEvents(deltaTime) {
        if (this.eventTimer < this.eventInterval) {
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = this.eventTimer % this.eventInterval;
            this.eventUpdate = true;
        }
    }

    triggerGameOver() {
        
        // if (!this.gameOver) {
        //     this.gameOver = true;
        //     if (this.obstacles.length <= 0) {
        //         this.sound.play(this.sound.win);
        //         this.message1 = "Đúng rồi!";
        //         this.message2 = "Bạn có thể làm nó nhanh hơn " + this.formatTimer() + " giây?";
                
        //     } else {
        //         this.sound.play(this.sound.lose);
        //         this.message1 = "Đang bị rỉ sét?";
        //         this.message2 = "Thời gian va chạm " + this.formatTimer() + " giây!";
                
        //     }
        // }
    }

    drawStatusText() {

        this.ctx.save();
        this.ctx.fillText("Điểm: " + this.score, this.width - this.smallFont, this.largeFont);
        this.ctx.textAlign = "left";
        this.ctx.fillText("Thời gian: " + this.formatTimer(), this.smallFont, this.largeFont);
        if (this.gameOver) {
            if (this.player.collided) {
                this.message1 = "Đang bị rỉ sét?";
                this.message2 = "Thời gian va chạm " + this.formatTimer() + " giây!";
            } else if (this.obstacles.length <= 0) {
                this.message1 = "Đúng rồi!";
                this.message2 = "Bạn có thể làm nó nhanh hơn " + this.formatTimer() + " giây?";
            }
            this.ctx.textAlign = "center";
            this.ctx.font = this.largeFont + "px Bungee";
            this.ctx.fillText(this.message1, this.width * 0.5, this.height * 0.5 - this.largeFont, this.width);
            this.ctx.font = this.smallFont + "px Bungee";
            this.ctx.fillText(this.message2, this.width * 0.5, this.height * 0.5 - this.smallFont, this.width);
            this.ctx.fillText("Nhấn 'R' để thử lại!", this.width * 0.5, this.height * 0.5, this.width);
        }
        if (this.player.energy <= this.player.minEnergy) {
            this.ctx.fillStyle = "red";
        } else if (this.player.energy >= this.player.maxEnergy) {
            this.ctx.fillStyle = "green";
        }
        for(let i = 0; i < this.player.energy; i++) {
            this.ctx.fillRect(10, this.height - 10 - this.player.barSize * i, this.player.barSize * 5, this.player.barSize);
        }
        this.ctx.restore();
    }
}

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);
    game.render();

    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(deltaTime);
        // if (!game.gameOver) 
            requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});