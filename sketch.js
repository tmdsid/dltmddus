var song;
var button;
var amp;


function setup() {
    createCanvas(200,200);
    song = loadSound('afterlike.mp3', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    amp = new p5.Amplitude();
    background(51);
}

function loaded() {
    button = createButton('play');
    button.mousePressed(togglePlaying);
    }

function draw() {
    background(51);

    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 10, 200);

    fill(255, 0, 255);
ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
    if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
    } else {
    song.stop();
    button.html('play');
    }
}

function changeBackground(col) {
    background(col);
    }
    function jumpSong() {
    var len = song.duration();
    var t = 0; //random(len);
    console.log(t);
    song.jump(t);
    }
    function draw() {
   