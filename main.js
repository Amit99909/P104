Webcam.set(
    {
        height:350,
        width:350,
        image_format:"png",
        png_quality:75
    }
);
camera=document.getElementById("webcam");
Webcam.attach(cam);
function capture_img() {
    Webcam.snap(function (pic) {
        document.getElementById("picture").innerHTML='<img id="pic1" src="'+pic+'">';
    });
}
console.log(ml5.version);
identifier1=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JpWOqdwhT/model.json",modelLoaded());