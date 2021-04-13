function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    m = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/olPSe4ZXQ/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("Model loaded");
}
function draw(){
    image(video,0,0,300,300);
    m.classify(video,gotResults);
}
function gotResults(e,results){
    if(e){
        console.log(e);
    }
    else{
        console.log(results);
        document.getElementById("person").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}