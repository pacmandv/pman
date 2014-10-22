
// count 28*32  size 8*8
// 1 mean wall, 0 nothing, 2 mean food,
var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function Map() {
}

Map.prototype.renderMap = function() {
    var mapBody  = document.getElementsByClassName("b-map")[0];
    var wall;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            wall = document.createElement("div");
            if (map[i][j] == 1) {
                wall.className = "wall";
                wall.id = getFoodElement(i*8, j*8);
                wall.style.left = j * 8 +"px";
                wall.style.top = i * 8 +"px";
            } else {
                var food;
                if (map[i][j] == 0) {
                    food = document.createElement("div");
                    food.className = "food";
                    food.id = getFoodElement(i*8, j*8);
                    food.style.left = j * 8 +"px";
                    food.style.top = i * 8 +"px";
                    mapBody.appendChild(food);
                }
                //wall.className = "n-wall";
            }
            mapBody.appendChild(wall);
        }
    }
};

var m =  new Map();
m.renderMap();
function Pacman() {

}


Pacman.prototype.create = function(left, top) {
    var pm = document.createElement("div");
    pm.className = "pm";
    pm.style.left = left +"px";
    pm.style.top = top - 3 +"px";
    //pm.id = "pm";
    var mapBody  = document.getElementsByClassName("b-map")[0];
    mapBody.appendChild(pm);
};

function getFoodElement(top, left) {
    return "fd"+top+"-"+left;
}

//var key = {
//    LEFT: 37,
//    UP: 38,
//    RIGHT: 39,
//    DOWN: 40
//};

Pacman.prototype.setDirection = function() {

};

Pacman.prototype.move = function(direction) {
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top")) + 3;
    var l = 0;
    switch(direction) {
        case "right":
            for(var i = left; i < 200; i = i + 4) {
                pm.style.left = i +"px";
                if((i % 8 == 0) && (top % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(top, i));
                    var el2 = document.getElementById(getFoodElement(top, i + 8));
                    if(el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
        case "left":
            for(var i = left; i != 0; i = i - 4) {
                pm.style.left = i +"px";
                if((i % 8 == 0) && (top % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(top, i));
                    var el2 = document.getElementById(getFoodElement(top, i - 8));
                    if(el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
        case "top":
            for(var i = top; i != 0; i = i - 4) {
                pm.style.top = i +"px";
                if((i % 8 == 0) && (left % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(i, left));
                    console.log(el);
                    var el2 = document.getElementById(getFoodElement(i - 8, left));
                    if(el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
        case "bottom":
            for(var i = top; i < 300; i = i + 4) {
                console.log(i);
                pm.style.top = i +"px";
                if((i % 8 == 0) && (left % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(i, left));
                    console.log(el);
                    var el2 = document.getElementById(getFoodElement(i + 8, left));
                    if(el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
    }


};

Pacman.prototype.a = function(event) {

    var pm = new Pacman();

    if(event.keyCode == 37 ) {
        pm.move("left");
    }
    if(event.keyCode == 39 ) {
        pm.move("right");
    }
    if(event.keyCode == 38 ) {
        pm.move("top");
    }
    if(event.keyCode == 40 ) {
        pm.move("bottom");
    }
};

var pm = new Pacman();

pm.create(88, 184);
window.addEventListener("keydown", pm.a, false);
