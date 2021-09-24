function preload() 
{}

function setup() 
{
    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() 
{
    image(video,0,0,640,480);
}

function take_snapshot() 
{
    save('your_image.png');
}
