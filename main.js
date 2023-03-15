
noseX=0;
noseY=0;
difference=0;
rightWristX=0;  
leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(600,600);

    canvas=createCanvas(600,525);
    canvas.position(1250,300);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
    background('#4169e1');

    document.getElementById("square_side").innerHTML=difference+"px";
     fill('#F90093');
     text("PRANSHU",50,400)
     stroke('#F90093');
     textSize(difference)
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
 if(results.length>0){
    console.log("result is",results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = "+ noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = " + leftWristX+"rightWristX = " + rightWristX + "difference = " + difference);
 }
}


