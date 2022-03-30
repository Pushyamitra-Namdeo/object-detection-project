img="";
status_1=""
objects= [];
function preload(){
    img= loadImage("empty-classroom.jpg");

}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetection= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

    function draw(){
        image(img, 0, 0, 640, 420);
        
      if(status_1 != "")
      {
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
    
            fill("#FF0000");
            percent= floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
    }


function modelLoaded(){
    console.log("Model is Loaded");
    status_1=true;
    objectDetection.detect(img,gotResults);
}

function gotResults(error,results){
 if(error){
     console.error(error);
 }else{
  console.log(results);
  objects= results;
 }
}