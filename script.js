document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('miVideo');
    const toggleAudioBtn = document.getElementById('toggleAudioBtn');
    const audioOnIcon = toggleAudioBtn.querySelector('.on');
    const audioOffIcon = toggleAudioBtn.querySelector('.off');

    toggleAudioBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            audioOnIcon.style.display = 'block';
            audioOffIcon.style.display = 'none';
        } else {
            video.muted = true;
            audioOnIcon.style.display = 'none';
            audioOffIcon.style.display = 'block';
        }
    });
});

