function updateDims(event) {
  const bigger = Math.max(window.innerWidth, window.innerHeight)
  zinger.style = `
    width: ${bigger}; height: ${bigger};
  `
}

window.addEventListener('resize', updateDims)
updateDims();
