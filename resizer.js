function updateDims(event) {
  zinger.innerHTML = `${window.innerWidth} x ${window.innerHeight}`
}

window.addEventListener('resize', updateDims)
updateDims();
