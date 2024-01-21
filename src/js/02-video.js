import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
window.addEventListener('load', () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});
