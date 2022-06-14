document.addEventListener("DOMContentLoaded", function(event) { 
    let wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        barWidth: 2,
        barHeight: 1, // the height of the wave
        barGap: null // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
    });
    wavesurfer.load('media/frank.mp3');
  });
  