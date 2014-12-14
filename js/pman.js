//Свойства
var properties = {
    mapElement: {
        elementSize: 8,
        empty: 0,
        wall: 1,
        food: 2,
        door: 3,
        energizer: 4,
        pacman: 5
    },
    textVar: {
        wall: 'wall',
        left: 'left',
        top: 'top'
    },
    ghost: {

    },
    key: {
        left: 37,
        up: 38,
        right: 39,
        down: 40
    },
    move: {
        pacmanDefaultSpeed: 30,
        pacmanEatFoodSpeed: 50,
        pacmanDirection: 'right'
    },
    score: {
        scoreResult: 0,
        costOfFood: 10
    },
    status: {
        isMoveComplete: false,
        isMoveStart: false,
        canMove: false
    }
};

// count 28*32  size 8*8
var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 4, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 4, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 3, 3, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function Map() {
}


Map.prototype.getFoodElement = function(top, left) {
    return "fd" + top + "-" + left;
};

//Закругление внешних углов
Map.prototype.getOuterRoundCorner = function(i, j) {
    var cls = "";
    if ((map[(i)][j - 1] == properties.mapElement.food || map[(i)][j - 1] == properties.mapElement.energizer) && (map[(i + 1)][j - 1] == properties.mapElement.food || map[(i + 1)][j - 1] == properties.mapElement.energizer) && (map[(i + 1)][j] == properties.mapElement.food || map[(i + 1)][j] == properties.mapElement.energizer)) {
        cls += " bl-border";
    }
    if ((map[(i)][j - 1] == properties.mapElement.food || map[(i)][j - 1] == properties.mapElement.energizer) && (map[(i - 1)][j - 1] == properties.mapElement.food || map[(i - 1)][j - 1] == properties.mapElement.energizer) && (map[(i - 1)][j] == properties.mapElement.food || map[(i - 1)][j] == properties.mapElement.energizer)) {
        cls += " tl-border";
    }
    if ((map[(i)][j + 1] == properties.mapElement.food || map[(i)][j + 1] == properties.mapElement.energizer) && (map[(i + 1)][j + 1] == properties.mapElement.food || map[(i + 1)][j + 1] == properties.mapElement.energizer) && (map[(i + 1)][j] == properties.mapElement.food || map[(i + 1)][j] == properties.mapElement.energizer)) {
        cls += " br-border";
    }
    if ((map[(i)][j + 1] == properties.mapElement.food || map[(i)][j + 1] == properties.mapElement.energizer) && (map[(i - 1)][j + 1] == properties.mapElement.food || map[(i - 1)][j + 1] == properties.mapElement.energizer) && (map[(i - 1)][j] == properties.mapElement.food || map[(i - 1)][j] == properties.mapElement.energizer)) {
        cls += " tr-border";
    }
    return cls;
};

//Закгруление внутрених углов
Map.prototype.getInnerRoundCorner = function(i, j) {
    var corner;
    var shiftX = 0;
    var shiftY = 0;
    var cls = "";

    if (i <= map[i].length && map[i][j + 1] == properties.mapElement.wall && map[i + 1][j] == properties.mapElement.wall && (map[i + 1][j + 1] == properties.mapElement.food || map[i + 1][j + 1] == properties.mapElement.energizer)) {
        cls = "tl-corner";
        shiftX = properties.mapElement.elementSize / 2;
        shiftY = properties.mapElement.elementSize / 2;
    }
    if (i <= map[i].length && map[i][j - 1] == properties.mapElement.wall && map[i + 1][j] == properties.mapElement.wall && (map[i + 1][j - 1] == properties.mapElement.food || map[i + 1][j - 1] == properties.mapElement.energizer)) {
        cls = "bl-corner";
        shiftX = properties.mapElement.elementSize / 2;
    }
    if (i != 0 && map[i - 1][j] == properties.mapElement.wall && map[i][j + 1] == properties.mapElement.wall && (map[i - 1][j + 1] == properties.mapElement.food || map[i - 1][j + 1] == properties.mapElement.energizer)) {
        cls = "tr-corner";
        shiftY = properties.mapElement.elementSize / 2;
    }
    if (i != 0 && map[i][j - 1] == properties.mapElement.wall && map[i - 1][j] == properties.mapElement.wall && (map[i - 1][j - 1] == properties.mapElement.food || map[i - 1][j - 1] == properties.mapElement.energizer)) {
        cls = "br-corner";
    }
    if(cls.length) {
        corner = document.createElement("div");
        corner.className = cls;
        corner.style.top = i * properties.mapElement.elementSize + shiftX + "px";
        corner.style.left = j * properties.mapElement.elementSize + shiftY + "px";
        return corner;
    } else {
        return "";
    }
};

//Закгруление внешних углов
Map.prototype.createElementInTunnel = function(cls, i, j) {
    var el = document.createElement("div");
    el.className = cls;
    el.id = this.getFoodElement(i * properties.mapElement.elementSize, j * properties.mapElement.elementSize);
    el.style.left = j * properties.mapElement.elementSize + "px";
    el.style.top = i * properties.mapElement.elementSize + "px";
    return el;
};

//Сторим карту из єлементов
Map.prototype.renderMap = function () {
    var doorYShift = 3;
    var mapBody = document.getElementsByClassName("b-map")[0];
    var wall;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == properties.mapElement.wall) {
                var shiftBottom = 0;
                var shiftLeft = 0;
                wall = document.createElement("div");
                var cls = properties.textVar.wall;
                //Смещения стен оносительно тунеля
                if (i <= map[i].length && (map[(i + 1)][j] == properties.mapElement.food || map[(i + 1)][j] == properties.mapElement.energizer)) {
                    cls += " t-half";
                }
                if (i > 0 && (map[(i - 1)][j] == properties.mapElement.food || map[(i - 1)][j] == properties.mapElement.energizer)) {
                    cls += " b-half";
                    shiftBottom = 4;
                }
                if (map[(i)][j + 1] == properties.mapElement.food || map[(i)][j + 1] == properties.mapElement.energizer) {
                    cls += " r-half";
                }
                if (map[(i)][j - 1] == properties.mapElement.food || map[(i)][j - 1] == properties.mapElement.energizer) {
                    cls += " l-half";
                    shiftLeft = 4;
                }
                cls += this.getOuterRoundCorner(i, j);
                (this.getInnerRoundCorner(i, j)) ? mapBody.appendChild(this.getInnerRoundCorner(i, j)) : "";
                wall.id = this.getFoodElement(i * properties.mapElement.elementSize, j * properties.mapElement.elementSize);
                wall.style.left = j * properties.mapElement.elementSize + shiftLeft + "px";
                wall.style.top = i * properties.mapElement.elementSize + shiftBottom + "px";
                wall.className = cls;
                mapBody.appendChild(wall);
            } else if(map[i][j] == properties.mapElement.food) {
                mapBody.appendChild(this.createElementInTunnel("food", i, j));
            } else if(map[i][j] == properties.mapElement.energizer) {
                mapBody.appendChild(mapBody.appendChild(this.createElementInTunnel("energizer", i, j)));
            } else if(map[i][j] == properties.mapElement.door) {
                var door = document.createElement("div");
                door.className = "door";
                door.style.left = j * properties.mapElement.elementSize + "px";
                door.style.top = i * properties.mapElement.elementSize + properties.mapElement.elementSize - doorYShift + "px";
                mapBody.appendChild(door);
            }
        }
    }
};

var m = new Map();

m.renderMap();

function Pacman() {

}

function Environment() {
}

Environment.prototype.createEnvironment = function(positionX, positionY, className) {
    var environment = document.createElement("div");
    environment.className = className;
    environment.style.left = positionX + "px";
    environment.style.top = positionY + "px";
    var mapBody = document.getElementsByClassName("b-map")[0];
    mapBody.appendChild(environment);
};

Map.prototype.setScore = function (el) {
    var scoreEl = document.getElementsByClassName("score-count")[0];
    if(el.style.display != "none" && el.classList.contains("food")) {
        properties.score.scoreResult += properties.score.costOfFood;
        scoreEl.innerHTML = properties.score.scoreResult;
        el.style.display = "none";
    }
};

Pacman.prototype = Object.create(Environment.prototype);

Pacman.prototype.setDirection = function () {

};

//Находим вход в новій туннель для пакмана, если біл изменинён путь следования
Pacman.prototype.findFirstToTurn = function () {

};

//Находим финальную точку в туннели для пакмана
//Find how todo this method 1 for 4?
Pacman.prototype.findDestinationPointLeft = function (positionX, positionY) {
    for (var i = positionX; i >= 0; i = i - properties.mapElement.elementSize) {
        var el2 = document.getElementById(m.getFoodElement(positionY, i));
        if(el2.classList.contains(properties.textVar.wall)) {
            return i + properties.mapElement.elementSize;
        }
    }
};

Pacman.prototype.findDestinationPointRight = function (positionX, positionY) {
    for (var i = positionX; i <= 500; i = i + properties.mapElement.elementSize) {
        var el2 = document.getElementById(m.getFoodElement(positionY, i));
        if(el2.classList.contains(properties.textVar.wall)) {
            return i - properties.mapElement.elementSize;
        }
    }
};

Pacman.prototype.findDestinationPointTop = function (positionX, positionY) {
    for (var i = positionY; i >= 0; i = i - properties.mapElement.elementSize) {
        //console.log(i);
        var el2 = document.getElementById(m.getFoodElement(i, positionX));
        if(el2.classList.contains(properties.textVar.wall)) {
            return i + properties.mapElement.elementSize;
        }
    }
};

Pacman.prototype.findDestinationPointBottom = function (positionX, positionY) {
    for (var i = positionY; i <= 500; i = i + properties.mapElement.elementSize) {
        //console.log(i);
        var el2 = document.getElementById(m.getFoodElement(i, positionX));
        if(el2.classList.contains(properties.textVar.wall)) {
            return i - properties.mapElement.elementSize;
        }
    }
};

Pacman.prototype.isFoodExist = function (foodElement) {
    var style = window.getComputedStyle(foodElement);
    return !!(foodElement.classList.contains('food') && style.display != 'none');
};

Pacman.prototype.isTunnelExit = function() {

};

Pacman.prototype.callByInterval = function (destination, i ,pmn, pm, tt ) {
    var t =  setInterval(function() {
        console.log('left call ' + destination);
        if(properties.move.pacmanDirection != "left") {
            clearTimeout(t);
            return;
        }
        if (i != destination) {
            pm.style.left = i + "px";
            if ((i % 8 == 0) && (top % 8 == 0)) {
                var el = document.getElementById(m.getFoodElement(top, i));
                if (pmn.isFoodExist(el)) {
                    properties.move.pacmanDefaultSpeed = 1000;
                } else {
                    properties.move.pacmanDefaultSpeed = 1;
                }
                el.style.display = "none";
            }
        } else {
            pm.style.left = destination + "px";
            clearInterval(t);
        }
        i -= 1;
    }, properties.move.pacmanDefaultSpeed + tt);
};
var destination = 0;

Pacman.prototype.moveLeft = function() {
    if(properties.move.pacmanDirection != "left") return;
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top"));
    var pmn = new Pacman();
    var map = new Map();
    //if(destination == 0) {
        destination = pmn.findDestinationPointLeft(left, top);
    //}
    var i =  left;
    var t =  setInterval(function() {
        //console.log('left call ' + destination);
        if(destination == 0) {
            clearTimeout(t);
            return;
        }
        if (i != destination) {
            properties.status.isMoveStart = true;
            pm.style.left = i + "px";
            if ((i % 8 == 0) && (top % 8 == 0)) {
                var el = document.getElementById(m.getFoodElement(top, i));
                map.setScore(el);
                el.style.display = 'none';
            }
        } else {
            pm.style.left = destination + "px";
            clearInterval(t);
            properties.move.pacmanDirection = '';
            properties.status.isMoveComplete = false;
            properties.status.isMoveStart = false;
            destination = 0;
        }
        i -= 1;
    }, properties.move.pacmanDefaultSpeed + 0);
};

Pacman.prototype.moveRight = function() {
    if(properties.move.pacmanDirection != "right") return;
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top"));

    var pmn = new Pacman();
    var map = new Map();
    //if(destination == 0) {
        destination = pmn.findDestinationPointRight(left, top);
    //}
    var i =  left;
    var t =  setInterval(function() {
        //if(destination == 0) {
        //    clearTimeout(t);
        //    return;
        //}
        if (i < destination) {
            properties.status.isMoveStart = true;
            pm.style.left = i + "px";
            if ((i % 8 == 0) && (top % 8 == 0)) {
                var el = document.getElementById(m.getFoodElement(top, i));
                map.setScore(el);
                el.style.display = 'none';
            }
        } else {
            pm.style.left = destination + "px";
            clearInterval(t);
            //properties.move.pacmanDirection = '';
            properties.status.isMoveComplete = false;
            //properties.status.isMoveStart = false;
            //destination = 0;

        }
        i += 1;
    }, properties.move.pacmanDefaultSpeed + 0);
};

Pacman.prototype.moveTop = function () {
    if(properties.move.pacmanDirection != "top") return;
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top"));

    var pmn = new Pacman();
    var map = new Map();
    //if(destination == 0) {
    destination = pmn.findDestinationPointTop(left, top);
    //}
    var i =  top;
    var t =  setInterval(function() {
        //if(destination == 0) {
        //    clearTimeout(t);
        //    return;
        //}
        if (i != destination) {
            pm.style.top = i + "px";
            if ((left % 8 == 0) && (i % 8 == 0)) {
                var el = document.getElementById(m.getFoodElement(i, left));
                map.setScore(el);
                el.style.display = "none";
            }
        } else {
            pm.style.top = destination + "px";
            properties.status.isMoveComplete = false;
            clearInterval(t);
        }
        i -= 1;
    }, properties.move.pacmanDefaultSpeed + 0);
};

Pacman.prototype.moveBottom = function () {
    if(properties.move.pacmanDirection != "bottom") return;
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top"));

    var pmn = new Pacman();
    var map = new Map();
    //if(destination == 0) {
    destination = pmn.findDestinationPointBottom(left, top);
    //}
    var i =  top;
    var t =  setInterval(function() {
        //if(destination == 0) {
        //    clearTimeout(t);
        //    return;
        //}
        if (i != destination) {
            pm.style.top = i + "px";
            if ((left % 8 == 0) && (i % 8 == 0)) {
                var el = document.getElementById(m.getFoodElement(i, left));
                map.setScore(el);
                el.style.display = "none";
            }
        } else {
            pm.style.top = destination + "px";
            properties.status.isMoveComplete = false;
            clearInterval(t);
        }
        i += 1;
    }, properties.move.pacmanDefaultSpeed + 0);
};

Pacman.prototype.move = function (direction) {
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top"));
    //var l = 0;
    var pmn = new Pacman();
    var destinationLeft = pmn.findDestinationPointLeft(left, top);
    switch (direction) {
        case "right":
            var destination = pmn.findDestinationPointRight(left, top);
            //console.log(destination);
            var i =  left;
            var t =  setInterval(function() {
                if (i != destination) {
                    pm.style.left = i + "px";
                    if ((i % 8 == 0) && (top % 8 == 0)) {
                        var el = document.getElementById(m.getFoodElement(top, i));
                        el.style.display = "none";
                    }
                } else {
                    pm.style.left = destination + "px";
                    clearInterval(t);
                }
                i += 1;
            }, properties.move.pacmanDefaultSpeed);
            break;
        case "left":

            pmn.callByInterval(destinationLeft, i,  pmn, pm, 0);

            break;
        case "top":
            var destination = pmn.findDestinationPointTop(left, top);
            var i =  top;
            var t =  setInterval(function() {
                if (i != destination) {
                    pm.style.top = i + "px";
                    if ((left % 8 == 0) && (i % 8 == 0)) {
                        var el = document.getElementById(m.getFoodElement(i, left));
                        el.style.display = "none";
                    }
                } else {
                    pm.style.top = destination + "px";
                    clearInterval(t);
                }
                i -= 1;
            }, properties.move.pacmanDefaultSpeed);
            break;
        case "bottom":
            var destination = pmn.findDestinationPointBottom(left, top);
            var i =  top;
            var t =  setInterval(function() {
                if (i != destination) {
                    pm.style.top = i + "px";
                    if ((left % 8 == 0) && (i % 8 == 0)) {
                        var el = document.getElementById(m.getFoodElement(i, left));
                        el.style.display = "none";
                    }
                } else {
                    pm.style.top = destination + "px";
                    clearInterval(t);
                }
                i += 1;
            }, properties.move.pacmanDefaultSpeed);
            break;
        default: break;
    }
};

Pacman.prototype.catchPressedKey = function (event) {
    if (event.keyCode == properties.key.left) {
        properties.move.pacmanDirection = "left";
        //properties.status.isMoveComplete = true;
        properties.status.isMoveStart = true;
    }
    if (event.keyCode == properties.key.right) {
        properties.move.pacmanDirection = "right";
        //properties.status.isMoveComplete = true;
        properties.status.isMoveStart = true;
        properties.status.canMove = true;
    }
    if (event.keyCode == properties.key.up) {
        properties.move.pacmanDirection = "top";
    }
    if (event.keyCode == properties.key.down) {
        properties.move.pacmanDirection = "bottom";
    }
};

var pm = new Pacman();

pm.createEnvironment(88, 184, "pm");

window.addEventListener("keydown", pm.catchPressedKey, false);

function Ghost() {
}

Ghost.prototype = Object.create(Environment.prototype);

var ghost = new Ghost();

Ghost.prototype.move = function() {
    var ghost = document.getElementsByClassName("ghost")[0];
    var style = window.getComputedStyle(ghost);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top"));
    var i = 0;
    var j = 0;
    if(!document.getElementById(m.getFoodElement(top, left - i)).classList.contains(properties.textVar.wall)) {
        while(!document.getElementById(m.getFoodElement(top, left - i)).classList.contains(properties.textVar.wall)) {
            ghost.style.left = left - i + "px";
            i += 8;
        }
    } else {
        while(!document.getElementById(m.getFoodElement(top + j, i)).classList.contains(properties.textVar.wall)) {
            ghost.style.top = top + j + "px";
            j += 8;
        }
    }
};

ghost.createEnvironment(104, 88, "ghost");

ghost.move();


function Main() {}

Main.prototype.init = function () {
    var time = setInterval(function() {
        console.log(properties.status.isMoveComplete);
        if(properties.status.isMoveComplete) return;
        //if(properties.status.isMoveStart) return;
        //if(properties.status.canMove) return;

        if(properties.move.pacmanDirection == "left") {
            //properties.status.isMoveStart = true;
            pm.moveLeft();
            properties.status.isMoveComplete = true;
        } else if (properties.move.pacmanDirection == "right") {
            pm.moveRight();
            //pm.move("right");
            properties.status.isMoveComplete = true;
        } else if (properties.move.pacmanDirection == "top") {
            //pm.move("top");
            pm.moveTop();
            properties.status.isMoveComplete = true;
        } else if (properties.move.pacmanDirection == "bottom") {
            pm.moveBottom();
            properties.status.isMoveComplete = true;
        }
        console.log('global interval');
    }, 100)
};

mFunction = new Main();

mFunction.init();