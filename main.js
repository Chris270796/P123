noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 480);
    canvas = createCanvas(500, 480);
    canvas.position(600, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet has been initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    background("#46fb67");
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px";
    textSize(difference);
    fill("red");
    text("Chris", 50, 400);
}