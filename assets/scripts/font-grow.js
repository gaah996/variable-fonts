document.addEventListener('scroll', event => {
  var text = document.querySelector("#dusseldot");

  var topScroll = window.pageYOffset - document.documentElement.clientTop;
  var topScrollN = (topScroll - 0) * (150 - 50) / (918 - 0) + 50;

  text.style.fontVariationSettings = `'wdth' ${topScrollN}`;
});