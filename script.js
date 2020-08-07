var shapeTypes = ["circle", "square"]
var colors = ["#f00", "#0f0", "#00f"]
var shapeCount = 0


var canvas
var canvasPositionInfo
var canvasWidth
var canvasHeight 
var canvasYOffset


function onLoad() {
    canvas = document.getElementById("canvas")
    canvasPositionInfo = canvas.getBoundingClientRect()
    canvasWidth = canvasPositionInfo.width
    canvasHeight = canvasPositionInfo.height
    canvasYOffset = canvasPositionInfo.y

    // var shapeNums = getRand(4) + 3
    // for(var i = 0; i < shapeNums; i++){
    //     generateShape(i)
    // }
}

document.getElementById("start-btn").onclick = function() {
    console.log("hello")
    canvasPositionInfo = canvas.getBoundingClientRect()
    canvasWidth = canvasPositionInfo.width
    canvasHeight = canvasPositionInfo.height
    canvasYOffset = canvasYOffset
    console.log(canvasWidth.toString() + " " + canvasHeight.toString() + " " + canvasYOffset.toString());
    clear()
    generateShape("shape0")
    
}

document.getElementById("shape0").onclick = function() {
    clear()
}

function clear() {
    canvas.innerHTML = "<div id='shape0' class='shape' onclick='clear();'></div>"
}

function generateShape(shapeid) {
    var shapeType = shapeTypes[getRand(shapeTypes.length)]
    var shape = document.getElementById(shapeid)
    var side = Math.floor(min(canvasWidth, canvasHeight) * (getRand(40) + 10) / 100)
    shape.className = "shape " + shapeType
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

onLoad()