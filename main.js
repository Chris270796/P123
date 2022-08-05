noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;




function setup() {
    video = createCapture(VIDEO);
    video.size(550, 450);


    canvas = createCanvas(550, 450);
    canvas.position(600, 130);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);

}

function modalLoaded() {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log("results");
    }
}

function draw() {
    background("#fcba03")
}