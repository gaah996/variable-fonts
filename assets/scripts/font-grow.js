window.addEventListener('resize', event => {
  const text = document.querySelector("#dusseldot");

  let windowWidth = event.currentTarget.innerWidth;
  let windowHeight = event.currentTarget.innerHeight;

  let windowWidthN = map(windowWidth, 600, 1280, 150, 50);
  let windowHeightN = map(windowHeight, 300, 720, 150, 50);
  
  text.style.fontVariationSettings = `'wdth' ${windowWidthN < windowHeightN ? windowWidthN : windowHeightN}`
});

const map = (value, inMin, inMax, outMin, outMax) => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;