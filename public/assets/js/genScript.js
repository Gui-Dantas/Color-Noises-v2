const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const sliderButton = document.querySelector('#myRange')
const slider_value = document.querySelector('#slider_value')




//slider output
sliderButton.oninput = function(){
    const values = [13, 30,45, 60, 75, 100]

    const songs = ['White','Pink','Blue','Purple','Brown','Gray']

    let color = "grey";
    var value = this.value;
    // slider_value.innerText = value;
    
    for (let index = 0; index <= values.length; index++) {
        if (value < values[index]) {
            color = songs[index]
            break
        }
    }

    loadSong(color)
}





function loadSong(song){
    title.innerText = song 
    audio.src = `music/${song}.mp3`
    playSong()
}


function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')


    audio.play()
}


function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}



//Event listeners

playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play')
    
    if (isPlaying) {
        pauseSong()
        
    }
    else{
        playSong()
    }
})


