let playing = false;
function togglePlay() {
    let player = document.getElementById('player');
    player.contentWindow.postMessage({event: 'command', func: playing ? 'pauseVideo' : 'playVideo'}, '*');
    playing = !playing;
}
