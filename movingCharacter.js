// Create an object containing animated character data
const characterDataNeil = {
    arrImgs: ["runningw0000.png", "runningw0001.png",
        "runningw0002.png", "runningw0003.png", "runningw0004.png",
        "runningw0005.png", "runningw0006.png", "runningw0007.png"],
    poseNumber: 0,
    elem: document.querySelector("#neil"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 1000,
    y: document.querySelector("#park").scrollHeight - 100,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterDataNeil.x = 5;
        } else {
            this.x -= 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "boyAlt\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}

const characterDataOwen = {
    arrImgs: ["runningw0000.png", "runningw0001.png",
        "runningw0002.png", "runningw0003.png", "runningw0004.png",
        "runningw0005.png", "runningw0006.png", "runningw0007.png"],
    poseNumber: 0,
    elem: document.querySelector("#owen"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 1000,
    y: document.querySelector("#park").scrollHeight - 100,
    timerId: null,
    move : function() {
        if (this.y > this.screenWidth - 150) {
            characterDataOwen.y = 5;
        } else {
            this.y += 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "boyAlt\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}

// Function called when the move it button is clicked
function move() {
    characterDataNeil.timerId = setInterval(frame, 100);
    characterDataOwen.timerId = setInterval(frame, 100);
}

// Callback function to reset the image position
function frame() {
    characterDataNeil.move();
     characterDataOwen.move();
}

// Function called when the stop button is clicked
function stopMoving() {
    clearInterval(characterDataNeil.timerId);
    clearInterval(characterDataOwen.timerId);
}

/* You can add more characters and process the animation with an array */
const characters = [characterDataNeil, characterDataOwen];

