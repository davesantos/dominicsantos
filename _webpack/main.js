// import $ from 'jquery';
const Flickity = require('flickity');
const scroll = new SmoothScroll('a[href*="#"]');
const WebFont = require('webfontloader');
//------------------------------------------------------------
//
//  Google Webfont Loader
//
//------------------------------------------------------------
WebFont.load({
  google: { families: [
    'Oranienbaum::latin'
  ]}
});

//------------------------------------------------------------
//
//  Flickity
//
//------------------------------------------------------------

const galleryElems = document.querySelectorAll('.carousel');

for ( let i = 0, total = galleryElems.length; i < total; i++ ) {
  let galleryElem = galleryElems[i];

  let flkty = new Flickity( galleryElem, {
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

//------------------------------------------------------------
//
//  Scroll Header effect
//
//------------------------------------------------------------

let lastFixPos = 0;
const threshold = 150; //sensitivity on scrolling
const theHead = document.querySelector(".header");

window.addEventListener("scroll", scrollEffect);

const scrollEffect = () => {
  let st = window.scrollY;
  let diff = Math.abs(window.scrollY - lastFixPos);
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
//  External Links
//
//------------------------------------------------------------

const externalLinks = () => {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    const b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
};
externalLinks();