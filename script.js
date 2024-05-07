const music = document.getElementById("myAudio")
const cortina = document.getElementById('sec')
function play() {
    music.play()
    

    cortina.style.display='none'
    document.getElementById('sec1').style.display='inline-block'
}    
