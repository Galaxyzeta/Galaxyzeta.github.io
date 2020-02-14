function audioPlay(qs){
    var audio = qs.parentElement.getElementsByTagName('audio')[0];
    audio.play();
    qs.parentElement.querySelector('.pause').style.display='inline';
    qs.style.display='none';
}

function audioPause(qs){
    var audio = qs.parentElement.getElementsByTagName('audio')[0];
    audio.pause();
    qs.parentElement.querySelector('.play').style.display='inline';
    qs.style.display='none';
}

function audioStop(qs){
    var audio = qs.parentElement.getElementsByTagName('audio')[0];
    audio.currentTime = 0;
    audio.pause();
    qs.parentElement.querySelector('.play').style.display='inline';
    qs.parentElement.querySelector('.pause').style.display='none';
}