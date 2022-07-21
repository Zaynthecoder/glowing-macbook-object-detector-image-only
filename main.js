img = "";
status = "";

function setup() {
    canvas = createCanvas(640,420);
    console.log("the canvas has been created");
    canvas.center();
    console.log("the canvas has been kept in the center");

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting the Objects in the image";

    
}

function modelLoaded() {
    console.log("yay, the model has been loaded, my amazing website should be able to detect objects now. ");
    status = true;
    objectDetector.detect(img, gotResult);
}

function preload() {
    img = loadImage('dog_cat.jpg');
    console.log("image has been loaded")
}

function draw() {
    image(img,0,0,640,420);
    fill("#0000FF");
    text("Dog", 45, 75);
    noFill();
    stroke("#0000FF");
    rect(30,60, 450, 350);

    fill("#0000FF");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320);


}

function gotResult(error, results ) {
    if (error) {
        console.log( "there has been an error. the error is: " + error)
    }
    console.log(results);
}
