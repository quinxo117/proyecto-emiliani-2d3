function showImage(imageSrc) {
  var overlay = document.getElementById("overlay");
  var overlayImage = document.getElementById("overlay-image");

  overlay.style.display = "block";
  overlayImage.src = imageSrc;
}

function hideImage() {
  var overlay = document.getElementById("overlay");

  overlay.style.display = "none";
}