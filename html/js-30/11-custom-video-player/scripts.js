const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleBtn = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function onToggleAction() {
    const action = video.paused ? 'play' : 'pause';

    video[action]();
}

function onToggleActionIcon() {
    toggleBtn.textContent = video.paused ? '►' : '❚ ❚';
}

function onChangeRange(e) {
    video[this.name] = this.value;
}

function onTimeupdate() {
    const pos = this.currentTime / this.duration * 100;

    progressBar.style.flexBasis = `${pos}%`;
}

function onChangePlayTime(e) {
 video.currentTime = e.offsetX / progress.offsetWidth * video.duration;
}

video.addEventListener('click', onToggleAction);
video.addEventListener('play', onToggleActionIcon);
video.addEventListener('pause', onToggleActionIcon);
video.addEventListener('timeupdate', onTimeupdate);

toggleBtn.addEventListener('click', onToggleAction);
ranges.forEach((range) => range.addEventListener('change', onChangeRange));

progress.addEventListener('click', onChangePlayTime);
progress.addEventListener('mousemove', (e) => onChangePlayTime.inProgress && onChangePlayTime(e));
progress.addEventListener('mousedown', () => onChangePlayTime.inProgress = true);
progress.addEventListener('mouseup', () => onChangePlayTime.inProgress = false);

