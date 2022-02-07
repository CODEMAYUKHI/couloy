function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video,100,100,380,300);
 
    fill(255, 0, 0); 
    stroke(255, 0, 0);
     circle(50, 50, 80);

     fill(255, 0, 0); 
    stroke(255, 0, 0);
     circle(580, 50, 80);

     fill(255, 0, 0); 
    stroke(255, 0, 0);
     circle(580, 400, 80);


     fill(255, 0, 0); 
    stroke(255, 0, 0);
     circle(50, 400, 80);
}
function take_snapshot(){
    save('student_name.png');
}
