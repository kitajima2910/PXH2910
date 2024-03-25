const ball = document.querySelector(".ball")
const wall = document.querySelector(".wall")
const move = 10

const handleMotion = e => {
    let x = e.accelerationIncludingGravity.x * move
    let y = e.accelerationIncludingGravity.y * move
    let z = e.accelerationIncludingGravity.z * move

    // Bounding Box Check
    console.log("pxh wall.clientWidth: ", wall.clientWidth)
    console.log("pxh wall.clientHeight: ", wall.clientHeight)

    document.querySelector("#x").value = "alpha X: " + x;
	document.querySelector("#y").value = "alpha Y: " + y;
	document.querySelector("#z").value = "alpha z: " + z;

    ball.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`

}

window.addEventListener("devicemotion", handleMotion, true)
