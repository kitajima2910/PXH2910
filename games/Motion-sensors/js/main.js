const ball = document.querySelector(".ball")
const move = 10

const handleMotion = e => {
    let x = e.accelerationIncludingGravity.x * move
    let y = e.accelerationIncludingGravity.y * move
    let z = e.accelerationIncludingGravity.z * move

    document.querySelector("#x").value = "alpha X: " + x;
	document.querySelector("#y").value = "alpha Y: " + y;
	document.querySelector("#z").value = "alpha z: " + z;

    ball.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`

}

window.addEventListener("devicemotion", handleMotion, true)
