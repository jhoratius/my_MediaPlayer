    // Var Initialization 
    var video = document.querySelector('video');
    var juice = document.querySelector('orange_bar');
    var btn = document.getElementById('play_pause');
    var backwardBtn = document.getElementsByClassName('backward')[0];
    var forwardBtn = document.getElementsByClassName('forward')[0];
    var currentVolume = document.getElementById("currentVolume");

    // Event Initialization
    currentVolume.addEventListener("change", setvolume, false);
    

// Play Pause
function togglePlayPause(){
    if(video.paused){
        btn.className = "pause";
        video.play();
    }
    else{
        btn.className = "play";
        video.pause();
    }
}
btn.onclick = function(){
    togglePlayPause();
}
video.addEventListener('timeupdate', function(){
    var juicePos= video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.className = 'play';
    }
})
backwardBtn.addEventListener("click", fwd, false);
forwardBtn.addEventListener("click", bwd, false);
// Skip Forward / Skip Backward 
function fwd(){
    video.currentTime -= 3;
}
function bwd(){
    video.currentTime += 3;
    if(video.currentTime >= video.duration){
        forwardBtn.preventDefault(forwardBtn.onclick);
    }
}

// Volume
function setvolume(){
    video.volume = currentVolume.value/100;
}