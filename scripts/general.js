import { videos } from './data.js';

let videoPreviewHTML = '';

videos.forEach((video) => {
  videoPreviewHTML += `
  <div class="video-preview">
            <div class="thumb-container">
            <img class="video-img" src="${video.img}" />
            <div class="video-time">${video.time}</div>
          </div>
    <div class="video-description-container">
      <div class="channel-pic-container">
        <img class="channel-pic" src="${video.channelPic}" />
      </div>
      <div class="video-description">
        <div class="video-title">
          ${video.title}
        </div>
        <div class="channel-name">${video.channelName}</div>
        <div class="video-stats">${video.stats}</div>
      </div>
    </div>
  </div>`;
});

document.querySelector('.js-video-grid').innerHTML = videoPreviewHTML;

