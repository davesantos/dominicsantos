// import $ from 'jquery';
var Flickity = require('flickity');

//------------------------------------------------------------
//
//  Google Webfont Loader
//
//------------------------------------------------------------

WebFontConfig = {
  google: { families: [
    'Oranienbaum::latin'
  ]}
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

//------------------------------------------------------------
//
//  Flickity
//
//------------------------------------------------------------

var galleryElems = document.querySelectorAll('.carousel');

for ( var i = 0, total = galleryElems.length; i < total; i++ ) {
  var galleryElem = galleryElems[i];

  var flkty = new Flickity( galleryElem, {
    prevNextButtons: false,
    lazyLoad: 2,
    adaptiveHeight: true
  });

  flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {

    if ( !cellElement ) {
      return;
    }
      // go to next if current cell selected
    if ( cellIndex == this.selectedIndex ) {
      this.next( true );
    } else {
      flkty.on( 'select', cellIndex);
    }
  });
}

var lastFixPos = 0;
var threshold = 150; //sensitivity on scrolling
var theHead = document.querySelector(".header");

window.addEventListener("scroll", scrollEffect);

function scrollEffect() {
  var st = window.scrollY;
  var diff = Math.abs(window.scrollY - lastFixPos);
  if (diff > threshold || st < 100) {
    if (st < lastFixPos) {
      if (theHead.classList)
        theHead.classList.remove('hide');
      else
        theHead.className = theHead.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    lastFixPos = st;
  } else if (st > lastFixPos) {
    if (theHead.classList)
      theHead.classList.add('hide');
    else
      theHead.className += ' ' + className;
  }
}


//------------------------------------------------------------
//
//  Scroll Smooth
//
//------------------------------------------------------------

var targetOffset, currentPosition,
    body = document.body,
    button = document.getElementById('scrollButton'),
    animateTime = 900;

function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
};

if (button) {

  button.addEventListener('click', function (event) {

    targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
    currentPosition = getPageScroll();

    body.classList.add('in-transition');
    body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

    window.setTimeout(function () {
      body.classList.remove('in-transition');
      body.style.cssText = "";
      window.scrollTo(0, targetOffset);
    }, animateTime);

    event.preventDefault();
  }, false);
};
