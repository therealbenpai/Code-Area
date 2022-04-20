const audio = new Audio('../../media/audio/soundv2.mp3')
if (!location.search.includes('audio=false')) {
    audio.play()
}