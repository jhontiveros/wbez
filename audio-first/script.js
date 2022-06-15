document.addEventListener("DOMContentLoaded", function(event) { 
    let wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#6E6F70',
        progressColor: '#EB3223',
        
        barWidth: 3,
        barHeight: 1, // the height of the wave
        barGap: null // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
    });
    wavesurfer.load('media/frank.mp3');

    let backTen = document.getElementById("backTen");
    let playBtn = document.getElementById("playBtn");
    let forwardTen = document.getElementById("forwardTen");

    backTen.onclick = function(){
        wavesurfer.skip(-10);
    }

    playBtn.onclick = function(){
        wavesurfer.playPause();
    }

    forwardTen.onclick = function(){
        wavesurfer.skip(10);
    }


  });
  