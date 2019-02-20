// Month is 0 index
var bDay = new Date(1990, 4, 21, 12, 12).getTime();
var msInYear = 31536000000;
var precision = 1000000000;

function now() {
  return new Date().getTime();
}

function inYears() {
  var n = (now() - bDay) / msInYear;
  return Math.round(n * precision) / precision;
}

function updateTime() {
  updateContent(pad(inYears()));
  var t = setTimeout(updateTime, 10);
}

function pad(input) {
  var inputLength = input.toString().length;
  var precisionLength = precision.toString().length + 2;
  var difference = precisionLength - inputLength;
  var padding = Array(difference + 1).join("0");
  var output = input.toString() + padding;
  return output;
}

function updateContent(newContent) {
  document.getElementById('life-counter').innerHTML = newContent;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomBackground() {
  var skulls = [
    "./images/200_s.gif",
    "./images/tumblr_m34ayvI7uq1rt947wo1_500.gif",
    "./images/Punuk.Alaska.skulls.jpg",
    "./images/1410942547886_wps_1_A_skull_sits_on_the_beach.jpg",
    "./images/StillLifeWithASkull.jpg",
    "./images/skull-painting-i.jpg",
    "./images/hb_49.107.jpg",
    "./images/giphy.gif",
  ]
  var other = [
    "./images/beach-sand.jpeg",
  ]
  var art = [
    "./images/hieronymus_bosch9.jpg",
    "./images/maxresdefault.jpg",
    "./images/artsfon.com-11062.jpg",
    "./images/4203dd59b9d66e4abc0225ac21c29863.jpg",
    "./images/maxresdefault-2.jpg",
    "./images/wallpaper_van-gogh_animaatjes-26.jpg",
    "./images/0c69b222d530ec8d598212e48b02c711.jpg",
    "./images/amsterdam-the-potato-eaters-1500x850.jpg",
    "./images/Jean-Michel-Basquiat-50-cent-Piece.-1983.jpg",
    "./images/philistines.jpg",
    "./images/fbb4f8a07edf8c11215222384d946ded.jpg",
    "./images/191714ebafca38b577db0c4cfcfc7df7.jpg",
    "./images/pollack-autumn-image-ex-all-over-artdiscovery-info1.jpg",
    "./images/my_jackson_pollock_painting_by_amau41200-d4vjeut.jpg",
    "./images/not_a_jackson_pollack_parade_by_aegiandyad-d3eiybf.jpg",
    "./images/71GiD8PbZCL.jpg",
    "./images/cy-twombly-postcard.jpg",
    "./images/40deb1a87dd85a7f165d667eb4dcd6f4.jpg",
    "./images/tumblr_nqqm1w1Y9i1qm8y12o1_1280.jpg",
    "./images/2015-KLIMT-04-FEAT.jpg",
    "./images/maxresdefault.jpg",
    "./images/Gustav_Klimt_046.jpg",
    "./images/T06600_10.jpg",
    "./images/wallace-bournes.jpg",
    "./images/Gerhard-Richter-4.jpg",
    "./images/d1ad391827e0b460b59fc94526a5f86c.jpg",
    "./images/la-et-cm-gerhard-richter-linda-pace-20141013"
  ]

  var backgrounds = art;
  var index = getRandomInt(0, backgrounds.length);
  return backgrounds[index];
}

function setBackground() {
  document.body.style.backgroundImage = "url('" + getRandomBackground() + "')";
}

document.addEventListener("DOMContentLoaded", function () {
  setBackground();
  updateTime();
});
