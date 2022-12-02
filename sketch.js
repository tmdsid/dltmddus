var song;
var button;

function setup() {
    createCanvas(200,200);
    song = loadSound('afterlike.mp3', loaded);
    button = createButton('play');
    button.mousePresssed(togglePlaying);
    background(51);
}

function togglePlaying() {
    if(!song.isPlaying()) {
        song.play();
        song.setvolume(0.3);
        button.html('pause');
    } else {
        song.stop();
        button.html('play');
    }
}

function loaded() {
    console.log('loaded');
}
