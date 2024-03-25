const ball = document.querySelector(".ball")
const move = 10

const handleMotion = e => {
    const x = e.accelerationIncludingGravity.x * move
    const y = e.accelerationIncludingGravity.y * move
    const z = e.accelerationIncludingGravity.z * move

	document.querySelector("#x").value = "alpha X: " + x;
	document.querySelector("#y").value = "alpha Y: " + y;
	document.querySelector("#z").value = "alpha z: " + z;

    if (x !== 0 && y !== 0) {
        ball.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`
    }

}

window.addEventListener("devicemotion", handleMotion, true)