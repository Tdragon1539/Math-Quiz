var canvas= new fabric.Canvas('myCanvas');

block_imagew= 30;
block_imageh= 30;
player_x= 10;
player_y= 10;
var player_object= "" ;
var block_image= "";

function player_update(){

    fabric.Image.fromURL("player.png", function (Img){
player_object= Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({top: player_y, left: player_x
});
canvas.add(player_object);



    });
}
player_update();
function view_image(new_image){
    fabric.Image.fromURL(new_image, function (Img){
block_image= Img;
block_image.scaleToWidth(block_imagew);
block_image.scaleToHeight(block_imageh);
block_image.set({top:player_y, left: player_x});
canvas.add(block_image);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey == true && keypressed == '80'){
block_imagew= block_imagew + 10;
block_imageh= block_imageh + 10;
document.getElementById("current_width").innerHTML= block_imagew;
document.getElementById("current_height").innerHTML= block_imageh;
    }

    if(e.shiftKey == true && keypressed == '77'){
        block_imagew= block_imagew - 10;
        block_imageh= block_imageh - 10;
        document.getElementById("current_width").innerHTML= block_imagew;
        document.getElementById("current_height").innerHTML= block_imageh;
    }

    if(keypressed == "38"){
    up();

    }

    if(keypressed == "40"){
    down();

    }

    if(keypressed == "39"){
    right();
    }
    if(keypressed == "37"){
    left();
    }

    if(keypressed == "70"){
    view_image('spiderman_face.png');


    }

    if(keypressed == "66"){
    view_image('ironman_body.png');
    }

    if(keypressed == "76"){
    view_image('spiderman_legs.png');

    }

    if(keypressed == "82"){
        view_image('thor_right_hand.png');
    
    }

    if(keypressed == "72"){
    
        view_image('hulk_left_hand.png');
    }


    
}

function up(){

    if(player_y>=0){

        player_y= player_y - block_imageh;
        canvas.remove(player_object);
        player_update();

    }
}


function down(){

    if(player_y<=500){

        player_y= player_y + block_imageh;
        canvas.remove(player_object);
        player_update();

    }
}

function left(){

if(player_x>=0){

    player_x= player_x - block_imagew;
    canvas.remove(player_object);
    player_update();


}

}

function right(){

if(player_x<=850){

    player_x= player_x + block_imagew;
    canvas.remove(player_object);
    player_update();

}

}







