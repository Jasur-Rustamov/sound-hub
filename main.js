document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("play-pause");
  const progress = document.getElementById("progress");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
      audio.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio1");
  const playPauseBtn = document.getElementById("play-pause1");
  const progress = document.getElementById("progress1");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
      audio.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate1", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input1", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio2");
  const playPauseBtn = document.getElementById("play-pause2");
  const progress = document.getElementById("progress2");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
      audio.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate1", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input1", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio3");
  const playPauseBtn = document.getElementById("play-pause3");
  const progress = document.getElementById("progress2");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
      audio.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate1", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input1", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
});


const audio = document.getElementById('audio_new');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar_new');
const currentTimeEl = document.getElementById('current-time_new');
const durationEl = document.getElementById('duration');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    progressBar.value = (currentTime / duration) * 100;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

progressBar.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (progressBar.value / 100) * duration;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}




