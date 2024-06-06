document.getElementById("orange").onclick = switchToOrange;
document.getElementById("green").onclick = switchToGreen;
document.getElementById("blue").onclick = switchToBlue;
document.getElementById("pink").onclick = switchToPink;
document.getElementById("rgb").onclick = switchToRGB;

let rgbInterval;

// for orange
function switchToOrange() {
  clearInterval(rgbInterval);
  document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
  document.getElementsByTagName("body")[0].style.color = "white";
}

// for green
function switchToGreen() {
  clearInterval(rgbInterval);
  document.getElementsByTagName("body")[0].style.backgroundColor = "green";
  document.getElementsByTagName("body")[0].style.color = "white";
}

// for blue
function switchToBlue() {
  clearInterval(rgbInterval);
  document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
  document.getElementsByTagName("body")[0].style.color = "white";
}

// for pink
function switchToPink() {
  clearInterval(rgbInterval);
  document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
  document.getElementsByTagName("body")[0].style.color = "black";
}

// for RGB
function switchToRGB() {
  clearInterval(rgbInterval);

  let r = 255;
  let g = 0;
  let b = 0;
  let phase = 0;

  function updateColor() {
    switch (phase) {
      case 0:
        g += 5;
        if (g >= 255) phase = 1;
        break;
      case 1:
        r -= 5;
        if (r <= 0) phase = 2;
        break;
      case 2:
        b += 5;
        if (b >= 255) phase = 3;
        break;
      case 3:
        g -= 5;
        if (g <= 0) phase = 4;
        break;
      case 4:
        r += 5;
        if (r >= 255) phase = 5;
        break;
      case 5:
        b -= 5;
        if (b <= 0) phase = 0;
        break;
    }

    document.getElementsByTagName(
      "body"
    )[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  rgbInterval = setInterval(updateColor, 10);
}
