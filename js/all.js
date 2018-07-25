var galleryElems = document.querySelectorAll('.carousel');

for ( var i = 0, total = galleryElems.length; i < total; i++ ) {
  var galleryElem = galleryElems[i];

  var flkty = new Flickity( galleryElem, {
    prevNextButtons: false,
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
      // this.on( 'select', cellIndex); // WHAT IS THIS!!!!
      console.log(cellIndex)
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


// flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
//   if ( !cellElement ) {
//     return;
//   }
//     // go to next if current cell selected
//   if ( cellIndex == flkty.selectedIndex ) {
//     flkty.next( true );
//   } else {
//     $carousel.flickity( 'select', cellIndex );
//   }
// });
