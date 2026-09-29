export function initVideo() {
  const wrapper = document.querySelector(".video-block__wrapper");
  const playBtn = document.querySelector(".video-block__play");
  const video = document.querySelector(".video-block__video");

  if (!wrapper || !playBtn || !video) return;

  playBtn.addEventListener("click", () => {
    video.play();

    wrapper.classList.add("video-block__wrapper--video-playing");

    video.setAttribute("controls", "true");
  });

  video.addEventListener("ended", () => {
    video.removeAttribute("controls");
    wrapper.classList.remove("video-block__wrapper--video-playing");
    video.load();
  });
}
