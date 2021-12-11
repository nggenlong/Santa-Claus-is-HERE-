const keys = document.querySelectorAll('.key')

for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(){
        playNote(keys[i])
    })
}
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play()
}