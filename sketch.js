var btn_rojo, btn_verde, btn_rosa, btn_morado;

var r= 0;
var g= 0;
var b= 0;

function setup (){
createCanvas (400,400);
btn_rojo = createButton("ROJO");
btn_rojo.position(100,50);
btn_rojo.mousePressed(rojo_bg);

btn_verde = createButton("VERDE");
btn_verde.position(200, 50);
btn_verde.mousePressed(verde_bg)

btn_morado = createButton("MORADO");
btn_morado.position(90, 150);
btn_morado.mousePressed(morado_bg);

btn_rosa = createButton("ROSA");
btn_rosa.position(200, 150);
btn_rosa.mousePressed(rosa_bg);
}

function draw(){
    background(r, g, b);
}
function rojo_bg(){
    r=255; 
    g=0;
    b=0;
}
function verde_bg(){
    r=40;
    g=114;
    b=51;
}
function morado_bg(){
    r=87;
    g=35;
    b=100;
}
function rosa_bg(){
    r=255;
    g=192;
    b=203;
}