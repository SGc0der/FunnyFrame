function setup() {
    canvas = createCanvas(750, 600);
    canvas.position(500, 0);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}

function draw() {
    image(video, 0, 0, 750, 600);
    tint(tint_colour);
}

function take_snapshot() {
    save("filtered_photo.png");
}

function apply_tint() {
    tint_colour = document.getElementById("filter_colour").value;
}