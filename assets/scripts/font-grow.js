document.addEventListener('scroll', event => {
  var text = document.querySelector("#dusseldot");

  var topScroll = window.pageYOffset - document.documentElement.clientTop;
  var topScrollN = map(topScroll, 0, 918, 50, 150);

  text.style.fontVariationSettings = `'wdth' ${topScrollN}`;
});

const map = (value, inMin, inMax, outMin, outMax) => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;