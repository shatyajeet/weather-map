export const weatherMap = (containerId) => {
  let containerElement = document.querySelector(containerId);
  let iframeNode = document.createElement('iframe');
  iframeNode.src = `https://www.google.com/maps/embed/v1/directions
    ?key=AIzaSyAY0F9DQUGisVP1h_Q3ubkbvZfzyR4lGX0
    &origin=Oslo+Norway
    &destination=Telemark+Norway
    &avoid=tolls|highways`;
  iframeNode.height = 480;
  iframeNode.width = 640;
  containerElement.appendChild(iframeNode);
};
