document.addEventListener("DOMContentLoaded", function(event) { 
    let wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#7F6F9C',
        progressColor: '#2C1A58',

        responsive: true,
        
        barWidth: 3,
        barHeight: 1,
        barGap: null
    });
    wavesurfer.load('media/frank.mp3');

    let backTen = document.getElementById("backTen");
    let playBtn = document.getElementById("playBtn");
    let pauseBtn = document.getElementById("pauseBtn");
    let playPause = document.getElementById("playPause");
    let forwardTen = document.getElementById("forwardTen");

    backTen.onclick = function(){
        wavesurfer.skip(-10);
    }

    playPause.onclick = function(){
        wavesurfer.playPause();
        if (wavesurfer.isPlaying()) {
            playBtn.style.display = "none";
            pauseBtn.style.display = "block";
        } else {
            playBtn.style.display = "block";
            pauseBtn.style.display = "none";
        }
    }

    forwardTen.onclick = function(){
        wavesurfer.skip(10);
    }

    let btn = document.querySelector('button');
    let content = document.querySelector(".detail-content")

    btn.addEventListener('click', () => {
    if(content.style.display === 'none'){
        content.style.display = 'block';
    }else {
        content.style.display = 'none';
    }

    })
  });
  