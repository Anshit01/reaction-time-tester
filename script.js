var shapeTypes = ["circle", "square"]
var colors = ["#7C4DFF", "#9C27B0", "#2196F3", "#009688", "#8BC34A", "#FFC107", "#FF5722", "#795548"]

var shapeCount = 0
var totalRounds = 20, roundi = 0

var canvas
var canvasPositionInfo
var canvasWidth
var canvasHeight 
var canvasYOffset

var startTimestamp, prevTimestamp, curTimestamp
var lastTime = Number.MAX_SAFE_INTEGER, bestTime = Number.MAX_SAFE_INTEGER
var averageTime = 0


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
        curTimestamp = getTimestampNow()
        roundi++
        updateStats()
        if(roundi < totalRounds){
            generateShape("shape0")
        }
    }
}

function hideShape() {
    document.getElementById("shape0").style.display = "none"
}

function clear() {
    canvas.innerHTML = "<div id='shape0' class='shape'></div>"
}

function startBtnClick() {
    roundi = 0
    lastTime = Number.MAX_SAFE_INTEGER
    bestTime = Number.MAX_SAFE_INTEGER
    averageTime = 0
    getCanvasInfo()
    startTimestamp = getTimestampNow()
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
    prevTimestamp = getTimestampNow()
    
}

function updateStats() {
    lastTime = curTimestamp - prevTimestamp
    bestTime = min(lastTime, bestTime)
    averageTime = ((averageTime * (roundi - 1)) + lastTime) / roundi
    document.getElementById("last-time-value").innerHTML = (lastTime/1000).toFixed(2)
    document.getElementById("best-time-value").innerHTML = (bestTime/1000).toFixed(2)
    document.getElementById("average-time-value").innerHTML = (averageTime/1000).toFixed(2)

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

function getTimestampNow() {
    var d = new Date();
    return d.getTime();
}