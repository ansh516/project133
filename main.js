function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
   
}

function draw() {
    image(video, 200, 100, 300, 200);
   fill("hotpink");
   stroke("purple");
   circle(50, 50, 100);
   fill("purple")
   rect(100, 20, 400, 50)
   fill("hotpink");
   stroke("purple");
   circle(550, 50, 100);
   fill("purple")
   rect(530, 90, 50, 400)
   fill("purple")
   rect(25, 90, 50, 400)
}

function take_snapshot() {
    save('Anshpreet_kaur_samra.png');
}



