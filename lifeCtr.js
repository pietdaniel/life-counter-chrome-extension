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
  var backgrounds = [
    "https://media3.giphy.com/media/zRuexXmZ1XrFe/200_s.gif",
    "http://www.hammondfarms.com/wp-content/uploads/2015/04/beach-sand.jpeg",
    "http://24.media.tumblr.com/tumblr_m34ayvI7uq1rt947wo1_500.gif",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Punuk.Alaska.skulls.jpg",
    "http://i.dailymail.co.uk/i/pix/2014/09/17/1410942547886_wps_1_A_skull_sits_on_the_beach.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/StillLifeWithASkull.jpg",
    "http://natestormer.com/images/uploads/sketchboard/2012/skull-painting-i.jpg",
    "http://www.metmuseum.org/toah/images/hb/hb_49.107.jpg",
    "https://guliverlooks.files.wordpress.com/2013/10/hieronymus_bosch9.jpg",
    "https://i.ytimg.com/vi/iECzk9CeCi4/maxresdefault.jpg",
    "http://www.artsfon.com/pic/201409/1920x1080/artsfon.com-11062.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/42/03/dd/4203dd59b9d66e4abc0225ac21c29863.jpg",
    "http://davidscottwritings.com/wp-content/uploads/2013/05/maxresdefault-2.jpg",
    "https://p931z2nb6eo1jytzj2ufrzyoiz-wpengine.netdna-ssl.com/arts/wp-content/uploads/sites/2/2015/08/TurnerCover-1920x1080.jpg",
    "https://media.giphy.com/media/VbOmzi6vtIPWo/giphy.gif",
    "https://upload.wikimedia.org/wikipedia/en/archive/2/2e/20100414210212!La_danse_(I)_by_Matisse.jpg",
    "http://www.picgifs.com/wallpapers/wallpapers/van-gogh/wallpaper_van-gogh_animaatjes-26.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/0c/69/b2/0c69b222d530ec8d598212e48b02c711.jpg",
    "https://cdn.getyourguide.com/niwziy2l9cvz/49phB2yvrWCESi6ioUEwAK/de9d204e3582c3d02b817202cb46552e/amsterdam-the-potato-eaters-1500x850.jpg",
    "http://d2jv9003bew7ag.cloudfront.net/uploads/Jean-Michel-Basquiat-50-cent-Piece.-1983.jpg",
    "https://uploads2.wikiart.org/images/jean-michel-basquiat/philistines.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/fb/b4/f8/fbb4f8a07edf8c11215222384d946ded.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/19/17/14/191714ebafca38b577db0c4cfcfc7df7.jpg",
    "https://meappropriatestyle.files.wordpress.com/2014/04/pollack-autumn-image-ex-all-over-artdiscovery-info1.jpg",
    "https://humoringthegoddess.files.wordpress.com/2016/02/my_jackson_pollock_painting_by_amau41200-d4vjeut.jpg",
    "http://www.twoglasses.com/images/moma/pollack.jpg",
    "http://pre15.deviantart.net/6448/th/pre/i/2011/111/2/f/not_a_jackson_pollack_parade_by_aegiandyad-d3eiybf.jpg",
    "http://ecx.images-amazon.com/images/I/71GiD8PbZCL.jpg",
    "https://fingalgreenfineart.files.wordpress.com/2013/12/cy-twombly-postcard.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/40/de/b1/40deb1a87dd85a7f165d667eb4dcd6f4.jpg",
    "http://66.media.tumblr.com/1422736670f536694b975e7cc70df409/tumblr_nqqm1w1Y9i1qm8y12o1_1280.jpg",
    "http://agaunews.com/wp-content/uploads/2015/03/2015-KLIMT-04-FEAT.jpg",
    "https://i.ytimg.com/vi/BRUOACBkFRg/maxresdefault.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Gustav_Klimt_046.jpg",
    "http://www.tate.org.uk/art/images/work/T/T06/T06600_10.jpg",
    "https://uploads1.wikiart.org/images/gerhard-richter/wallace-bournes.jpg",
    "http://www.thegorgeousdaily.com/wp-content/uploads/2016/03/Gerhard-Richter-4.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/d1/ad/39/d1ad391827e0b460b59fc94526a5f86c.jpg",
    "http://www.trbimg.com/img-543c718e/turbine/la-et-cm-gerhard-richter-linda-pace-20141013"
  ];
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
