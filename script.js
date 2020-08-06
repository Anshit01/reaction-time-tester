var shapes = ["circle", "square"]
var colors = ["#f00", "#0f0", "#00f"]
var shapeCount = 0


var canvas = document.getElementById("canvas")
var canvasPositionInfo = canvas.getBoundingClientRect()
var canvasWidth = canvasPositionInfo.width
var canvasHeight = canvasPositionInfo.height
var canvasYOffset = canvasPositionInfo.y


document.getElementById("start-btn").onclick = function() {
    console.log("hello")
    canvasPositionInfo = canvas.getBoundingClientRect()
    canvasWidth = canvasPositionInfo.width
    canvasHeight = canvasPositionInfo.height
    canvasYOffset = canvasYOffset
    console.log(canvasWidth.toString() + " " + canvasHeight.toString() + " " + canvasYOffset.toString());
    clear()
    generateShape()
    
}

function clear() {
    canvas.innerHTML = ""
}

function generateShape() {
    shapeCount++
    var shapeName = shapes[getRand(shapes.length)]
    canvas.innerHTML += "<div id='shape" + shapeCount + "' class='shape " + shapeName + "'></div>"
    var shape = document.getElementById("shape" + shapeCount)
    var side = Math.floor(min(canvasWidth, canvasHeight) * (getRand(40) + 10) / 100)
    shape.style.width = side + "px"
    shape.style.height = side + "px"
    shape.style.backgroundColor = colors[getRand(colors.length)]
    shape.style.left = getRand(canvasWidth - side) + "px"
    shape.style.top = (canvasYOffset + getRand(canvasHeight - side)) + "px"
}

function getRand(n) {
    n = Math.floor(n);
    if(n == 0){
        return 0;
    }
    return Math.floor(Math.random() * 100000000) % n;
}

function min(a, b){
    a = Number(a)
    b = Number(b)
    if(a < b){
        return a;
    }
    return b;
}