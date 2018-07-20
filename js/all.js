var galleryElems = document.querySelectorAll('.carousel');

for ( var i = 0, total = galleryElems.length; i < total; i++ ) {
  var galleryElem = galleryElems[i];

  var flkty = new Flickity( galleryElem, {
    prevNextButtons: false
  });

  flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {

    if ( !cellElement ) {
      return;
    }
      // go to next if current cell selected
    if ( cellIndex == this.selectedIndex ) {
      this.next( true );
    } else {
      this.on( 'select', cellIndex);
      console.log(cellIndex)
    }

  });
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
