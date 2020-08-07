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
    var vh = document.documentElement.clientHeight
    var headerHeight = document.getElementById("header").getBoundingClientRect().height

    canvas.style.height = (vh - headerHeight) + "px"

    canvasPositionInfo = canvas.getBoundingClientRect()
    canvasWidth = canvasPositionInfo.width
    canvasHeight = canvasPositionInfo.height
    canvasYOffset = canvasPositionInfo.y

    // var shapeNums = getRand(4) + 3
    // for(var i = 0; i < shapeNums; i++){
    //     generateShape(i)
    // }

    document.getElementById("start-btn").onclick = function() {
        startBtnClick()
    }
    
    document.getElementById("shape0").onclick = function() {
        hideShape()
    }
}

function hideShape() {
    document.getElementById("shape0").style.display = "none"
}

function clear() {
    canvas.innerHTML = "<div id='shape0' class='shape'></div>"
}

function startBtnClick() {
    getCanvasInfo()
    generateShape("shape0")
}

function getCanvasInfo() {
    canvasPositionInfo = canvas.getBoundingClientRect()
    canvasWidth = canvasPositionInfo.width
    canvasHeight = canvasPositionInfo.height
    canvasYOffset = canvasYOffset
    // console.log(canvasWidth.toString() + " " + canvasHeight.toString() + " " + canvasYOffset.toString());
    if(canvasHeight > canvasWidth){
        canvasHeight = 0.9 * canvasHeight;
    }
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
    shape.style.display = ""
    
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
