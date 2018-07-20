var galleryElems = document.querySelectorAll('.carousel');

for ( var i = 0, total = galleryElems.length; i < total; i++ ) {
  var galleryElem = galleryElems[i];
  new Flickity( galleryElem, {
    prevNextButtons: false,
    setGallerySize: false
  });
}