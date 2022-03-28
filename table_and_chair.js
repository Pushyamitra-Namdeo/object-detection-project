img="";
status_1=""

function preload(){
    img= loadImage("table_and_chair.jpg");

}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetection= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
   
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
 }
}