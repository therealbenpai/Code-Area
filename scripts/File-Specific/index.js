const audio = document.getElementById('audio')
if (!location.search.includes('audio=false')) {
    audio.play()
}