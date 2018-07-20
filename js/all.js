var galleryElems = document.querySelectorAll('.gallery');

for ( var i = 0, total = galleryElems.length; i < total; i++ ) {
  var galleryElem = galleryElems[i];
  new Flickity( galleryElem, {
    // options...
  });
}