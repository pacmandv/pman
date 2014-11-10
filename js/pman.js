//Свойства
var properties = {
    mapElement: {
        elementSize: 12,
        empty: 0,
        wall: 1,
        food: 2,
        door: 3,
        energizer: 4,
        pacman: 5
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
    var energizerLeftShift = 2;
    var mapBody = document.getElementsByClassName("b-map")[0];
    var wall;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == properties.mapElement.wall) {
                var shiftBottom = 0;
                var shiftLeft = 0;
                wall = document.createElement("div");
                var cls = "wall";
                //Смещения стен оносительно тунеля
                if (i <= map[i].length && (map[(i + 1)][j] == properties.mapElement.food || map[(i + 1)][j] == properties.mapElement.energizer)) {
                    cls += " t-half";
                }
                if (i > 0 && (map[(i - 1)][j] == properties.mapElement.food || map[(i - 1)][j] == properties.mapElement.energizer)) {
                    cls += " b-half";
                    shiftBottom = properties.mapElement.elementSize / 2;
                }
                if (map[(i)][j + 1] == properties.mapElement.food || map[(i)][j + 1] == properties.mapElement.energizer) {
                    cls += " r-half";
                }
                if (map[(i)][j - 1] == properties.mapElement.food || map[(i)][j - 1] == properties.mapElement.energizer) {
                    cls += " l-half";
                    shiftLeft = properties.mapElement.elementSize / 2;
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


Pacman.prototype.create = function (left, top) {
    var pm = document.createElement("div");
    pm.className = "pm";
    pm.style.left = left + "px";
    pm.style.top = top - 3 + "px";
    //pm.id = "pm";
    var mapBody = document.getElementsByClassName("b-map")[0];
    mapBody.appendChild(pm);
};


//var key = {
//    LEFT: 37,
//    UP: 38,
//    RIGHT: 39,
//    DOWN: 40
//};

Pacman.prototype.setDirection = function () {

};

Pacman.prototype.move = function (direction) {
    var pm = document.getElementsByClassName("pm")[0];
    var style = window.getComputedStyle(pm);
    var left = parseInt(style.getPropertyValue("left")),
        top = parseInt(style.getPropertyValue("top")) + 3;
    var l = 0;
    switch (direction) {
        case "right":
            for (var i = left; i < 200; i = i + 4) {
                pm.style.left = i + "px";
                if ((i % 8 == 0) && (top % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(top, i));
                    var el2 = document.getElementById(getFoodElement(top, i + 8));
                    if (el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
        case "left":
            for (var i = left; i != 0; i = i - 4) {
                pm.style.left = i + "px";
                if ((i % 8 == 0) && (top % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(top, i));
                    var el2 = document.getElementById(getFoodElement(top, i - 8));
                    if (el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
        case "top":
            for (var i = top; i != 0; i = i - 4) {
                pm.style.top = i + "px";
                if ((i % 8 == 0) && (left % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(i, left));
                    console.log(el);
                    var el2 = document.getElementById(getFoodElement(i - 8, left));
                    if (el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
        case "bottom":
            for (var i = top; i < 300; i = i + 4) {
                console.log(i);
                pm.style.top = i + "px";
                if ((i % 8 == 0) && (left % 8 == 0)) {
                    var el = document.getElementById(getFoodElement(i, left));
                    console.log(el);
                    var el2 = document.getElementById(getFoodElement(i + 8, left));
                    if (el2.classList.contains("wall")) break;
                    el.style.display = "none";
                }
            }
            break;
    }


};

Pacman.prototype.a = function (event) {

    var pm = new Pacman();

    if (event.keyCode == 37) {
        pm.move("left");
    }
    if (event.keyCode == 39) {
        pm.move("right");
    }
    if (event.keyCode == 38) {
        pm.move("top");
    }
    if (event.keyCode == 40) {
        pm.move("bottom");
    }
};

var pm = new Pacman();

pm.create(88, 184);
window.addEventListener("keydown", pm.a, false);
