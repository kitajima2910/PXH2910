console.log("PXH_2910: Welcome to WVGConstrols");

function dispatchEvent(keyCode, type) {
    let event = new KeyboardEvent(type, { keyCode: keyCode });
    Object.defineProperty(event, "which", { value: keyCode });
    window.dispatchEvent(event);
}

window.keyGamePad = function(data) {
    var datakeyCode = JSON.parse(data);

    console.log("PXH_2910: keyGamePad: " + data);

    var keyCode = onProcess(datakeyCode.Player, datakeyCode.keyCode);

    if (keyCode !== undefined) {
        switch(datakeyCode.type) {
            case "pressed":
                dispatchEvent(keyCode, "keydown");
                break;
            case "released":
                dispatchEvent(keyCode, "keyup");
                break;
        }
    }


}

function testPXH() {
    alert("aaaaaaaaaaaaaaaaaaaaaaaaa");
}

var onProcess = function(player, keyCode) {
    if (player === "1") {
        switch(keyCode) {
            case 19: return 87; // DPad Up
            case 20: return 83; // DPad Down
            case 21: return 65; // DPad Left
            case 22: return 68; // DPad Right
        }
    }
}
